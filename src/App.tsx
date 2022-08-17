import React, { useEffect, useState } from "react";
import "./App.css";
import Elevator from "./components/Elevator";
import FloorButtons from "./components/FloorButtons";
import { Direction, floor } from "./model";

const App = () => {
  const [currentFloor, setCurrentFloor] = useState<number>(0);

  const [direction, setDirection] = useState<Direction>("still");

  const [destination, setDestination] = useState<number | undefined>();

  const [floors, setFloors] = useState<floor[]>([
    { floor: 0, stop: false },
    { floor: 1, stop: false },
    { floor: 2, stop: false },
    { floor: 3, stop: false },
    { floor: 4, stop: false },
    { floor: 5, stop: false },
  ]);

  //  geeft aan bij welke etages de lift moet stoppen
  const addToQueue = (floor: number) => {
    if (currentFloor !== floor || direction !== "still") {
      setFloors(
        floors.map((n) => (n.floor === floor ? { ...n, stop: true } : n))
      );
    }
  };

  const moveUp = async () => {
    await delay(2000);
    setCurrentFloor(currentFloor + 1);
  };

  const moveDown = async () => {
    await delay(2000);
    setCurrentFloor(currentFloor - 1);
  };

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  /*  Als er wordt aangegeven dat de lift ergens moet stoppen en er is nog geen destination dan 
      wordt er een destination gekozen. Als er al een destination is dan wordt de hoogste of laagste 
      etage gekozen als destination op basis van welke richting de lift beweegt.
  */
  useEffect(() => {
    if (destination === undefined) {
      for (let i = 0; i < floors.length; i++) {
        if (floors[i].stop === true) {
          setDestination(i);
          break;
        }
      }
    } else if (direction === "up") {
      for (let i = 5; i >= 0; i--) {
        if (floors[i].stop === true) {
          setDestination(i);
          break;
        }
      }
    } else if (direction === "down") {
      for (let i = 0; i < floors.length; i++) {
        if (floors[i].stop === true) {
          setDestination(i);
          break;
        }
      }
    }
  }, [floors]);

  useEffect(() => {
    if (floors[currentFloor].stop) {
      setFloors(
        floors.map((n) =>
          n.floor === currentFloor ? { ...n, stop: false } : n
        )
      );
    }
  }, [currentFloor]);

  //  beweegt de lift naar boven of beneden op basis van destination
  useEffect(() => {
    if (destination !== undefined) {
      if ((destination as number) > currentFloor) {
        setDirection("up");
        moveUp();
      } else if ((destination as number) < currentFloor) {
        setDirection("down");
        moveDown();
      } else if (destination === currentFloor) {
        setDestination(undefined);
        setDirection("still");
      }
    }
  }, [destination, currentFloor]);

  return (
    <div className="App">
      <span className="heading">Elevator Playground</span>
      <Elevator
        floors={floors}
        currentFloor={currentFloor}
        direction={direction}
        add={addToQueue}
      />
      <p>Buttons indide the elevator</p>
      <FloorButtons add={addToQueue} />
    </div>
  );
};

export default App;
