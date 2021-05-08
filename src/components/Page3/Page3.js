import QuestionList from '../QuestionList/QuestionList';

const Page3 = ({ questions }) => {
  const questionsArray = questions.map((question) => {
    return question.question;
  });
  const answers = questions.map((question) => {
    return question.answer;
  });
  return (
    <QuestionList
      questions={questionsArray}
      answers={answers}
      page={questions[0].page_id}
    />
  );
};

export default Page3;
