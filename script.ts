// Finds number that store in an array odd number of times. There is always only one such number
const findOdd = (numbers: number[]): number => {
    const storage = new Object() as Record<number, true>;
    numbers.forEach(num => {
        if (storage[num]) {
            delete storage[num];
        } else {
            storage[num] = true;
        }
    });
    return +Object.keys(storage)[0];
};

const firstTestValue_1 = [7];
const secondTestValue_1 = [1, 1, 2];
const thirdTestValue_1 = [0, 1, 0, 1, 0];
const fourthTestValue_1 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

console.log('Task 1:');
console.log(`Expected: 7; Result: ${findOdd(firstTestValue_1)}`);
console.log(`Expected: 2; Result: ${findOdd(secondTestValue_1)}`);
console.log(`Expected: 0; Result: ${findOdd(thirdTestValue_1)}`);
console.log(`Expected: 4; Result: ${findOdd(fourthTestValue_1)}\n`);

// Recursively finds sum of digits of a number
const digitalRoot = (num: number): number => {
    const stringifiedNumber = `${num}`;
    if (stringifiedNumber.length === 1) {
        return num;
    }
    const sum = stringifiedNumber
        .split('')
        .reduce((acc: number, current: string) => {
            return acc + +current;
        }, 0);
    return digitalRoot(sum);
}

const firstTestValue_2 = 16;
const secondTestValue_2 = 942;
const thirdTestValue_2 = 132189;
const fourthTestValue_2 = 493193;

console.log('Task 2:');
console.log(`Expected: 7; Result: ${digitalRoot(firstTestValue_2)}`);
console.log(`Expected: 6; Result: ${digitalRoot(secondTestValue_2)}`);
console.log(`Expected: 6; Result: ${digitalRoot(thirdTestValue_2)}`);
console.log(`Expected: 2; Result: ${digitalRoot(fourthTestValue_2)}\n`);

// Cast strings with '-' and '_' to camelCase
const toCamelCase = (str: string): string => {
    return str
        .split(/[-_]/gm)
        .map((part, i) => {
            return i ? part.charAt(0).toUpperCase() + part.slice(1) : part;
        })
        .join('');
}

const firstTestValue_3 = 'the-stealth-warrior';
const secondTestValue_3 = 'The_Stealth_Warrior';
const thirdTestValue_3 = 'The_stealth_warrior';
const fourthTestValue_3 = 'The-Stealth-Warrior';

console.log('Task 3:');
console.log(`Before: ${firstTestValue_3}; After: ${toCamelCase(firstTestValue_3)}`);
console.log(`Before: ${secondTestValue_3}; After: ${toCamelCase(secondTestValue_3)}`);
console.log(`Before: ${thirdTestValue_3}; After: ${toCamelCase(thirdTestValue_3)}`);
console.log(`Before: ${fourthTestValue_3}; After: ${toCamelCase(fourthTestValue_3)}\n`);

// Given an array of the same numbers and one unique number, finds that unique number
const findUnique = (numbers: number[]): number => {
    const storage = new Object() as Record<number, number>;
    let result = -1;
    numbers.forEach(((num) => {
        storage[num] = (storage[num] ?? 0) + 1;
        if (Object.keys(storage).length > 1 && Object.values(storage).some(n => n !== 1)) {
            Object.entries(storage).forEach(([ key, value ]) => {
                if (value === 1) {
                    result = +key;
                    return;
                }
            });
        }
    }));
    return result;
}

const firstTestValue_4 = [1, 1, 1, 2, 1, 1];
const secondTestValue_4 = [0, 0, 0.55, 0, 0];
const thirdTestValue_4 = [3, 5, 3];
const fourthTestValue_4 = [5, 5, 3];

console.log('Task 4:');
console.log(`Expected: 2; Result: ${findUnique(firstTestValue_4)}`);
console.log(`Expected: 0.55; Result: ${findUnique(secondTestValue_4)}`);
console.log(`Expected: 5; Result: ${findUnique(thirdTestValue_4)}`);
console.log(`Expected: 3; Result: ${findUnique(fourthTestValue_4)}`);