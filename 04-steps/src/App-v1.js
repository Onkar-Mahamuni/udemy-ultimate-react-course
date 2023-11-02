import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1); //useState returns array with 2 elements
  // We destructure them - 1) State with initial value(given in brackets) 2) setter method for state
  // We can only call useState at top level of a functional component (not inside any other function)
  // Also it can not be called conditionally (Inside if statement)

  const [isOpen, setIsOpen] = useState(true);

  // Commented for trial of current state based update
  // function handlePrevious() {
  //   if (step > 1) setStep(step - 1);
  //   // React state must be modified through setter function only, not manually
  // }

  // function handleNext() {
  //   if (step < 3) setStep(step + 1);
  // }

  // For trial of updating state based on current state
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // React state must be modified through setter function only, not manually
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // setStep(step + 1); //Its a bad way of updating state twice and will not work
      setStep((s) => s + 1);
      setStep((s) => s + 1); //This will work correctly
    }
  }

  // //Trying to update react state manually
  // var [step, setStep] = useState(1);
  // const [test] = useState({ name: "Jonas" });

  // function handlePrevious() {
  //   if (step > 1) setStep(step - 1);
  //   test.name = "Fred"; //Will work but its a BAD PRACTICE, This might not work in complex situations
  // }

  // function handleNext() {
  //   step = step + 1;
  //   // This will change the value of state internally but
  //   // React does not know that we are updating state here hence it is not re-rendering the component
  // }
  // // Hence always treat state as immutable in react and only update it with given setter function

  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {/* it is a better and safer way of doing it using callback*/}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // onMouseEnter={() => alert("Mouse hover")} //This is for mouse hover
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
