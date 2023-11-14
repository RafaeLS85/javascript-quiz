import { create } from "zustand";
import { Question } from "../types";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  limit: number;
}

export const useQuestionStore = create<State>((set, get) => {  
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {     

      const url = "http://localhost:5173/data.json";
      const res = await fetch(url);
      const { data } = await res.json();     

      const questions = data.sort(() => Math.random() - 0.5).slice(0, limit) 
      set({limit})
      set({questions});
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
        const state = get();
        console.log(state);
    },
    limit: 0
  };
});
