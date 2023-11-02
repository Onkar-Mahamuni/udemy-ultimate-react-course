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
      // setStep((s) => s + 1);
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              {/* The jsx which is passed between opening and closing tag will be captured in children prop of child component */}
              <span>👈</span> Previous
              {/* hence we can configure here as if we want span first or the text. such customization helps to make the component truely reusable  */}
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  // The jsx passed between opening and closing tag of this component declaration is captured in "children" prop, children is a keyword
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
      {/* jsx in children prop can be rendered as regular jsx as here */}
    </button>
  );
}
