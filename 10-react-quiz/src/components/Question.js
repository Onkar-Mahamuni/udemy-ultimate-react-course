import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { question } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
      {/* We didn't took ul and took div because here these are buttons not just list elements */}
    </div>
  );
}

export default Question;
