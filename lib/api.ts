import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Answer, Question } from "../pages/Form";

const baseUrl = 'https://25f8-147-235-241-246.ngrok-free.app'

export const GetToken = async (phoneNumber: string, passcode: number): Promise<string | undefined> => {
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
export const GetFormQuestions = async () => {
    try {
        const token = await AsyncStorage.getItem('AUTH_TOKEN') as string;
        const response = await axios.get('/form', {
            baseURL: baseUrl,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('questions', response.data);
        return response.data.form as Question[];
    } catch (e) {
        console.error(e);
    }
}

export const SubmitFormAnswers = async (answers: Answer[]) => {
    try {
        const token = await AsyncStorage.getItem('AUTH_TOKEN') as string;
        const response = await axios.post('/form/result', {Answers: answers}, {
            baseURL: baseUrl,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const asArr = [];
        for (const type in response.data) {
            const score = response.data[type];
            asArr.push({abuseType: type, score})
        }
        console.log('form response', asArr);
        return asArr;
    } catch (e) {
        console.warn(e);
    }
}

export const Register = async (phoneNumber: string, password: string): Promise<string|null> => {
    try {
        const response = await axios.post('/register', {
            phoneNumber,
            password
        }, {
            baseURL: baseUrl
        });

        const token = await GetToken(phoneNumber, parseInt(password)) as string;
        return token;
    } catch (e) {
        console.error(e);
        return null;
    }
}