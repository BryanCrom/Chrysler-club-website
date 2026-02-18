import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import Border from "../components/Border";
import Modal from "../components/Modal";

const ContactPage = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");

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
          setEmail(formRef.current.email.value);
          console.log("success");
          document.getElementById("success_modal").showModal();
        },
        (error) => {
          console.log("Error: " + error);
          document.getElementById("error_modal").showModal();
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
            <label
              className="flex flex-col text-lg font-semibold"
              id="full_name_label"
            >
              Full Name
              <input
                id="full_name_input"
                name="full_name"
                className="border-4 border-red-900 p-2"
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="on"
              ></input>
            </label>
          </div>
          <div className="m-5 flex flex-col">
            <label
              className="flex flex-col text-lg font-semibold"
              id="email_label"
            >
              Email Address
              <input
                id="email_input"
                name="email"
                className="border-4 border-red-900 p-2"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
              ></input>
            </label>
          </div>
          <div className="m-5 flex flex-col">
            <label
              className="flex flex-col text-lg font-semibold"
              id="message_label"
            >
              Message
              <textarea
                className="h-32 border-4 border-red-900 p-2"
                name="message"
                id="message_textarea"
                placeholder="Enter your message"
                required
              ></textarea>
            </label>
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

      <dialog id="success_modal" className="modal">
        <Modal title="Success" message={`A reply will be sent to ${email}`} />
      </dialog>
      <dialog id="error_modal" className="modal">
        <Modal title="error" message="Something went wrong." />
      </dialog>
    </div>
  );
};

export default ContactPage;
