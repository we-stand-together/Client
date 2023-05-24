import React, { useContext, useState, useEffect } from 'react';
import {View} from 'react-native';
import {TextInput, Title, Text, Button} from 'react-native-paper';
import { uid } from 'uid';
import { Danger } from '../components/danger';
import { GetFormQuestions, SubmitFormAnswers } from '../lib/api';
import { GlobalContext } from '../state/GlobalContext';
import base from '../styles/base';

interface FormProps {
    navigation: any
}

export interface Question {
    id: number,
    question: string,
    answers: {id: number, answer: string}[],
    nextQuestionId: {answerId: number, questionId: number|null}[]
}

export interface Answer {
    questionId: number,
    answerId: number
}

const firstQuestions: Question[] = [
    {
        id: -1, question: 'Who needs help?',
        answers: [
            {id: 1, answer: 'Request help for myself'}, {id: 2, answer: 'Request help for somebody else'
}            ], 
        nextQuestionId: [
            {answerId: 1, questionId: -2},
            {answerId: 2, questionId: -2}
        ]
    },
    {
        id: -2, question: 'Are they in immediate danger?',
        answers: [
            {id: 1, answer: 'Yes'}, {id: 2, answer: 'No'}
        ], 
        nextQuestionId: [
            {answerId: 1, questionId: null},
            {answerId: 2, questionId: 1}
        ]
    },
]

const Form: React.FunctionComponent<FormProps> = (props) => {
    const context = useContext(GlobalContext)
    const [currentQuestionId, setCurrentQuestionId] = useState(firstQuestions[0].id);
    const [dynQuestions, setDynQuestions] = useState<Question[]>(firstQuestions);
    const [loading, setLoading] = useState(true);
    const [showDanger, setShowDanger] = useState(false);
    const [answers, setAnswers] = useState<Answer[]>([]);
    
    useEffect(() => {
        GetFormQuestions().then((questions) => {
            console.log('questions in ui', questions)
            if (questions) {
                setDynQuestions(old => old.concat(questions));
                setLoading(false);
            };
        })
    }, []);

    const previousQuestion = () => {
        // const answerIndex = answers.findIndex(answer => answer.questionId === currentQuestion);
        // const newAnswers = answers.splice(answerIndex, 1);
        // setAnswers(newAnswers);
        // setCurrentQuestion(currentQuestion - 1);
    }

    const getCurrentQuestion = (): Question => {
        return dynQuestions.find(question => question.id === currentQuestionId) as Question;
    }

    const submitAnswers = () => {
        console.log('reached final question. answers:', answers);
        SubmitFormAnswers(answers.filter(a => a.questionId > 0)).then(result => {
            //TODO: do something
            context.setFormResults(result);
            props.navigation.navigate('profile');
        });
    }

    const answerQuestion = (answerId: number): void => {
        const currentQuestion = getCurrentQuestion();
        setAnswers(old => [...old, {questionId: currentQuestion.id, answerId}])
        
        const nextQuestionId = currentQuestion.nextQuestionId.find(m => m.answerId === answerId)?.questionId;
        console.log('next question id:', nextQuestionId)
        if (!nextQuestionId) {
            if (currentQuestion.id == -2) {
                // special case: someone is in danger need to show special screen
                console.log('DANGER!!');
                setShowDanger(true);
                return;
            }

            submitAnswers();
            return
        }

        const nextQuestionExists = dynQuestions.find(q => q.id === nextQuestionId);
        if (!nextQuestionExists) {
            console.error('could not find next question with id', nextQuestionId);
            return;
        }

        setCurrentQuestionId(nextQuestionId as number);
    }

  return (
    <View style={base.centered}>
        {!loading && !showDanger && 
        <>
            {/* <Button onPress={() => previousQuestion()}>Previous</Button> */}
            <Button onPress={() => {setCurrentQuestionId(-1); setAnswers([])}}>Reset</Button>
            <Title>{getCurrentQuestion().question}</Title>
            {getCurrentQuestion().answers.map(option =>
                <Button key={option.id} onPress={() => answerQuestion(option.id)} style={{margin: 10, padding: 20}} mode='contained'>{option.answer}</Button>)
            }
        </>}
        {!loading && showDanger && 
        <>
            <Button onPress={() => setShowDanger(false)}>Back</Button>
            <Danger></Danger>
        </>
        }
    </View>
  );
};

export default Form;