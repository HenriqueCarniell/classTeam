import Header from "@/src/components/Header";
import { Container, Content, Icon } from "./style";
import Destaques from "@/src/components/Destaques";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

function NewGroup() {
    const [group, setGroups] = useState<string>('');

    const navigation = useNavigation();

    let handleNew = () => {
        navigation.navigate('players', { group })
    }

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
                    onChangeText={setGroups}
                />

                <Button
                    title="Criar"
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}

export default NewGroup;