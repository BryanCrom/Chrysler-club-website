import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

import Border from "../components/Border";

const ContactPage = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          console.log("success");
          toast.success("Successfully sent message");
        },
        (error) => {
          console.log("Error: " + error);
          toast.error("Something went wrong");
        },
      );
  };

  return (
    <div className="mx-5 mb-10 mt-32 max-w-3xl md:mt-44 xl:mx-auto">
      <Border>
        <h1 className="mb-4 text-center text-4xl font-bold underline">
          Contact Us
        </h1>
        <form className="flex flex-col" ref={formRef} onSubmit={sendEmail}>
          <div className="m-5 flex flex-col">
            <label className="text-lg font-semibold">Full Name</label>
            <input
              name="full_name"
              className="border-4 border-red-900 p-2"
              type="text"
              placeholder="Enter your name"
              required
            ></input>
          </div>
          <div className="m-5 flex flex-col">
            <label className="text-lg font-semibold">Email Address</label>
            <input
              name="email"
              className="border-4 border-red-900 p-2"
              type="email"
              placeholder="Enter your email"
              required
            ></input>
          </div>
          <div className="m-5 flex flex-col">
            <label className="text-lg font-semibold">Message</label>
            <textarea
              className="h-32 border-4 border-red-900 p-2"
              name="message"
              id=""
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="m-5 flex items-center justify-center">
            <button
              type="submit"
              className="btn-wide h-14 rounded-3xl bg-red-900 text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </Border>
    </div>
  );
};

export default ContactPage;
