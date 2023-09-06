
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import { useState } from "react";
import Container from "react-bootstrap/Container";


function App() {

  const [movieNameData, setNameMovieData] = useState("lord");

  return (
    <>
      <Container >
        <h3 className='mt-4 p-2'> Listado de Peliculas</h3>
        <Buscador setNameMovieData={setNameMovieData} />
        <MiApi movieNameData={movieNameData} />
      </Container >
    </>
  )
}

export default App
