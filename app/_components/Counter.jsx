"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        There are {users.length} users up there , increate the button to the
        correct amount
      </p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increase me Button {count}
      </button>
    </div>
  );
}
