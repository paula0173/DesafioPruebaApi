
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import { useState } from "react";
import Container from "react-bootstrap/Container";


function App() {

  const [movieNameData, setmovieNameData] = useState("");

  return (
    <>
      <Container >
        <h3 className='mt-4 p-2 text-center'> Listado de Peliculas</h3>
        <Buscador setmovieNameData={setmovieNameData} />
        <MiApi movieNameData={movieNameData} />
      </Container >
    </>
  )
}

export default App
