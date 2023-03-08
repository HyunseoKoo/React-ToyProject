import { RouterProvider } from 'react-router-dom';
import router from 'routes/routing';
import GlobalStyles from 'style/global';

function App() {
  // const Posts = MockPost(5);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  // console.log(Posts);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
