import Card from "./components/Card";
import Data from "./data.json";
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <>
      <h1 className="mainHeading">Todo App</h1>
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
