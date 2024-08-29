
  import toast from "react-hot-toast";
  import { FormEvent, useState } from "react";
  import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
  import { TbFidgetSpinner } from "react-icons/tb";
  import { IoMdAddCircle } from "react-icons/io";
  import Swal from "sweetalert2";
import { useCreateFacilityMutation, useDeleteFacilityMutation, useGetAllFacilitiesQuery, useUpdateFacilityMutation } from "../../Redux/features/facilities.api";
import { Facility } from "../../types/types";
import Loading from "../Loading/Loading";
  
  const FacilityManage = () => {
    const { data: facilities, isLoading } = useGetAllFacilitiesQuery(undefined);
  
    const [deletFacility] = useDeleteFacilityMutation();
    const [updateFacility, { isLoading: isUpdateFacilityLoading }] =
      useUpdateFacilityMutation();
  
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState<Facility | null>(null);
  
    const [name, setName] = useState<string>(details?.name || "");
    const [description, setDescription] = useState<string>(
      details?.description || ""
    );
    const [pricePerHour, setPricePerHour] = useState<number>(
      details?.pricePerHour || 0
    );
    const [location, setLocation] = useState<string>(details?.location || "");
    const [image, setImage] = useState<string>(details?.image || "");
  
    const handleOpen = (details: any) => {
      setOpen(!open);
      setDetails(details);
      setName(details.name);
      setDescription(details.description);
      setPricePerHour(details.pricePerHour);
      setLocation(details.location);
      setImage(details.image);
    };
  
    const handleUpdateFacility = async (e: FormEvent) => {
      e.preventDefault();
  
      const id = details?._id;
  
      const payload = {
        name,
        description,
        pricePerHour,
        location,
        image,
      };
  
      const res = await updateFacility({ id, payload });
  
      if (res.data.success) {
        setOpen(!open);
        toast.success("Facility updated successfully!");
      }
    };
  
    const handleDeleteFacility = (id: string) => {
      Swal.fire({
        title: "Are you sure you want to delete this facility?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          deletFacility(id);
          toast.success("Facility deleted successfully!");
        }
      });
    };
  
    // Creating new facility
    const [createFacility, { isLoading: isCreateFacilityLoading }] =
      useCreateFacilityMutation();
  
    const [openCreateFacilityModal, setOpenCreateFacilityModal] = useState(false);
    const [newName, setNewName] = useState<string>("");
    const [newDescription, setNewDescription] = useState<string>("");
    const [newPricePerHour, setNewPricePerHour] = useState<number>(0);
    const [newLocation, setNewLocation] = useState<string>("");
    const [newImage, setNewImage] = useState<string>("");
  
    const handleCreateFacilityModalOpen = () => {
      setOpenCreateFacilityModal(!openCreateFacilityModal);
    };
  
    const handleCreateFacility = async (e: FormEvent) => {
      e.preventDefault();
  
      const payload = {
        name: newName,
        description: newDescription,
        pricePerHour: newPricePerHour,
        location: newLocation,
        image: newImage,
      };
  
      await createFacility(payload);
      setOpenCreateFacilityModal(!openCreateFacilityModal);
      toast.success("Facility created successfully!");
    };
  
    // Pagination
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const totalItems = facilities?.data?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      scrollToTop();
    };
  
    const currentData = facilities?.data?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    if (isLoading) {
      return <Loading />;
    }
  
    return (
      <div>
        <div className="bg-[#4158A6] w-full py-2 bg-secondary rounded-lg ">
          <h1 className="text-white text-xl text-center">All Facilites</h1>
        </div>
  
        <div className="flex justify-center items-center my-5">
          <Button
            onClick={handleCreateFacilityModalOpen}
            className="bg-[#E8B86D] flex justify-center items-center gap-2 capitalize text-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <IoMdAddCircle size={20} />
            <span>Create Facility</span>
          </Button>
        </div>
  
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentData?.map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-xl p-3 shadow-2xl hover:shadow-xl border-2 border-[#E8B86D]"
            >
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt="Hotel Photo"
                  className="h-[200px] w-full"
                />
              </div>
  
              <div className="mt-1 p-2">
                <h2 className="text-gray-800 text-center text-xl font-bold">
                  {item.name}
                </h2>
  
                <span className="text-lg flex justify-center items-center mt-4 font-bold text-gray-800 text-center">
                  tk {item.pricePerHour} per hour
                </span>
              </div>
  
              <div onClick={() => handleOpen(item)}>
                <button className="w-full rounded-lg bg-[#E8B86D] p-2 px-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-button-dark sm:flex-none md:text-base">
                  Edit
                </button>
              </div>
  
              <button
                onClick={() => handleDeleteFacility(item._id)}
                className="w-full mt-3 rounded-lg bg-red-700 p-2 px-3 text-center text-sm font-semibold text-white outline-none transition duration-100 sm:flex-none md:text-base"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
  
        <div className={`flex justify-center mt-14 mb-8`}>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="mx-2 px-4 py-2 bg-button text-black rounded disabled:opacity-50 bg-[#E8B86D]"
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === pageNumber + 1
                  ? "bg-button text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {pageNumber + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="mx-2 px-4 py-2 bg-button bg-[#E8B86D]  rounded text-black disabled:opacity-50"
          >
            Next
          </button>
        </div>
  
        {/* Update Modal */}
        <Dialog
          open={open}
          size="sm"
          handler={handleOpen}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="p-4">
            <h1 className="text-center text-lg text-gray-700">
              Update details for {details?.name}
            </h1>
  
            <form
              onSubmit={handleUpdateFacility}
              className="mt-5 flex flex-col gap-5"
            >
              <Input
                defaultValue={details?.name}
                onChange={(e) => setName(e.target.value)}
                label="Facility Name"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Textarea
                defaultValue={details?.description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
  
              <Input
                type="number"
                defaultValue={details?.pricePerHour}
                value={pricePerHour}
                onChange={(e) => setPricePerHour(Number(e.target.value))}
                label="Price per hour"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Input
                defaultValue={details?.location}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Location"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Input
                defaultValue={details?.image}
                value={image}
                onChange={(e) => setImage(e.target.value)}
                label="Image"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Button
                disabled={isUpdateFacilityLoading}
                type="submit"
                className="bg-[#E8B86D]"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {isUpdateFacilityLoading ? (
                  <div className="flex gap-3 justify-center items-center text-2xl">
                    <div className="animate-spin ">
                      <TbFidgetSpinner />
                    </div>
                    <span className="text-lg">Please Wait</span>
                  </div>
                ) : (
                  "Update"
                )}
              </Button>
            </form>
          </div>
        </Dialog>
  
        {/* Create Modal */}
        <Dialog
          open={openCreateFacilityModal}
          size="sm"
          handler={handleCreateFacilityModalOpen}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="p-4">
            <h1 className="text-center text-lg text-gray-700">
              Create New Facility
            </h1>
  
            <form
              onSubmit={handleCreateFacility}
              className="mt-5 flex flex-col gap-5"
            >
              <Input
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                label="Facility Name"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Textarea
                required
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                label="Description"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
  
              <Input
                required
                type="number"
                value={newPricePerHour}
                onChange={(e) => setNewPricePerHour(Number(e.target.value))}
                label="Price per hour"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Input
                required
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                label="Location"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Input
                required
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
                label="Image"
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
  
              <Button
                disabled={isCreateFacilityLoading}
                type="submit"
                className="bg-[#E8B86D]"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {isCreateFacilityLoading ? (
                  <div className="flex gap-3 justify-center items-center text-2xl">
                    <div className="animate-spin ">
                      <TbFidgetSpinner />
                    </div>
                    <span className="text-lg">Please Wait</span>
                  </div>
                ) : (
                  "Create"
                )}
              </Button>
            </form>
          </div>
        </Dialog>
      </div>
    );
  };
  
  export default FacilityManage;