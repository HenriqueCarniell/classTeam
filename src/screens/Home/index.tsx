import Header from "@/src/components/Header";
import Destaques from "@/src/components/Destaques";
import { Container } from "./styles";
import GroupsCard from "@/src/components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";

function Home() {
    const [groups, setGroups] = useState<string[]>([])


    return (
        <Container>
            <Header showBackButton={true} />

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
                type="SECONDARY"
            />
        </Container>
    );
}

export default Home;