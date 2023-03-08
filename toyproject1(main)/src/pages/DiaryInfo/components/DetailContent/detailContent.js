import { faker } from '@faker-js/faker';
import { useState } from 'react';
import styled from 'styled-components';
import DetailComments from './DetailComments/detailComments';

function DetailContent({ selectedPost }) {
  console.log(selectedPost);
  const { Comments, content, User } = selectedPost; // 주소에 담긴 indx가 포함된 post 객체를 구조분해하여 키를 가져옴.
  console.log('selectedPosts의 코멘트들', Comments); // 코멘트 객체가 담긴 배열
  const { id } = User;

  const [newCommentArr, setNewCommentArr] = useState(Comments); // 새로운 댓글 객체를 Comments 배열에 추가하기 위해, Comments를 state로 관리
  const [newComment, setNewComment] = useState(); // 사용자가 입력한 댓글 컨텐츠 내용 업데이트

  const onInputCommentValue = (e) => {
    setNewComment(e.target.value);
  };

  const onAddCommentBtn = () => {
    const newComments = [...newCommentArr];
    console.log(newComments);
    const newObj = {
      User: { id: 'KOO' },
      content: newComment,
      myComment: 'Y',
      createdAt: faker.date.between('2023-02-21T00:00:00.000Z', '2023-02-23T00:00:00.000Z'),
      // createdAt: new Date(),
    };
    console.log(newObj);
    newComments.push(newObj);
    setNewCommentArr(newComments);

    // console.log('/////newComment', newComments);
    // [댓글추가] 버튼 클릭하면 input창 클리어되게 어떻게?
  };
  console.log('/////newComment', newCommentArr);

  const onDeleteComment = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const deleteComment = newCommentArr.filter((comment) => comment.User.id !== id);
      setNewCommentArr(deleteComment);
    }
  };

  return (
    <>
      <S.Content>{content}</S.Content>
      <S.IntroduceBox>
        친구들과 주변 선생님들에게 '오늘의 일기'를 소개해 주세요!
        <br />
        이용자가 많아질수록 일기 주제가 풍부해집니다.
      </S.IntroduceBox>
      <S.Wrapper>
        <S.InputBox
          onChange={onInputCommentValue}
          placeholder="로그인을 하면 댓글을 쓸 수 있어요."
        />
        <S.Button onClick={onAddCommentBtn}>댓글추가</S.Button>
      </S.Wrapper>
      {newCommentArr.map((CommentsObj) => (
        <DetailComments CommentsObj={CommentsObj} onDeleteComment={onDeleteComment} />
      ))}
    </>
  );
}

export default DetailContent;

const Content = styled.div`
  width: 100%;
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
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  margin: 100px auto 100px;
`;

const InputBox = styled.input`
  width: 100%;
  height: 180px;
  border: none;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #f9d72f;
`;

const AddCommentWrapper = styled.div`
  margin-top: 30px;
`;

const S = {
  Content,
  IntroduceBox,
  Button,
  Wrapper,
  InputBox,
  AddCommentWrapper,
};
