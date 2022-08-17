import React, { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { Direction, floor } from "../model";

interface Props {
  floor: floor;
  currentFloor: number;
  direction: Direction;
  add: (floor: number) => void;
}

const OutsideButtons: React.FC<Props> = ({
  floor,
  currentFloor,
  direction,
  add,
}) => {
  const [buttonColor, setButtonColor] = useState<string>("");

  const changeButton = () => {
    if (currentFloor !== floor.floor || direction !== "still") {
      setButtonColor("red");
    }
  };

  useEffect(() => {
    if (!floor.stop) setButtonColor("");
  }, [floor]);

  return (
    <div className="outside">
      <span
        className="outside__button"
        onClick={() => {
          add(floor.floor);
          changeButton();
        }}
      >
        <TiArrowSortedUp color={buttonColor} />
      </span>
      <span
        className="outside__button"
        onClick={() => {
          add(floor.floor);
          changeButton();
        }}
      >
        <TiArrowSortedDown color={buttonColor} />
      </span>
    </div>
  );
};

export default OutsideButtons;
