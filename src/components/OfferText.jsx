const OfferText = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl">
        <span className="mb-4 text-xl font-bold underline">{title}</span>
        {description}
      </p>
    </div>
  );
};

export default OfferText;
