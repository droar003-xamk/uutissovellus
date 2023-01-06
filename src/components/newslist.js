import { Box, Button, Container, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ".././styles.css"
import LanguageSelector from "./countryselector";



function ListOfNews() {

  const [country, setCountry] = useState('us');

  
  const [data, setData] = useState({

    news: []
  });

  const formatDate = (date) => {

    const formats = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat("en-GB", formats);
    return formatter.format(new Date(date));
  }

  const getData = async () => {
    try {
      const connection = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=79a9d97c37354ae28611d0575a023529`);
      const apiData = await connection.json();
      
      const news = apiData.articles.map((article) => {
        const articleData = {
          title: article.title,
          date: formatDate(article.publishedAt),
          description: article.description,
          content: article.content,
          link: article.url,
          image: article.urlToImage,
          key: uuidv4()
        };
        
        return articleData;
      });

      setData({ news });
    } catch (error) {
      console.error(error);
    }
  }
  const sortedNews = data.news.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });


  useEffect(() => {

    getData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="newsList" >
    <Container >
      <Box  sx={{ width: '100%', maxWidth: 700, }}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <LanguageSelector setLanguage={setCountry} language={country}/>
        <Button variant="outlined" onClick={getData}>Update news</Button>
        </div>
        <List>
       
          {sortedNews.map((article, index) => (
            <Link key={article.key}
              to="/articleview"
              state={{ article: article }}
              style={{ textDecoration: "none", underline: "none", color: 'inherit', backgroundColor: "none", }}
            
            >
              <ListItem
                button
                key={article.key}
                className={`list-item ${index % 2 === 0 ? 'light' : ''}`}
              >
                <ListItemText primary={article.title} secondary={article.date} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
      
    </Container>
   </div> 
  );
}

export default ListOfNews;