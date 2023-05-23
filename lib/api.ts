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