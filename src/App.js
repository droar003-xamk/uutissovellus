import {Route, Routes,} from "react-router-dom";
import './App.css';
import FrontPage from './components/frontPage';
import ArticleView from './components/articleview';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/newslist" element={<ArticleView />}/>
      </Routes>

    </>
  );
}

export default App;
