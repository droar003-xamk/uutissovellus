import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
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
          link: article.webUrl
        };
        if (article.fields && article.fields.thumbnail) {
          articleData.image = article.fields.thumbnail;
        }
        return articleData;
      });

      setData({ news });
    } catch (error) {
      console.error(error);
    }
  }

  console.log(data);


  useEffect(() => {

    getData();

  }, [])

  return (
    <div className="List">
      <Box sx={{ width: '100%', maxWidth: 700, bgcolor: 'rgb(228, 230, 230)' }}>
        <List>
          {data.news.map((article,index) => (
            <ListItem 
            button
            key={article.date}
            className={`list-item ${index % 2 === 0 ? 'light' : ''}`}
            onClick={() => console.log("")}>
              <ListItemText primary={article.title} secondary={article.date} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ListOfNews;