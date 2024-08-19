import readlineSync from 'readline-sync';

export const getName = () => {
	const name = readlineSync.question('Назовите своё имя: ');
	console.log (`Привет, ${name}!`);
	return name;
};
export const getRandomNumber = (max = 100, min = 0) => {
    const number = Math.floor(Math.random() * (max - min) + min);
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
export const isPrimeNumber = (num = 100) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 && i === num) {
            return true;
        };
    };
    return false;
};