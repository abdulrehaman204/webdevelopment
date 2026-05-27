function Alert({ type = "success", message }) {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
}

export default Alert;