import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, Text, ScrollView } from "react-native";
import { Button, Card, TextInput } from 'react-native-paper';
import { SaveToDiary } from '../lib/api';


const CalendarPage: React.FunctionComponent = (props) => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const date = new Date();
        const stringDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        return stringDate;
    });

    const [text, setText] = React.useState("");

    const handleSave = async () => {
        const response = await SaveToDiary(selectedDate, text);
        console.log(response);
    };

    return (<ScrollView>
        <Calendar
            onDayPress={day => {
                setSelectedDate(day.dateString);
            }}
            markedDates={{
                [selectedDate]: { selected: true, disableTouchEvent: true }
            }} />
        <Card>
            <Card.Title title={selectedDate} ></Card.Title>
            <Card.Content>
                <TextInput label="Write here" value={text} onChangeText={text => setText(text)} />
            </Card.Content>
            <Card.Actions>
                <Button onPress={handleSave}>Save</Button>
            </Card.Actions>
        </Card>
    </ScrollView>);
};

export default CalendarPage;