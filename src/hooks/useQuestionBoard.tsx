import { useQuestionStore } from "../store/questions";

export const useQuestionBoard = () => {
    const questions = useQuestionStore((state) => state.questions);

    let unanswer = 0;
    let incorrect = 0;
    let correct = 0;
    let isFinished = false;

    questions.forEach((question) => {
        const { userSelected, correctAnswer } = question;

        if(userSelected === undefined ) unanswer++;
        if(userSelected === correctAnswer ) correct++;
        if( userSelected !== undefined ) {
            if(userSelected !== correctAnswer ){               
                incorrect++;
            }            
        }
    });

    if(unanswer === 0){
        isFinished = true;
    }

    return { correct, incorrect, unanswer, isFinished }
}