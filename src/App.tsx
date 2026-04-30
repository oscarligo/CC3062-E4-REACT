import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import MovieDetail from "./pages/MovieDetail/MovieDetail";


function App() {

  return (
    <ThemeProvider >
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
