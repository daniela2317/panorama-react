import { useState, useEffect } from "react"; 
import { getProducts } from "./APICalls";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Products  () {

    const [products, setProducts] = useState([]);
    //const [detailsProducts, setDetailsProducts] = useState([setProducts]);

    useEffect(() => {
      getProducts().then(setProducts);
    }, []);

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Button variant="primary" key={product.id} onClick={handleShow}>Ver detalles</Button>
                  </Card.Body>
              </Card>
            </Col>
            ))}
            </Row>
            
            
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Title</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <p>Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.</p>
            </Offcanvas.Body>
          </Offcanvas>
      </>
  );
}

  
  