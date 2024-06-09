import React from "react";
import { BorderItem, BorderLayout } from "@salt-ds/core";
import Controls from "./Controls";

const KioskPage = () => {
  return (
    <div>
      <BorderLayout>
        <BorderItem position="north"></BorderItem>
        <BorderItem position="east"></BorderItem>
        <BorderItem position="west"></BorderItem>
        <BorderItem
          position="center"
          verticalAlignment="center"
          horizontalAlignment="center"
        >
          <Controls />
        </BorderItem>
        <BorderItem position="south"></BorderItem>
      </BorderLayout>
    </div>
  );
};
export default KioskPage;
