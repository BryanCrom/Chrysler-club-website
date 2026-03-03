const Modal = (props) => {
  return (
    <div className="modal-box flex flex-col items-center justify-center">
      <h1 className="text-center font-serif text-xl font-bold">
        {props.title}
      </h1>
      <p className="py-4 text-center font-serif">{props.message}</p>
      <p className="text-center font-serif font-bold">{props.email}</p>
      <div className="modal-action">
        <form className="dialog">
          <button className="btn font-serif">Dismiss</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
