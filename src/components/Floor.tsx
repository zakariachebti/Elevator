import React, { useEffect, useState } from "react";
import { Direction, floor } from "../model";
import OutsideButtons from "./OutsideButtons";

interface Props {
  floor: floor;
  currentFloor: number;
  direction: Direction;
  add: (floor: number) => void;
}

const Floor: React.FC<Props> = ({ floor, currentFloor, direction, add }) => {
  const [background, setBackground] = useState<string>("#4c4c68");
  const [textColor, setTextColor] = useState<string>("white");

  useEffect(() => {
    if (floor.floor === currentFloor) {
      setBackground("#13b38b");
    } else if (direction === "up" && floor.floor === currentFloor + 1) {
      setBackground("#FED000");
    } else if (direction === "down" && floor.floor === currentFloor - 1) {
      setBackground("#FED000");
    } else {
      setBackground("#4c4c68");
    }
  }, [currentFloor, direction]);

  useEffect(() => {
    floor.stop ? setTextColor("red") : setTextColor("white");
  }, [floor]);

  return (
    <div className="flexbox">
      <OutsideButtons
        floor={floor}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
      <div
        className="floors"
        style={{
          backgroundColor: background,
        }}
      >
        <div
          className="floors__floor"
          style={{
            color: textColor,
          }}
        >
          {floor.floor}
        </div>
      </div>
    </div>
  );
};

export default Floor;
