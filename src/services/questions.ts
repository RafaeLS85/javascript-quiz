import { Question } from "../types";

const services = {
    questions: async (): Promise<Question[]> => {        
        // const url = "http://localhost:5173/data.json";
        const url = "https://rafaels85.github.io/javascript-quiz/data.json";
        const res = await fetch(url);
        const { data } = await res.json();
        return data;
    }
}

export default services;
