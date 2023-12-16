export default function App() {
  const peopleArr = [
    { id: 1, name: "Alice", nestedArr: ["dog", "cat"] },
    { id: 2, name: "Bob", nestedArr: ["turtle", "rabbit"] },
    { id: 3, name: "Carl", nestedArr: ["hamster", "parrot"] },
  ];
  return (
    <div>
      {peopleArr.map((person, index) => {
        return (
          <div key={index}>
            <h2>Name: {person.name}</h2>
            {person.nestedArr.map((pet, index) => {
              return (
                <div key={index}>
                  <h2>Pet: {pet}</h2>
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
}
