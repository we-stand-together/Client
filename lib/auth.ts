import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetToken, Register } from "./api";


export const SignIn = async (phoneNumber: string, passcode: number): Promise<boolean> => {
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

export const SignUp = async (phoneNumber: string, passcode: string): Promise<boolean> => {
    const token = await Register(phoneNumber, passcode);
    if (token) {
        await AsyncStorage.setItem('AUTH_TOKEN', token);
        return true;
    }

    return false;
}