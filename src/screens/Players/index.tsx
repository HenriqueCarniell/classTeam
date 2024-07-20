import Header from "@/src/components/Header";
import { FlatList } from "react-native";
import { Container, HeaderList, NumbersOfPlay } from "./styles";
import Destaques from "@/src/components/Destaques";
import ButtonIcon from "@/src/components/ButtonIcon";
import Input from "@/src/components/Input";
import { Form } from "./styles";
import Filter from "@/src/components/Filter";
import { useState } from "react";
import PlayerCard from "@/src/components/PlayerCard";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    group: string
}

function Players() {

    const [team, setTeam] = useState<string>('');
    const [players, setPlayers] = useState<string[]>([]);

    const route = useRoute()

    const { group } = route.params as RouteParams;

    return (
        <Container>
            <Header showBackButton />

            <Destaques
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActivite={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumbersOfPlay>
                    {players.length}
                </NumbersOfPlay>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não há pessoas nesse time."
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />
            <Button
                title="Remover Turma"
                type="SECONDARY"
                onPress={() => setPlayers([])}
            />
        </Container>
    );
}

export default Players;