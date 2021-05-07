import axios from 'axios';
import WordBox from './components/WordBox/WordBox';
import QuestionBox from './components/QuestionBox/QuestionBox';

export const fetchData = () => {
  return axios
    .get('/test')
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      throw err;
    });
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
