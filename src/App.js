import {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [data, setData]=useState(null)

  useEffect(()=>{
      getData()
  }, [])

  const getData = async () => {
    try{
      const request = await fetch('https://dummyjson.com/products')
      const response = request.ok ? await request.json() : await request.text();
      setData(response)
      console.log(data)
    }
    catch(error){
      console.error(error)
    }

  }
  return (
    <div>
      <h1>Phones</h1>
      {data && data.products.map((item) => (
        <div>
          <Container>
            <Row>
            <ListGroup>
              <ListGroup.Item as="li" active key={item.title}>{item.title}</ListGroup.Item>
              <ListGroup.Item key={item.description}>{item.description}</ListGroup.Item>
              <ListGroup.Item key={item.price}>{item.price}</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
            <img src={item.thumbnail}></img>
            </Row>
          </Container>

        </div>
      ))}
    </div>
  );
}

export default App;
/*

  return (
    <div>
      <h1>Phones</h1>
      {data && data.products.map((item) => (
        <div>
          <li key={item.title}>{item.title}</li>
          <li key={item.description}>{item.description}</li>
          <li key={item.price}>{item.price}</li>
          <img src={item.thumbnail}></img>
        </div>
      ))}
    </div>
  );



*/