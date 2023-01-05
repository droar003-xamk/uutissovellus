import { Container } from "@mui/material";
import Header from "./header";
import ListOfNews from "./newslist";

function FrontPage() {
    return (
        <Container maxWidth="sm">
        <Header/>
        <ListOfNews/>
        </Container>
    );
  }
  
  export default FrontPage;