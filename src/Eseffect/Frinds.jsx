import React from "react";

export default function Frinds({ fren }) {
  return (
    <div>
      {fren.map((data) => {
        return (
          <div>
            <h3>{data.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
