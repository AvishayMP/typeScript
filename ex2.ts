// כל אובייקט מחויב בממשק או טיפוס

//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
const sumEven = (arrNum: number[]): number => {
    let sum: number = 0;
    arrNum.forEach((n: number): void => {
        if (n % 2 == 0) {
            sum += n;
        }
    })
    return sum;
}
// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
interface Rectangle {
    width: number,
    height: number
}
const rectangleArea = (rec: Rectangle): number => {
    return rec.width * rec.height;
}
// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321
const isPoly = (str: string): boolean => {
    for (let i: number = 0; i < str.length / 2; i++) {
        if (str[0] !== str[str.length - i]) {
            return false;
        }
    }
    return true;
}

//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper

const toCammelCase = (x: string[]): string[] => {
    return x.map(
        (ed: string): string => ed[0].toUpperCase() + ed.slice(1).toLowerCase()
    );
}

// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
const uniqArr = (arr: number[]): number[] => {
    const retArr: number[] = [];

    arr.forEach((num: number): void => {
        if (!retArr.find((n: number): boolean => n === num)) {
            retArr.push(num);
        }
    })

    return retArr;
}

// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה
interface Name {
    firstName: string,
    lastName: string
}
interface Acronyms {
    fi: string,
    li: string
}
const getAcronyms = (n: Name): Acronyms => {
    return {
        fi: n.firstName[0],
        li: n.lastName[0]
    };
}
// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.
//  עבור המערך
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Bob", age: 40 },
// ]
// Output: 31.666666666666668
interface Man {
    name: string,
    age: number
};
const avgAge = (peoples: Man[]): number => {
    let sum: number = 0;
    peoples.forEach(p => {
        sum += p.age;
    });
    return sum / peoples.length;
}

// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
interface MaxMin {
    max: number,
    min: number
}
const getMaxMin = (nums: number[]): MaxMin => {
    return {
        max: Math.max(...nums),
        min: Math.min(...nums)
    }
}

// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
const printRevers = (arr: any[]): void => {
    for (let i: number = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}