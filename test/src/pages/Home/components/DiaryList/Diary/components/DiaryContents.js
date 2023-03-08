import styled from 'styled-components';

function DiaryContents({ posts }) {
  console.log(posts.User);
  return (
    <>
      <S.Wrapper>
        <S.Title>{posts.User.nick_name}</S.Title>
        <S.Img src={posts.User.profile_img} alt="random test image" />
      </S.Wrapper>
      <S.Contents>{posts.content}</S.Contents>
    </>
  );
}

export default DiaryContents;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Title = styled.div`
  margin: 1rem 0;
  line-height: 1.8rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 40%;
`;

const Contents = styled.div`
  overflow: hidden;
  padding: 1rem 0;
  line-height: 1.8rem;
`;

const S = {
  Wrapper,
  Title,
  Contents,
  Img,
};
