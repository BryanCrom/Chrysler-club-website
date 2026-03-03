import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

import Border from "../components/Border";
import Modal from "../components/Modal";

const ContactPage = () => {
  const formRef = useRef();
  const turnstileRef = useRef();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [size, setSize] = useState("normal");

  useEffect(() => {
    const getSize = () =>
      setSize(window.innerWidth < 480 ? "compact" : "normal");
    getSize();
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (formRef.current.subject.value) {
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setEmail(formRef.current.email.value);
          console.log("success");
          document.getElementById("success_modal").showModal();
          if (turnstileRef.current) {
            turnstileRef.current.reset();
          }
          formRef.current.reset();
        },
        (error) => {
          console.log("Error: " + error);
          document.getElementById("error_modal").showModal();
        },
      );
  };

  return (
    <div className="mx-auto mb-5 mt-32 max-w-2xl px-5 sm:mt-40 md:mt-44">
      <Border>
        <h1 className="mb-4 text-center font-serif text-4xl font-bold underline">
          Contact Us
        </h1>
        <form className="flex flex-col" ref={formRef} onSubmit={sendEmail}>
          <div className="mx-5 my-2.5 flex flex-col">
            <label
              className="flex flex-col font-serif text-lg font-semibold"
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
              />
            </label>
          </div>
          <div className="mx-5 my-2.5 flex flex-col">
            <label
              className="flex flex-col font-serif text-lg font-semibold"
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
              />
            </label>
          </div>
          <div className="hidden">
            <label>
              <input
                id="subject_input"
                name="subject"
                type="text"
                autoComplete="off"
              />
            </label>
          </div>
          <div className="mx-5 my-2.5 flex flex-col">
            <label
              className="flex flex-col font-serif text-lg font-semibold"
              id="message_label"
            >
              Message
              <textarea
                className="h-32 border-4 border-red-900 p-2"
                name="message"
                id="message_textarea"
                placeholder="Enter your message"
                required
              />
            </label>
          </div>
          <Turnstile
            className="mx-auto mt-2.5 flex"
            ref={turnstileRef}
            siteKey={import.meta.env.VITE_CLOUDFLARE_SITE_KEY}
            onSuccess={(token) => setToken(token)}
            onError={() => setToken(null)}
            onExpire={() => setToken(null)}
            options={{ size }}
          />
          <div className="m-5 flex items-center justify-center">
            <button
              type="submit"
              className="btn btn-wide h-14 rounded-3xl bg-red-900 font-serif text-white shadow-lg transition duration-200 ease-in-out hover:translate-y-0.5 hover:bg-red-800 hover:shadow-md"
              disabled={!token}
            >
              Send Message
            </button>
          </div>
        </form>
      </Border>

      <dialog id="success_modal" className="modal">
        <Modal
          title="Success"
          message={
            "Please double check this email address is correct so we can send you a reply:"
          }
          email={email}
          closeId="success_modal"
        />
      </dialog>
      <dialog id="error_modal" className="modal">
        <Modal
          title="error"
          message="Something went wrong."
          closeId="error_modal"
        />
      </dialog>
    </div>
  );
};

export default ContactPage;
