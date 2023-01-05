import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ".././styles.css"



function ListOfNews() {

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
      const connection = await fetch("https://content.guardianapis.com/search?api-key=7bd623d2-2af3-40af-a0cf-bbef379c31bc");
      const apiData = await connection.json();

      const news = apiData.response.results.map((article) => {
        const articleData = {
          title: article.webTitle,
          date: formatDate(article.webPublicationDate),
          link: article.webUrl,
          id: article.id
        };
        console.log(apiData)
        return articleData;
      });

      setData({ news });
    } catch (error) {
      console.error(error);
    }
  }




  useEffect(() => {

    getData();

  }, [])

  return (
    <div className="List">
      <Box sx={{ width: '100%', maxWidth: 700, }}>
        <Button variant="outlined" onClick={getData}>Päivitä</Button>
        <List>
          {data.news.map((article, index) => (
            <Link key={article.id}
              to= "/articleview"
                state = {{article:article}} 
                
            >
              <ListItem
                button
                key={article.id}
                className={`list-item ${index % 2 === 0 ? 'light' : ''}`}
                >
                <ListItemText primary={article.title} secondary={article.date} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ListOfNews;