// Bibliotecas externas
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

// Componentes do projeto
import Header from "@/src/components/Header";
import Destaques from "@/src/components/Destaques";
import ButtonIcon from "@/src/components/ButtonIcon";
import Input from "@/src/components/Input";
import Filter from "@/src/components/Filter";
import PlayerCard from "@/src/components/PlayerCard";
import ListEmpty from "@/src/components/ListEmpty";
import Button from "@/src/components/Button";

// Arquivos de estilo
import { Container, HeaderList, NumbersOfPlay, Form } from "./styles";

// Utilitários
import { AppError } from "@/src/utils/AppError";
import { playerAddByGroup } from "@/src/storage/player/playerAddByGroupo";
import { playersGetByGroupAndTeam } from "@/src/storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/src/storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@/src/storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@/src/storage/group/groupRemoveByName";

type RouteParams = {
    group: string
}

function Players() {
    const [newPlayerName, setNewPlayerName] = useState<string>('')
    const [team, setTeam] = useState<string>('');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute()

    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();

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
            newPlayerNameInputRef.current?.blur();
            setNewPlayerName('');
            fetchPlayersByTeam();
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

    const handlePlayerRemove = async (playerName: string) => {
        try {
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();
        } catch (error) {
            console.log(error);
            Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
        }
    };

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('groups');

        } catch (error) {
            console.log(error);
            Alert.alert('Remover Grupo', 'Não foi posível remover o grupo');
        }
    }

    let handleGroupRemove = async () => {
        Alert.alert(
            'Remover',
            'Deseja remover o grupo?',
            [
                {
                    text: 'Não', style: 'cancel'
                },
                {
                    text: 'Sim', onPress: () => groupRemove()
                }
            ]
        )
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
                    inputRef={newPlayerNameInputRef}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
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
                        onRemove={() => handlePlayerRemove(item.name)}
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
                onPress={handleGroupRemove}
            />
        </Container>
    );
}

export default Players;