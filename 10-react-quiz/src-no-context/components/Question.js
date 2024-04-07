import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {/* We didn't took ul and took div because here these are buttons not just list elements */}
    </div>
  );
}

export default Question;
