import React from "react";

const DATA = Array.from({ length: 100000 }, (_, i) => Math.random());

export const App = () => {
  return (
    <div>
      <div>REWRITE_HERE</div>
      <div>{DATA.length}</div>
    </div>
  );
};
