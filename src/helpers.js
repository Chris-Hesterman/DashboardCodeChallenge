import axios from 'axios';
import WordBox from './components/WordBox/WordBox';
import QuestionBox from './components/QuestionBox/QuestionBox';

export const fetchData = async (page_id) => {
  axios.defaults.baseURL = 'http://127.0.0.1:3001';
  try {
    const response = await axios.get('/questions/' + page_id);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const generateWordBoxes = (array) => {
  return array.map((word) => {
    return <WordBox word={word} key={word} />;
  });
};
export const generateAnswerBoxes = (array) => {
  return array.map((answer) => {
    return <WordBox answer={true} word={answer} key={answer} />;
  });
};

export const generateQuestions = (array1, array2) => {
  return array1.map((question, index) => {
    return (
      <QuestionBox
        key={array2[index]}
        question={question}
        answer={array2[index]}
      />
    );
  });
};
