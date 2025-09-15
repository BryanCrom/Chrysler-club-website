const OfferCard = ({ title, description }) => {
  return (
    <div className="card-lg card w-72 border bg-base-content/5 shadow-lg">
      <div className="card-body">
        <h1 className="card-title mb-2 border-b-2 border-base-content font-bold">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;
