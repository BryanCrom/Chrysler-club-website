const Border = (props) => {
  return (
    <div className="h-full border-8 border-red-900 p-0.5">
      <div className="h-full border-2 border-red-900 p-2 md:p-5">
        {props.children}
      </div>
    </div>
  );
};

export default Border;
