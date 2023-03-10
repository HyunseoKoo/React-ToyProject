import { faker } from '@faker-js/faker';
import shortId from 'shortid';
import { createAction } from 'utils/createAction';
import { MockPost } from '__mocks__/post';

const initialPosts = MockPost(100);

export const addComment = createAction('ADD_COMMENT');
export const editComment = createAction('EDIT_COMMENT');
export const deleteComment = createAction('DELETE_COMMENT');

const reducer = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const newAddCommentPosts = [...state];
      const selectedPost = newAddCommentPosts.find((item) => item.id === action.payload.id);
      selectedPost.Comments.push({
        User: { id: 'KOO' },
        content: action.payload.newComment,
        myComment: 'Y',
        createdAt: faker.date.between('2023-02-21T00:00:00.000Z', '2023-02-23T00:00:00.000Z'),
        id: shortId.generate(),
      });
      return newAddCommentPosts;

    case 'EDIT_COMMENT':
      console.log(action.payload);
      const newEditCommentPosts = [...state];
      const selectedPost2 = newEditCommentPosts.find((item) => item.id === action.payload.id);
      const editComment = selectedPost2.Comments.find(
        (item) => item.id === action.payload.commentId
      );
      editComment.content = action.payload.commentContent;
      return newEditCommentPosts;

    case 'DELETE_COMMENT':
      if (window.confirm('정말 삭제하시겠습니까?')) {
        const newDeleteCommentPosts = [...state];
        const selectedPost3 = newDeleteCommentPosts.find((item) => item.id === action.payload.id);
        selectedPost3.Comments = selectedPost3.Comments.filter(
          (comment) => comment.id !== action.payload.commentId
        );
        return newDeleteCommentPosts;
      }

    default:
      return state;
  }
};

export default reducer;
