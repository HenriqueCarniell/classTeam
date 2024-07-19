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

function Players() {

    const [team, setTeam] = useState<string>('');
    const [players, setPlayers] = useState<string[]>([])

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
                    <PlayerCard name={item}
                    />
                )}
            />
        </Container>
    );
}

export default Players;