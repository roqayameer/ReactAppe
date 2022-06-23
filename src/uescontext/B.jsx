import React from "react";
import C from "./C";

export default function B({myname}) {
  return (
    <>
      <div>B {myname}</div>
      <C myname="Nrjes"/>
    </>
  );
}
