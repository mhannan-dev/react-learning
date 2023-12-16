import Card from "./components/Card";
import Data from "./data.json";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <h1 className="mainHeading">Todo App</h1>
      <Card />
    </>
  );
}
export default App;
