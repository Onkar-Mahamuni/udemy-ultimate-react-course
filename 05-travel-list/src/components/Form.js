import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); //Here react is setting description to empty string
  // even if we are changing the input, hence we need handleChange function
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //To stop page auto refreshing after submit

    if (!description) return; // We shouldn't be able to submit with blank description

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1); //Setting elements back to their initial state after submitting
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      {/* We can also listen to onclick event of button but it will not work after hitting enter key,
        Hence it is important to listen to on submit of form here */}
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* e.target.value will always be a string but we want a number there */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* To make array of X elements */}
      <input
        type="text"
        placeholder="Item..."
        value={description} // DOM is not incharge of this value anymore
        onChange={(e) => setDescription(e.target.value)} // This updates the state with actual value
      />
      <button>Add</button>
    </form>
  );
}
