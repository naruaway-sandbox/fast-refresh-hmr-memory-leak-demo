"use client";

const DATA = Array.from({ length: 100000 }, (_, i) => Math.random());

export default function App() {
  return (
    <div>
      <div>REWRITE_HERE</div>
      <div>{DATA.length}</div>
    </div>
  );
}
