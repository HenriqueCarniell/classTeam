import Header from "@/src/components/Header";
import Destaques from "@/src/components/Destaques";
import { Container } from "./styles";
import GroupsCard from "@/src/components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";
import { useNavigation } from "@react-navigation/native";

function Group() {
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation();

    let handleNewGroup = () => {
        navigation.navigate('new')
    }

    return (
        <Container>
            <Header />

            <Destaques title="Turmas" subtitle="Jogue com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupsCard title={item} />

                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
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