import { Greetings } from "./components/Greetings";
import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <>
      <Greetings name="William" />
      <Counter />
      <div className="flex items-center justify-center mt-4">
        <ul className="fle flex-col gap-3 items-start">
          {names.map((name) => {
            return (
              <li className="text-2xl font-bold w-fit" key={name}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
