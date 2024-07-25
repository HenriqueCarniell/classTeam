import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@/src/utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playerGetByGroup } from "./playersGetByGroup";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {

    try {
        const storagePlayers = await playerGetByGroup(group);
        const playerAlreadyExists = storagePlayers.filter(player => player.name === newPlayer.name);

        if (playerAlreadyExists.length) {
            console.log('Essa pessoa já está adicionada em um time aqui');
            throw new AppError('Essa pessoa já está adicionada em um time aqui');
        }

        const storage = JSON.stringify([...storagePlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-group${group}`, storage);

    } catch (error) {
        throw (error);
    }
}