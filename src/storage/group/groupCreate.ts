import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import groupsGetAll from "./grouGetAll";
import { AppError } from "@/src/utils/AppError";

async function groupCreate(newGroupName: string) {
    const { setItem } = useAsyncStorage(GROUP_COLLECTION);

    try {
        const storedGroups = await groupsGetAll();
        const storage = JSON.stringify([...storedGroups, newGroupName]);
        const groupAlreadyExists = storedGroups.includes(newGroupName);

        if (groupAlreadyExists) {
            throw new AppError('Já existe um grupo cadastrado com esse nome.');
        }

        await setItem(storage);
    } catch (error) {
        throw error;
    }
}

export default groupCreate;
