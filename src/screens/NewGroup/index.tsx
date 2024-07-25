// Bibliotecas externas
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

// Componentes do projeto
import Header from "@/src/components/Header";
import Destaques from "@/src/components/Destaques";
import Button from "@/src/components/Button";
import Input from "@/src/components/Input";

// Arquivos de estilo
import { Container, Content, Icon } from "./style";

// Utilitários
import groupCreate from "@/src/storage/group/groupCreate";
import { AppError } from "@/src/utils/AppError";


function NewGroup() {
    const [group, setGroups] = useState<string>('');

    const navigation = useNavigation();

    async function handleNew() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Informe o nome da turma');
            }

            await groupCreate(group);
            navigation.navigate('players', { group })
        } catch (error) {
            console.log(error)
            if (error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message);
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
                console.log(error);
            }
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