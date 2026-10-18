import privacy_policy from "../assets/CHRYSLER_CLUB_WEBSITE_PRIVACY_POLICY.pdf";

const Footer = () => {
  return (
    <div className="m-12 flex justify-center">
      <a
        className="font-serif text-xl underline hover:text-blue-700"
        href={privacy_policy}
      >
        Privacy Policy
      </a>
    </div>
  );
};

export default Footer;
