
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Buscador = ({ setmovieNameData }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setmovieNameData(e.target[0].value)
    };

    return (
        <div >
            <Container className="bgFormulario">
          
                <Form className="d-flex p-2 gap-3 align-items-center " onSubmit={handleSubmit}>
                    <Form.Label>Busqueda por Nombre:</Form.Label>
                    <Form.Control className="w-50" type="text" id="inputNombrePelicula" placeholder="Ingrese nombre de pelicula / serie a buscar ....... " />
                    <Button variant="info" type="submit">Buscar</Button>
                </Form>

            </Container>
        </div>
    )
}
export default Buscador