import { Container, Message } from "./style";

type props = {
    message: string;
}

function ListEmpty({ message }: props) {
    return (
        <Container>
            <Message>
                {message}
            </Message>
        </Container>
    );
}

export default ListEmpty;