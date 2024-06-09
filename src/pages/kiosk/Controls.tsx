import { Button, Card, GridItem, GridLayout } from "@salt-ds/core";
import React from "react";
import { NotificationIcon, KeyBackspaceIcon } from "@salt-ds/icons";
import "./styles.css";
import OpenElevatorDoor from "../../assets/open-elevator-door.png";
import CloseElevatorDoor from "../../assets/close-elevator-door.png";

const Controls = () => {
  return (
    <Card
      style={{ minWidth: "350px", height: "auto" }}
      accent="top"
      variant="secondary"
    >
      <GridLayout columns={3}>
        <GridItem colSpan={3} rowSpan={2}>
          <Card style={{ height: "120px" }}>Display</Card>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">1</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">2</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">3</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">4</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">5</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">6</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">7</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">8</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">9</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">
            <KeyBackspaceIcon size={3} />
          </Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">0</Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">Go</Button>
        </GridItem>
        {/* <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">
            <img src={CloseElevatorDoor} />
          </Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">
            <img src={OpenElevatorDoor} />
          </Button>
        </GridItem>
        <GridItem colSpan={1} horizontalAlignment="center">
          <Button className="control-btn">
            <NotificationIcon size={3} />
          </Button>
        </GridItem> */}
      </GridLayout>
    </Card>
  );
};
export default Controls;
