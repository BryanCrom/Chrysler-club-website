const TextBlock = ({ title, description }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-3xl font-bold underline">{title}</h1>
      <p className="text-center text-xl">{description}</p>
    </div>
  );
};

export default TextBlock;
