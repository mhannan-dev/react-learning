import Card from "./components/Card";
import Data from "./data.json";
function App() {
  return (
    <>
      <h1 className="mainHeading">Todo App</h1>
      {Data.map((item, index) => (
        <Card
          key={index}
          cardTitle={item.title}
          cardSubTitle={item.subTitle}
          footerText={item.footerText}
        />
      ))}
    </>
  );
}
export default App;
