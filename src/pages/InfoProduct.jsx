import React from "react";
import { InfoProductForm, BlankNavV2 } from "../components/FormInfoProduct";

export default function InfoProduct() {
  return (
    <>
      <div className="mb-3">
        <BlankNavV2 />
      </div>

      <div>
        <InfoProductForm />
      </div>
    </>
  );
}
