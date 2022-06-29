import React from "react";

export default function ButtonMore({ handleMore }) {
  return (
    <button onClick={handleMore} className="h-10 bg-yellow-600 w-36 rounded">
      More
    </button>
  );
}
