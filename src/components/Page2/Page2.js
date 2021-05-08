import WordMatch from '../WordMatch/WordMatch';

const Page2 = ({ questions }) => {
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

export default Page2;
