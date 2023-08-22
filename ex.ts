// Task 1:

const max = (num1: number, num2: number): number => {
    return Math.max(num1, num2);
};

// Task 2:
const printMax = (num1: number, num2: number): void => {
    console.log(Math.max(num1, num2));
};

// Task 3:
const isEven = (num: number): string => {
    return num % 2 == 0 ? 'Even' : 'Odd';
}

// Task 4:
const strLen = (str: string): number => {
    return str.length;
}

// Task 5:
const arrInRange = (n: number): number[] => {
    const arr: number[] = [];
    for (let i: number = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

// Task 6:
const maxInArr = (numArr: number[]): number => {
    return Math.max(...numArr);
}
// console.log(maxInArr([1,23,4,5,76,2]));

// Task 7:
interface Person {
    name: string,
    age: number,
    isStudent: boolean
}

// Task 8:
const printPerson = (p: Person): void => {
    for (const key in p) {
        console.log(`${key}: ${p[key]}`);
    }
}

// Task 9:
const isMinor = (p: Person): boolean => {
    return p.age < 18;
}

// Task 10:
interface Book {
    title: string,
    author: string,
    year: number
}

// Task 11:
interface Reader {
    person: Person,
    favoriteBook: Book
}

// Task 12:
const olderReader = (rArr: Reader[]): Person => {
    let oldestPerson: Person = rArr[0].person;
    rArr.forEach((el: Reader): void => {
        if (el.person.age > oldestPerson.age) {
            oldestPerson = el.person;
        }
    });
    return oldestPerson;
}

// Task 13:
const oldestBook = (rArr: Reader[]): Book => {
    let oldestB: Book = rArr[0].favoriteBook;
    rArr.forEach((el: Reader): void => {
        if (el.favoriteBook.year > oldestB.year) {
            oldestB = el.favoriteBook;
        }
    });
    return oldestB;
}