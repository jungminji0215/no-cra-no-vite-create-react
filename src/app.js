import { add } from "./add.js";
import { minus } from "./minus.js";

const App = () => {
  const sum = add(1, 5);
  console.log(process.env.NODE_ENV);
  return <h1>{sum}</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
