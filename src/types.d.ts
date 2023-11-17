export interface Question {
    id: number;
    question: string;
    code: string;
    answers: string[];
    correctAnswer: number;
    explanation: string;
    userSelected?: number;
    isCorrect?: boolean;
}

export interface Board {
    correct: number; 
    incorrect: number;
    unanswer?: number;
}