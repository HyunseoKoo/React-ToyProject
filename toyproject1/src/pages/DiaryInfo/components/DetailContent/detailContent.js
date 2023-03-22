import useInput from 'hooks/useInput';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, deleteComment, editComment } from 'reducer/posts';
import styled from 'styled-components';
import DetailComments from './DetailComments/detailComments';

function DetailContent({ selectedPost }) {
  const { content, id, Comments } = selectedPost;
  const [newComment, setNewComment] = useInput();
  const dispatch = useDispatch();

  // comment 추가
  const onAddCommentBtn = () => {
    dispatch(addComment({ id, newComment }));
  };

  // comment 수정
  const handleChangeComment = (commentId, commentContent) => {
    dispatch(editComment({ id, commentId, commentContent }));
  };

  // comment 삭제
  const onDeleteComment = (commentId) => {
    dispatch(deleteComment({ id, commentId }));
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
          onChange={setNewComment}
          // ref={inputContent}
          value={newComment}
          placeholder="로그인을 하면 댓글을 쓸 수 있어요."
        />
        <S.Button onClick={onAddCommentBtn}>댓글추가</S.Button>
      </S.Wrapper>
      {Comments.map((comment) => (
        <DetailComments
          comment={comment}
          handleChangeComment={handleChangeComment}
          onDeleteComment={onDeleteComment}
        />
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
