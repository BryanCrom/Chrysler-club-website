import Border from "../components/Border";

const ContactPage = () => {
  return (
    <div className="mx-5 mt-32 max-w-3xl md:mt-44 xl:mx-auto">
      <Border>
        <h1 className="mb-4 text-center text-4xl font-bold underline">
          Contact Us
        </h1>
        <form className="flex flex-col">
          <div className="m-5 flex flex-col">
            <label className="text-lg font-semibold">Full Name</label>
            <input
              className="border-4 border-red-900 p-2"
              type="text"
              placeholder="Enter your name"
              required
            ></input>
          </div>
          <div className="m-5 flex flex-col">
            <label className="text-lg font-semibold">Email Address</label>
            <input
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
              name=""
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
