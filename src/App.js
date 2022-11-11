import './App.css';
import Products from './Components/products';
import SearchBar from './Components/searchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <SearchBar />
      <Products />
    </Container>
  );
}

export default App;
