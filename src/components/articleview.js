import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ".././styles.css"

function ArticleView(props) {

  const location = useLocation();
  const article = location.state?.article;
  
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"5%"}}>

      <Card sx={{ maxWidth: 700 }}>
        <CardMedia
          sx={{ height: 400 }}
          image={article.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.content}
          </Typography>
        </CardContent>
        <CardActions>
        <Link key={article.key}
              to="/"
              state={{ article: article }}
              style={{ textDecoration: "none", underline: "none", color: 'inherit', backgroundColor: "none", }}
            
            >
          <Button size="small" variant="contained">Back to listing</Button>
          </Link>
          <Button size="small" onClick={()=>window.open(article.link)}>Continue reading</Button>
        
        </CardActions>
      </Card>
    </div>
  );
}

export default ArticleView;