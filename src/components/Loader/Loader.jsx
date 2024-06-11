import SpinnerCarga from "./SpinnerCarga,";

function Loader({ loading }) {
  return (
    <div>
      <>{loading ? <SpinnerCarga /> : ""}</>
    </div>
  );
}

export default Loader;
