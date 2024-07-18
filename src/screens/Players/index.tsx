import Header from "@/src/components/Header";
import { Container } from "./styles";
import Destaques from "@/src/components/Destaques";
import ButtonIcon from "@/src/components/ButtonIcon";
import Input from "@/src/components/Input";
import { Form } from "./styles";

function Players() {
    return (
        <Container>
            <Header showBackButton />

            <Destaques
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add" />
            </Form>
        </Container>
    );
}

export default Players;