import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <RouterProvider router={router}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
