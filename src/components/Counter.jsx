import { useState } from "react";
import { Button } from "../components/ui/button";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex items-center gap-2 justify-center mt-6">
        <Button
          variant="secondary"
          onClick={() => setCount((curr) => (curr > 0 ? curr - 1 : curr))}
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          variant="secondary"
          onClick={() => setCount((curr) => curr + 1)}
        >
          +
        </Button>
      </div>
    </>
  );
};
