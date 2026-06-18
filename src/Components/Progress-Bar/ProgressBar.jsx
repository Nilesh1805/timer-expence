import { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

//   const [current,setCurrent] =  useState(0)

  return (
    <div className="container mt-4">
      <h2>Progress Bar</h2>

      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() => setProgress(Math.min(progress + 10, 100))}
      >
        Increase
      </button>
    </div>
  );
}

export default ProgressBar;