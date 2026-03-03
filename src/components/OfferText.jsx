const OfferText = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-serif text-xl">
        <span className="font-serif text-xl font-bold underline">{title}</span>
        {description}
      </p>
    </div>
  );
};

export default OfferText;
