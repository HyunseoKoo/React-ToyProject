import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DiaryContents from './components/DiaryContents';
import DiaryTitle from './components/DiaryTitle';

function Diary({ posts }) {
  // 여기서 만들면 Posts 객체 요소에 해당 키값이 안들어지는 이유?
  // for (let i = 0; i < posts.length; i++) {
  //   posts[i].indx = i;
  // }

  console.log(posts);
  return (
    <S.Wrapper>
      {posts.map((posts) => {
        return (
          <StyledLink to={`/todo/post/${posts.indx}`}>
            <S.Card>
              <DiaryTitle posts={posts} />
              <DiaryContents posts={posts} />
            </S.Card>
          </StyledLink>
        );
      })}
    </S.Wrapper>
  );
}
export default Diary;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 650px;
  height: 350px;
  margin: 30px;
  padding: 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 3px 2px gray;
  border-radius: 10px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const S = {
  Wrapper,
  Card,
};
