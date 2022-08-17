import React from "react";

interface Props {
  add: (floor: number) => void;
}

const FloorButtons: React.FC<Props> = ({ add }) => {
  return (
    <div className="floorButtons">
      <span>
        <button className="button" onClick={() => add(0)}>
          0
        </button>
      </span>
      <span>
        <button className="button" onClick={() => add(1)}>
          1
        </button>
      </span>
      <span>
        <button className="button" onClick={() => add(2)}>
          2
        </button>
      </span>
      <span>
        <button className="button" onClick={() => add(3)}>
          3
        </button>
      </span>
      <span>
        <button className="button" onClick={() => add(4)}>
          4
        </button>
      </span>
      <span>
        <button className="button" onClick={() => add(5)}>
          5
        </button>
      </span>
    </div>
  );
};

export default FloorButtons;
