import styled from 'styled-components';
import { MockPost } from '__mocks__/post';
import Diary from './components/DiaryList/Diary/Diary';

export const Posts = MockPost(5);

for (let i = 0; i < Posts.length; i++) {
  Posts[i].indx = i;
}

function HomePage() {
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  // console.log(Posts);

  return (
    <>
      <S.Title>공개 일기를 보여드려요</S.Title>
      <Diary data1={Posts} />
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
