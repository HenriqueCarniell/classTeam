import Header from "@/src/components/Header";
import { Container, Content, Icon } from "./style";
import Destaques from "@/src/components/Destaques";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import groupCreate from "@/src/storage/group/groupCreate";

function NewGroup() {
    const [group, setGroups] = useState<string>('');

    const navigation = useNavigation();

    async function handleNew() {
        try {
            await groupCreate(group);
            navigation.navigate('players', { group })
        } catch (error) {
            console.log(error)
        }
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