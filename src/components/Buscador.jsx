
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Buscador = ({ setNameMovieData }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameMovieData(e.target[0].value);
    };

    return (
        <div >
            <Container className="bgFormulario">
                <Form className="d-flex p-2 gap-3 align-items-center "   onSubmit={handleSubmit}>
                    <Form.Label>Busqueda por Nombre:</Form.Label>
                    <Form.Control className="w-25" type="text" id="inputNombrePelicula" placeholder="lord" />
                    <Button variant="info" type="submit">Buscar</Button>
                </Form>

            </Container>
        </div>
    )
}
export default Buscador