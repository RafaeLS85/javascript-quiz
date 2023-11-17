import { create } from "zustand";
import { Question } from "../types";
import { persist } from "zustand/middleware";
import services from "../services/questions";


interface State {
  questions: Question[];
  currentQuestion: number; 
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  limit: number;
  goNextQuestion: () => void;
  goPrevQuestion: () => void; 
  reset: () => void;
  activeGame: boolean;
  startGame: () => void;
 }

export const useQuestionStore = create<State>()(persist((set, get) => {  
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {       
      const data = await services.questions();
      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit) 
      set({limit})
      set({questions});
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
        const state = get();      
        const newQuestions = structuredClone(state.questions);
        const questionIndex = newQuestions.findIndex(q => q.id === questionId);
        const questionInfo = newQuestions[questionIndex];
        const isCorrect = questionInfo.correctAnswer === answerIndex;       

        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrect,
          userSelected: answerIndex
        };

        set({ questions: newQuestions })
    },
    limit: 0,
    goNextQuestion: () => {
      const { currentQuestion, questions } = get();
      const nextQuestion = currentQuestion + 1

      if(nextQuestion < questions.length){
        set({ currentQuestion: nextQuestion })
      }
    },
    goPrevQuestion: () => {
      const { currentQuestion } = get();
      const previousQuestion = currentQuestion - 1

      if(previousQuestion >= 0 ){
        set({ currentQuestion: previousQuestion })
      }
    },
    reset: () => {
      set({ questions: [], currentQuestion: 0, activeGame: false })
    },
    activeGame: false,
    startGame: () => {
      set( {activeGame: true} )
    }   
  }
}, {
  name: 'questions'
}))
