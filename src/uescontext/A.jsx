import React from "react";
import B from "./B";

export default function A({ myname }) {
  return (
    <>
      <div>hi my name{myname}</div>
      <B myname="Nbras"/>
    </>
  );
}
