import Header from "@/src/components/Header";
import { Container } from "./styles";
import Destaques from "@/src/components/Destaques";
import ButtonIcon from "@/src/components/ButtonIcon";

function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Destaques
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />

            <ButtonIcon />
        </Container>
    );
}

export default Players;