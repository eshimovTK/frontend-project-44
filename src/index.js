import readlineSync from 'readline-sync';

export const getName = () => {
	const name = readlineSync.question('Назовите своё имя: ');
	console.log (`Привет, ${name}!`);
	return name;
};
export const getRandomNumber = (min, max) => {
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