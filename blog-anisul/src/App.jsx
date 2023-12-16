import Card from "./components/Card";
import Data from "./data.json";
import { v4 as uuidv4 } from 'uuid';
import { FaAdn } from "react-icons/fa6";
function App() {
  return (
    <>
      <h1 className="mainHeading"><FaAdn /> Todo App</h1>
      {Data.map((item, index) => (
        <Card
          key={uuidv4()}
          cardTitle={item.title}
          cardSubTitle={item.subTitle}
          footerText={item.footerText}
        />
      ))}
    </>
  );
}
export default App;
