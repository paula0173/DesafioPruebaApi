
import { Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row'

const MiApi = ({ movieNameData }) => {

  const [listaMoviesData, setlistaMoviesData] = useState([]);

  const apiUrl = `http://www.omdbapi.com/?apikey=5b658d32&s=${movieNameData}`;

  const searchMovie = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        response.data.Search ? setlistaMoviesData((response.data.Search).sort((a, b) => a.Year - b.Year))
          : setlistaMoviesData(null)
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };

  useEffect(() => {
    searchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieNameData]);

  return (
    <Container className="mt-2 p-2 bgPosters">
      <Row className='gap-4 justify-content-center' xs={1} md={3} lg={4}>
        {(listaMoviesData &&  listaMoviesData.length > 0) ? listaMoviesData.map((item) => (
          <Card border="info" key={item.imdbID} style={{ width: "14rem" }}>
            <Card.Img className="p-2 mx-auto" variant="top" src={item.Poster} alt="Card image pelicula" style={{ width: "10rem" }} />
            <Card.Body>
              <Card.Title className="fs-6 strong">{item.Title}</Card.Title>
              <Card.Text>
                <span className='fw-light small'>Año: </span> {item.Year}<br />
                <span className='fw-light small'>Tipo: </span> {item.Type}
              </Card.Text>
            </Card.Body>
          </Card>
        )) : movieNameData === '' ? <h5 className='text-center text-danger'>Ingrese patron a buscar</h5> : <h5 className='text-center'>No hay peliculas con el patron ingresado </h5>}
      </Row>
    </Container>
  )
}
export default MiApi