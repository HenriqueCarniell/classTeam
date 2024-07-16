import Header from "@/src/components/Header";
import Destaques from "@/src/components/Destaques";
import { Container } from "./styles";
import GroupsCard from "@/src/components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

function Home() {
    const [groups, setGroups] = useState<string[]>(['Rocketseat', 'Amigos'])


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
            />
        </Container>
    );
}

export default Home;