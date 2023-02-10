import styled from 'styled-components';

function DiaryContents({ data2 }) {
  return (
    <>
      <S.Wrapper>
        <S.Title>{data2.User.nick_name}</S.Title>
        <S.Img src={data2.User.profile_img} alt="random test image" />
      </S.Wrapper>
      <S.Contents>{data2.content}</S.Contents>
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
  width: 100px;
  height: 100px;
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
