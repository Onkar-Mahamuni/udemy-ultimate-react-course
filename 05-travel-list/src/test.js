import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [yourSatisfaction, setYourSatisfaction] = useState(0);
  const [friendSatisfaction, setFriendSatisfaction] = useState(0);

  function handleReset() {
    setBill("");
    setYourSatisfaction(0);
    setFriendSatisfaction(0);
  }

  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <SatisfactionPercentage
        satisfaction={yourSatisfaction}
        setSatisfaction={setYourSatisfaction}
      >
        How did you like the service?
      </SatisfactionPercentage>
      <SatisfactionPercentage
        satisfaction={friendSatisfaction}
        setSatisfaction={setFriendSatisfaction}
      >
        How your friend like the service?
      </SatisfactionPercentage>

      {bill > 0 && (
        <>
          <Output
            bill={bill}
            yourSatisfaction={yourSatisfaction}
            friendSatisfaction={friendSatisfaction}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

function Bill({ bill, setBill }) {
  function handleBillChange(e) {
    setBill(Number(e.target.value));
  }
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={handleBillChange}
        placeholder="Bill Value"
      ></input>
    </div>
  );
}

function SatisfactionPercentage({ satisfaction, setSatisfaction, children }) {
  function handleSatisfaction(e) {
    setSatisfaction(e.target.value);
  }
  return (
    <div>
      <label>{children}</label>
      <select value={satisfaction} onChange={handleSatisfaction}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, yourSatisfaction, friendSatisfaction }) {
  var yourTip = Number((yourSatisfaction / 100) * bill);
  var friendTip = Number((friendSatisfaction / 100) * bill);
  var totalTip = Number((yourTip + friendTip) / 2);
  var totalPay = Number(bill + totalTip);
  return (
    <div>
      <h3>
        You pay ${totalPay} (${bill} + ${totalTip})
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
