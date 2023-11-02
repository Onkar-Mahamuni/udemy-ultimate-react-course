import { useState } from "react"; //This is an example of named import
import Logo from "./Logo"; //This is an example of default import
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);
  // const [numItems, setNumItems] = useState(0); // Unnecessary
  // const numItems = items.length; //as soon as state changes, component will get rerendered and this code wil be executed
  // But instead doing that here, we can do this in the componet where we need to cosume it to avoid passing props
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    // setNumItems((num) => num + 1); // This state and operation is unnecessary because it a computed state
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log("handle toggle id " + id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //OR
  // function handleToggleItem(id) {
  //   console.log("handle toggle id " + id);
  //   setItems((items) =>
  //     items.map((item) =>{
  //       return item.id === id ? { ...item, packed: !item.packed } : item // If we are wrapping array callback function in curly braces, then we explicitly need to add return keyword
  // })
  //   );
  // }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    ); //This is to add a confirmation message before deleting
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
