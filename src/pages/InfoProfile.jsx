import "../css/infoProfile.css";
import React from "react";
import { useEffect } from "react";
import { BlankNavV2 } from "../components/FormInfoProduct";
import { FormInfoProfile } from "../components/FormInfoProfile";

export default function InfoProfile() {
  useEffect(() => {
    document.title = "Info Profile";
  }, []);
  return (
    <>
      <div className="mb-3">
        <BlankNavV2 />
      </div>
      <div>
        <FormInfoProfile />
      </div>
    </>
  );
}
