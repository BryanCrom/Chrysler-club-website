import Border from "../components/Border";
import TextBlock from "../components/TextBlock";

const ContactPage = () => {
  return (
    <div className="mx-5 mt-32 max-w-6xl md:mt-44 xl:mx-auto">
      <Border>
        <TextBlock
          title={"Contact Us"}
          description={
            "Get in touch with a member to learn more about the club"
          }
        />
        <form className="flex-col items-center">
          <div className="m-5">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required></input>
          </div>
          <div className="m-5">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required></input>
          </div>
          <div className="m-5">
            <label>Message</label>
            <textarea
              name=""
              id=""
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="m-5 flex items-center justify-center">
            <button type="submit" className="btn btn-lg btn-wide rounded-3xl">
              Send Message
            </button>
          </div>
        </form>
      </Border>
    </div>
  );
};

export default ContactPage;
