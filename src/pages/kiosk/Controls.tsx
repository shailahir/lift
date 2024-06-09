import { Button, Card, GridItem, GridLayout } from "@salt-ds/core";
import React, { useState } from "react";
import {
  // NotificationIcon,
  KeyBackspaceIcon,
} from "@salt-ds/icons";
import "./styles.css";
// import OpenElevatorDoor from "../../assets/open-elevator-door.png";
// import CloseElevatorDoor from "../../assets/close-elevator-door.png";

const BACKSPACE = "BKSP";
const GO = "GO";

const Controls = () => {
  const [keysPressed, setKeysPressed] = useState<number[]>([]);
  const [scheduledFloors, setScheduledFloors] = useState<number[]>([]);

  const onClickGo = () => {
    const floor = parseInt(keysPressed.join(""));
    setScheduledFloors((prev: number[]) => [...prev, floor]);
    setKeysPressed([]);
  };

  const onClickKey = (targetKey: number | string) => {
    if (typeof targetKey === "number") {
      // add into the keyPresses
      setKeysPressed((prev: number[]) => [...prev, targetKey]);
    } else {
      // special buttons
      if (BACKSPACE === targetKey) {
        setKeysPressed((prev: number[]) => {
          if (keysPressed && keysPressed.length > 0) {
            return prev.slice(0, prev.length - 1);
          } else {
            // ignore the backspage keypress
            return prev;
          }
        });
      } else if (GO === targetKey) {
        // Now you may ask why I am not calling this method directly
        onClickGo();
      }
    }
  };

  return (
    <Card
      style={{ minWidth: "350px", height: "auto" }}
      accent="top"
      variant="secondary"
    >
      <GridLayout columns={3}>
        <GridItem colSpan={3} rowSpan={2}>
          <Card style={{ height: "120px" }}>
            <div>{keysPressed.join(" ")}</div>
            <div>scheduledFloors: {scheduledFloors?.join(", ")}</div>
          </Card>
        </GridItem>
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((num: number) => (
          <GridItem colSpan={1} horizontalAlignment="center">
            <Button className="control-btn" onClick={() => onClickKey(num)}>
              {num}
            </Button>
          </GridItem>
        ))}

        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn" onClick={() => onClickKey(BACKSPACE)}>
            <KeyBackspaceIcon size={3} />
          </Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn" onClick={() => onClickKey(0)}>
            0
          </Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn" onClick={() => onClickKey(GO)}>
            Go
          </Button>
        </GridItem>
      </GridLayout>
    </Card>
  );
};
export default Controls;
