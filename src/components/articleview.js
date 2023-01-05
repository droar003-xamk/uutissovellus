import { useLocation } from "react-router-dom";

function ArticleView(props) {

    const location = useLocation();
    const  article  = location.state?.article;
    console.log(article)

    return (
      <div className="App">
        <h1>uutinen</h1>
  
      </div>
    );
  }
  
  export default ArticleView;