const Modal = (props) => {
  return (
    <div className="modal-box flex flex-col items-center justify-center">
      <h1 className="text-center text-xl font-bold">{props.title}</h1>
      <p className="py-4 text-center">{props.message}</p>
      <div className="modal-action">
        <form className="dialog">
          <button className="btn">Dismiss</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
