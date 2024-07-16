import Header from "@/src/components/header";
import Destaques from "@/src/components/Destaques";
import { Container } from "./styles";

function Home() {
    return (
        <Container>
            <Header showBackButton={true} />
            <Destaques title="Turmas" subtitle="Jogue com a sua turma" />
        </Container>
    );
}

export default Home;