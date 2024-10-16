import { useState, useMemo } from "react";
import "./Progress.css";

const MIN = 0,
  MAX = 100;

export const Progress = () => {
  const [value, setValue] = useState<number>(50);

  const clampedValue = useMemo(
    () => Math.min(Math.max(MIN, value), MAX),
    [value]
  );

  return (
    <>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${clampedValue}%` }}
          aria-valuenow={clampedValue}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          role="progressbar"
        >
          {clampedValue}%
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => setValue(clampedValue - 10)}>-</button>
        <button onClick={() => setValue(clampedValue + 10)}>+</button>
      </div>
    </>
  );
};
