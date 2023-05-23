import React, { useContext, useState } from 'react';
import {View} from 'react-native';
import {TextInput, Title, Text, Button} from 'react-native-paper';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface FormProps {}

interface Question {
    question: {id: number, text: string},
    options: {id: number, text: string}[]
}
interface Answer {
    questionId: number,
    selectedOptionId: number
}

const Form: React.FunctionComponent<FormProps> = (props) => {
    const context = useContext(GlobalContext);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const firstQuestions: Question[] = [
        {question: {id: 1, text: 'Who needs help?'}, options: [
            {id: 1, text: 'Request help for myself'},
            {id: 2, text: 'Request help for somebody else'}
        ]},
        {question: {id: 2, text: 'Are they in immediate danger?'}, options: [
            {id: 1, text: 'Yes'},
            {id: 2, text: 'No'}
        ]}
    ];

    const getCurrentQuestion = (): Question => {
        return firstQuestions.find(question => question.question.id === currentQuestion) as Question;
    }
    const answerQuestion = (id: number): void => {
        const newIndex = currentQuestion + 1;
        // setAnswers([...answers, {questionId: currentQuestion, selectedOptionId: id}]);
        answers.push({questionId: currentQuestion, selectedOptionId: id});

        if (newIndex<= firstQuestions.length) {
            console.log('moving to question', newIndex), 'total questions:', firstQuestions.length;
            setCurrentQuestion(currentQuestion + 1)
        } else {
            console.log('no more questions. answers:', answers)
            //TODO
        }
    }

  return (
    <View style={base.centered}>
        <Button onPress={() => {setCurrentQuestion(1); setAnswers([])}}>Reset</Button>
      <Title>{getCurrentQuestion().question.text}</Title>
      {getCurrentQuestion().options.map(option =>
        <Button key={option.id} onPress={() => answerQuestion(option.id)} style={{margin: 10, padding: 20}} mode='contained'>{option.text}</Button>)}
    </View>
  );
};
export default Form;