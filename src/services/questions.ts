import { Question } from "../types";

const services = {
    questions: async (): Promise<Question[]> => {
        const url = "http://localhost:5173/data.json";
        const res = await fetch(url);
        const { data } = await res.json();
        return data;
    }
}

export default services;
