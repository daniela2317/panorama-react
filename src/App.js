import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/searchBar';
import { Container } from 'react-bootstrap';
import { Products } from './Components/products';

function App() {
  return (
    <Container className="App">
      <SearchBar />
      <Products />
    </Container>
  );
}

export default App;
