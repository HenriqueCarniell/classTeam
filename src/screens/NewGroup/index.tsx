import Header from "@/src/components/Header";
import { Container, Content, Icon } from "./style";
import Destaques from "@/src/components/Destaques";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";

function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon name="users" />

                <Destaques
                    title="Nova Turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                />

                <Button
                    title="Criar"
                />
            </Content>
        </Container>
    );
}

export default NewGroup;