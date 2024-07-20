import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";

async function groupsGetAll(): Promise<string[]> {
    try {
        const { getItem } = useAsyncStorage(GROUP_COLLECTION);

        const storage = await getItem();

        const groups: string[] = storage ? JSON.parse(storage) : [];

        return groups;
    } catch (error) {
        throw error;
    }
}

export default groupsGetAll;
