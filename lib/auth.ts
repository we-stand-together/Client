import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetToken } from "./api";


export const SignIn = async (phoneNumber: number, passcode: number): Promise<boolean> => {
    const token = await GetToken(phoneNumber, passcode);
    if (token) {
        await AsyncStorage.setItem('AUTH_TOKEN', token);
        return true;
    }

    return false;
}

export const IsLoggedIn = async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem('AUTH_TOKEN');
    return !!token;
}