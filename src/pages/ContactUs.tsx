import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const ContactUs = () => {


    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_h9xcrof",
          "template_gjve0wg",
          form.current!,
          "k1kcuEGt4nta6swvD"
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message Sent Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          },
          (error) => {
            console.error(error.text);
          }
        );
    };
  return (
    <div className="bg-[#A1D6B2]">
      <form ref={form} onSubmit={sendEmail}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
             <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.3350421915732!2d90.40060238874337!3d22.691750391064847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375533ac1ee93ac7%3A0x615e7e7fb6520d07!2z4Kaq4KeC4Kaw4KeN4KasIOCmmuCmsOCmleCmvuCmieCmr-CmvOCmviDgpqzgpr7gpofgpqTgp4Hgprgg4Ka44Ka-4Kay4Ka-4KauIOCmnOCmvuCmruCnhyDgpq7gprjgppzgpr_gpqbgpaQ!5e0!3m2!1sen!2sbd!4v1724671783501!5m2!1sen!2sbd"
                ></iframe>
           
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                   Barishal Bhola Higway, Barishal
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-red-500 leading-relaxed">
                    azmal@sportsbooking.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+0081799590273</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-7 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font">
                Contact us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                If you have any doubts, please contact us by submitting
                following form
              </p>

              <div className="relative mb-4 form-group">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  name="from_name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4 form-group">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  name="from_email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

            
              <div className="relative mb-4 form-group">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-button focus:ring-2 focus:ring-button text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-[#1BBF72] text-white p-2 rounded-full w-40"
                ></input>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ContactUs;