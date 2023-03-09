import styled from 'styled-components';
import Diary from './components/DiaryList/Diary/Diary';

function HomePage() {
  return (
    <>
      <S.Title>공개 일기를 보여드려요</S.Title>
      <Diary />
    </>
  );
}
export default HomePage;

const Title = styled.div`
  text-align: center;
  color: orange;
  font-size: 20px;
  padding: 3rem 0 4rem 0;
`;

const S = {
  Title,
};
