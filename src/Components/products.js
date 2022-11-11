import { useState, useEffect } from "react"; 
import { getProducts } from "./APICalls";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts().then(setProducts);
    }, []);

    return (
        <Row xs={1} md={4} className="g-4">
        {products.map((product) => (
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
      );
}

export default Products;