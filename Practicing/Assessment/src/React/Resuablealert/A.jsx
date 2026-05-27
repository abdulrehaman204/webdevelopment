import Alert from "./Alert";

function A() {
  return (
    <div>
      <Alert type="success" message="Success message!" />
      <Alert type="error" message="Error message!" />
      <Alert type="warning" message="Warning message!" />
    </div>
  );
}

export default A;


