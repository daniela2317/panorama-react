import { useState, useEffect } from "react";
import { getProducts } from "./APICalls";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SearchBar = () => {
    const [products, setProducts] = useState([]);
    const [valueInput, setValueInput] = useState('');

    const fetchProducts = () => {
        getProducts().then(setProducts);
    }

    useEffect (() => {
        fetchProducts(); 
    }, []);


    const handleSearch = (event) => {
        const getSearch = event.target.value;
        setValueInput(getSearch);
    }

         const result = products.filter((item) => item.title.toLowerCase().includes(valueInput.toLowerCase()));

    return (
        <div>
            <input type="text" name="search" value={valueInput} placeholder="Buscar producto" onChange={(e) => handleSearch(e)} className="form-control" /> 
        <Row xs={1} md={3} className="g-4">
        {result.map((product) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  </Card.Body>
              </Card>
            </Col>
            ))}
        </Row>
        </div>
    )
}

export default SearchBar;