import { StyledBox, StyledP } from './WordBox.Styles';

const WordBox = ({ word, answer }) => {
  return answer ? (
    <StyledBox Answer key={word}>
      <StyledP>{word}</StyledP>
    </StyledBox>
  ) : (
    <StyledBox key={word}>
      <StyledP>{word}</StyledP>
    </StyledBox>
  );
};

export default WordBox;
