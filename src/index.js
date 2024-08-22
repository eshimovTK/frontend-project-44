import readlineSync from 'readline-sync';

export const getName = () => {
    const name = readlineSync.question('May I have your name? ');
	console.log (`Hello, ${name}!`);
	return name;

};

export const getRandomNumber = (min = 0, max = 100) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;

}

export const getGCD = (firstNumber, lastNumber) => {
    let a = firstNumber;
    let b = lastNumber;
    while (a !== 0 && b !== 0){
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        };
    };
    return a + b;
};

export const getProgression = (beginNumberProgression, progressionDifference, progressionLength) => {
    let progression = [];
    while(progression.length <= progressionLength) {
        beginNumberProgression += progressionDifference;
        progression.push(beginNumberProgression);
    };
    return progression;
};

export const isPrimeNumber = (num) => {
    for (let i = 2; i < num; i +=1 ) {
        if (num % i === 0 && i === num) {
            return 0;
        };
    };
    return num < 1;
};

export const startMassage = (gameName = '') => {
    console.log(`${gameName}\n`);
    console.log(`Welcome to the Brain Games!`);
};

export const checkingAnswers = (userName, userAnswer, correctAnswer, i, question = '') => {
    if (correctAnswer === userAnswer.toLowerCase()) {
        console.log('Correct!');
    } else {
        console.log(`Question: ${question}\nYour answer: ${userAnswer}`)
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
        return false;
    };
    if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
    };
};

export const getCorrectAnswer = (number) => {
    let correctAnswer = '';
    if (number === 0) {
        correctAnswer = 'yes';
    } else {
        correctAnswer = 'no';
    };
    return correctAnswer;
};