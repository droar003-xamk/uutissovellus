import { Container } from '@mui/material';
import './App.css';
import Header from './components/header';
import ListOfNews from './components/newslist';

function App() {
  return (
    <Container maxWidth="sm">
    <Header/>
    <ListOfNews/>
    </Container>
  );
}

export default App;
