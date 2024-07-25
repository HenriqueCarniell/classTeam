// Bibliotecas externas
import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

// Componentes do projeto
import Header from "@/src/components/Header";
import Destaques from "@/src/components/Destaques";
import GroupsCard from "@/src/components/GroupCard";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";

// Arquivos de estilo
import { Container } from "./styles";

// Utilitários
import groupsGetAll from "@/src/storage/group/grouGetAll";


function Group() {
    const [group, setGroups] = useState<string[]>([]);

    const navigation = useNavigation();

    function handleNewGroup() {
        navigation.navigate('new');
    }

    async function fetchGroups() {
        try {
            const data = await groupsGetAll();
            setGroups(data);
        } catch (error) {
            console.log(error);
        }
    }

    let handleOpenGroup = (group: string) => {
        navigation.navigate('players', { group })
    }

    useFocusEffect(useCallback(() => {
        console.log("UseFocusEffect executou")
        fetchGroups();
    }, []));

    return (
        <Container>
            <Header />

            <Destaques title="Turmas" subtitle="Jogue com a sua turma" />

            <FlatList
                data={group}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupsCard title={item} 
                    onPress={() => handleOpenGroup(item)}
                    />

                )}
                contentContainerStyle={group.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Que tal cadastrar a primeira turma ?" />
                )}
            />

            <Button
                title="Criar nova Turma"
                onPress={handleNewGroup}
            />
        </Container>
    );
}

export default Group;