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