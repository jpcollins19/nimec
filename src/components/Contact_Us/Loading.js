import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className="loading-cont">
      <SpinnerDotted
        size={100}
        thickness={100}
        speed={100}
        color="rgba(57, 128, 172, 0.93)"
      />
      <h2>Loading Documents..</h2>
      <h3>This may take up to two minutes</h3>
    </div>
  );
};

export default Loading;
