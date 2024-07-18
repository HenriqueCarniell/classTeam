import Header from "@/src/components/Header";
import { Container } from "./styles";
import Destaques from "@/src/components/Destaques";

function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Destaques
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />

            
        </Container>
    );
}

export default Players;