import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseUrl = 'https://25f8-147-235-241-246.ngrok-free.app'

export const GetToken = async (phoneNumber: number, passcode: number): Promise<string | undefined> => {
    const data = {
        PhoneNumber: `${phoneNumber}`,
        Password: `${passcode}`
    };
    try {
        const response = await axios.post('/login', data, {
            baseURL: baseUrl
        });
        console.log('sign in response', response.data)
        return response.data as string;
    } catch (error) {
        console.warn('could not log in. error:', error);
        return undefined;
    }
};

export const SaveToDiary = async (date: string, message: string): Promise<string | undefined> => {
    const data = {
        Message: `${message}`,
        Date: `${date}`
    };
    const token = await AsyncStorage.getItem('AUTH_TOKEN') as string;
    try {
        console.log(data);
        const response = await axios.post('/diary/memories', data, {
            baseURL: baseUrl,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('save memory in diary response ', response);
        return response.data;
    } catch (error) {
        console.warn('could not save memroy in diary. error: ', error);
        return undefined;
    }
}