import { Box, Container } from "@mui/system";
import { useLocation } from "react-router-dom";

function ArticleView(props) {

    const location = useLocation();
    const  article  = location.state?.article;
    

    return (
      <div className="App">
        <Container maxWidth="sm">
        <h1>{article.title}</h1>
        <h3>{article.date}</h3>

        <img src={article.image} alt={article.title}/>

        <p>{article.description}</p>
        <br/>
        <p>{article.content}</p>
        <a href={article.url}>
        <p>{article.url}</p>
        </a>

        </Container>
        
      </div>
    );
  }
  
  export default ArticleView;