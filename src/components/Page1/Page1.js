import WordMatch from '../WordMatch/WordMatch';

const Page1 = ({ questions }) => {
  const words = questions.map((question) => {
    return question.question;
  });
  const answers = questions.map((question) => {
    return question.answer;
  });

  return (
    <WordMatch words={words} answers={answers} page={questions[0].page_id} />
  );
};

export default Page1;
