import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import PostDetails from "./components/PostDetails";
import SharedLayout from "./components/SharedLayout";
import About from "./components/About";
import FilteredPosts from "./components/FilteredPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<FilteredPosts />} />
          <Route path="/:id" element={<PostDetails />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
