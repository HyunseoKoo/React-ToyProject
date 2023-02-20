import useInput from 'hooks/useInput';
import { useState } from 'react';
import styled from 'styled-components';

function DetailComments({ CommentsObj, onDeleteComment }) {
  const { User, content, createdAt, id, myComment } = CommentsObj; // 주소에 담긴 indx가 포함된 post 객체를 구조분해하여 Comments 키 값을 가져옴.
  console.log(CommentsObj); // 코멘트 객체

  const [myCommentState, setMyCommentState] = useState(false);

  const useInput = (initialization) => {
    const [value, setValue] = useState(initialization);
    const onChange = (event) => {
      setValue(event.target.value);
    };
    return [value, onChange, setValue];
  };

  const [editComment, onEditComment] = useInput(content);

  const startEditBtn = () => {
    console.log(CommentsObj.myComment);
    setMyCommentState(true);
    if (CommentsObj.myComment === 'N') {
      return setMyCommentState(false);
    } else if (CommentsObj.myComment === 'Y') {
      setMyCommentState(true);
    }
  };

  const [changedComment, setChangedComment] = useState(content);

  const handleChangeComment = (content) => {
    const newComment = { ...CommentsObj };
    newComment.content = content;
    setChangedComment(newComment.content);
  };

  const closeEditBtn = () => {
    if (editComment === content) return setMyCommentState(false);
    handleChangeComment(editComment);
    setMyCommentState(false);
  };

  // const onDeleteComment = (User.id) => {
  //   if (CommentsObj.myComment === 'N') return
  //   if(window.confirm('정말 삭제하시겠습니까?')) {
  //     const deleteComment =
  //   }
  // }

  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.Flex>
          <div>{User.id}</div>
          <S.Img src={User.profile_img}></S.Img>
        </S.Flex>
        {myCommentState ? (
          <textarea onChange={onEditComment}>{content}</textarea>
        ) : (
          <div>{changedComment}</div>
        )}
      </S.CommentWrapper>
      <S.Button onClick={myCommentState ? closeEditBtn : startEditBtn}>수정</S.Button>
      <S.Button onClick={() => onDeleteComment(id)}>삭제</S.Button>
    </S.Wrapper>
  );
}
export default DetailComments;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 50x;
  height: 50px;
  border-radius: 50%;
`;

const CommentWrapper = styled.div`
  background-color: beige;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f9d72f;
`;

const S = {
  Wrapper,
  Flex,
  Img,
  CommentWrapper,
  Button,
};
