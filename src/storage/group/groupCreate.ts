import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import groupsGetAll from "./grouGetAll";

async function groupCreate(newGroupName: string) {
    const { setItem } = useAsyncStorage(GROUP_COLLECTION);

    try {
        const storedGroups = await groupsGetAll();
        const storage = JSON.stringify([...storedGroups, newGroupName]);
        await setItem(storage);
    } catch (error) {
        throw error;
    }
}

export default groupCreate;
