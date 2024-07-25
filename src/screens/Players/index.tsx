import Header from "@/src/components/Header";
import { Alert, FlatList } from "react-native";
import { Container, HeaderList, NumbersOfPlay } from "./styles";
import Destaques from "@/src/components/Destaques";
import ButtonIcon from "@/src/components/ButtonIcon";
import Input from "@/src/components/Input";
import { Form } from "./styles";
import Filter from "@/src/components/Filter";
import { useEffect, useState } from "react";
import PlayerCard from "@/src/components/PlayerCard";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@/src/utils/AppError";
import { playerAddByGroup } from "@/src/storage/player/playerAddByGroupo";
import { playerGetByGroup } from "@/src/storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@/src/storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/src/storage/player/PlayerStorageDTO";

type RouteParams = {
    group: string
}

function Players() {
    const [newPlayerName, setNewPlayerName] = useState<string>('')
    const [team, setTeam] = useState<string>('');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute()

    const { group } = route.params as RouteParams;

    let handleAddPlayer = async () => {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'informe o nome da pessoa para adicionar');
        }
        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group);
            const players = await playerGetByGroup(group);
            console.log(players);
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message);
            } else {
                console.log(error);
                Alert.alert('Nova pessoa', 'Não foi possível adicionar');
            }
        }
    }

    let fetchPlayersByTeam = async () => {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas do time selecionado');
        }
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team]);

    return (
        <Container>
            <Header showBackButton />

            <Destaques
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    onChangeText={setNewPlayerName}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
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