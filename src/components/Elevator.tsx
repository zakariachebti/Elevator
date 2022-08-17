import React from "react";
import { Direction, floor } from "../model";
import Floor from "./Floor";
import "./Styles.css";

interface Props {
  floors: floor[];
  currentFloor: number;
  direction: Direction;
  add: (floor: number) => void;
}

const Elevator: React.FC<Props> = ({
  floors: floors,
  currentFloor,
  direction,
  add,
}) => {
  return (
    <div>
      <Floor
        floor={floors[5]}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
      <Floor
        floor={floors[4]}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
      <Floor
        floor={floors[3]}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
      <Floor
        floor={floors[2]}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
      <Floor
        floor={floors[1]}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
      <Floor
        floor={floors[0]}
        currentFloor={currentFloor}
        direction={direction}
        add={add}
      />
    </div>
  );
};

export default Elevator;
