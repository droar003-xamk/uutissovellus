import { Container } from "@mui/material";
import Header from "./header";
import ListOfNews from "./newslist";

function FrontPage() {
    return (
        <>
        <Header/>
        <Container maxWidth="sm">
        <ListOfNews/>
        </Container>
      </>  
    );
  }
  
  export default FrontPage;