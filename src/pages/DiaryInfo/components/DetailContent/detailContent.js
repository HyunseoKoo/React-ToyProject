import styled from 'styled-components';

function DetailContent({ data2 }) {
  return (
    <>
      <S.Content>{data2.content}</S.Content>
      <S.IntroduceBox>
        친구들과 주변 선생님들에게 '오늘의 일기'를 소개해 주세요!
        <br />
        이용자가 많아질수록 일기 주제가 풍부해집니다.
      </S.IntroduceBox>
    </>
  );
}

export default DetailContent;

const Content = styled.div`
  padding: 50px 0;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;

const IntroduceBox = styled.div`
  background-color: #f9d72f;
  width: 100%;
  height: 150px;
  line-height: 2rem;
  text-align: center;
  padding: 45px 0;
  margin: 50px 0 0;
  border-radius: 3%;
`;

const S = {
  Content,
  IntroduceBox,
};
