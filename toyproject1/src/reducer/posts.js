import { faker } from '@faker-js/faker';
import { MockPost } from '__mocks__/post';

const initialPosts = MockPost(100);

const reducer = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log(action.payload.content);
      const newAddCommentPosts = [...state];
      const selectedPost = newAddCommentPosts.find((item) => item.id === action.payload.id);
      selectedPost.Comments.push({
        User: { id: 'KOO' },
        content: action.payload.content,
        myComment: 'Y',
        createdAt: faker.date.between('2023-02-21T00:00:00.000Z', '2023-02-23T00:00:00.000Z'),
      });
      return newAddCommentPosts;

    case 'EDIT_COMMENT':
      const newEditCommentPosts = [...state];
      const selectedPost2 = newEditCommentPosts.find((item) => item.id === action.payload.id);
      const editComment = selectedPost2.Comments.find(
        (item) => item.id === action.payload.commentId
      );
      editComment.content = action.payload.content;
      return newEditCommentPosts;

    case 'DELETE_COMMENT':
      if (window.confirm('정말 삭제하시겠습니까?')) {
        console.log(action.payload.commentId);
        const newDeleteCommentPosts = [...state];
        const selectedPost3 = newDeleteCommentPosts.find((item) => item.id === action.payload.id);
        // selectedPost2.Comments = selectedPost2.Comments.filter(
        //   (comment) => comment.id !== action.payload.commentId
        // );
        const filterDeleteComment = selectedPost3.Comments.filter(
          (comment) => comment.id !== action.payload.commentId
        );
        selectedPost3.Comments = filterDeleteComment;
        return newDeleteCommentPosts;
      }

    default:
      return state;
  }
};

export default reducer;
