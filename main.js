// for-1

// let a = 1;
// let b = 10;

// let originalA = a;
// let originalB = b;

// if (a > b) {
//     [a, b] = [b, a];
// }

// console.log(`Butun sonlar ${a} dan ${b} gacha:`);
// for (let i = a; i <= b; i++) {
//     console.log(i);
// }

// console.log(`O'zgartirilmagan a: ${originalA}`);
// console.log(`O'zgartirilmagan b: ${originalB}`);



// for-2

// let a = 10;
// let b = 1;

// let originalA = a;
// let originalB = b;

// if (a > b) {
//     [a, b] = [b, a];
// }

// console.log(`Butun sonlar ${a} dan ${b} gacha (kamayish tartibida):`);
// for (let i = b; i >= a; i--) {
//     console.log(i);
// }

// console.log(`O'zgartirilmagan a: ${originalA}`);
// console.log(`O'zgartirilmagan b: ${originalB}`);




// for-3

// let konfetNarxi = 5000;

// function chiqarKonfetNarxi(kg) {
//     let narx = konfetNarxi * kg;
//     console.log(`${kg} kg konfet narxi: $${narx.toFixed(2)}`);
// }

// chiqarKonfetNarxi(1);
// chiqarKonfetNarxi(2);
// chiqarKonfetNarxi(10);




// for-4

// let konfetNarxi = 5000;

// function chiqarKonfetNarxi(kg) {
//     let narx = konfetNarxi * kg;
//     console.log(`${kg} kg konfet narxi: $${narx.toFixed(2)}`);
// }

// for (let kg = 1.2; kg <= 2; kg += 0.2) {
//     chiqarKonfetNarxi(kg);
// }




// for-5

// let a = parseInt(prompt("a ni kiriting:"));
// let b = parseInt(prompt("b ni kiriting:"));

// let originalA = a;
// let originalB = b;

// if (a > b) {
//     [a, b] = [b, a];
// }

// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//     yigindi += i;
// }

// console.log(`${a} dan ${b} gacha bo'lgan butun sonlar yig'indisi: ${yigindi}`);

// console.log(`O'zgartirilmagan a: ${originalA}`);
// console.log(`O'zgartirilmagan b: ${originalB}`);




// for-6

// let a = parseInt(prompt("a ni kiriting:"));
// let b = parseInt(prompt("b ni kiriting:"));

// let originalA = a;
// let originalB = b;

// if (a > b) {
//     [a, b] = [b, a];
// }

// let kopaytma = 1;
// for (let i = a; i <= b; i++) {
//     kopaytma *= i;
// }

// console.log(`${a} dan ${b} gacha bo'lgan butun sonlar ko'paytmasi: ${kopaytma}`);

// console.log(`O'zgartirilmagan a: ${originalA}`);
// console.log(`O'zgartirilmagan b: ${originalB}`);




// for-7

// let a = parseInt(prompt("a ni kiriting:"));
// let b = parseInt(prompt("b ni kiriting:"));

// let originalA = a;
// let originalB = b;
// if (a > b) {
//     [a, b] = [b, a];
// }

// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//     yigindi += i * i;
// }

// console.log(`${a} dan ${b} gacha bo'lgan butun sonlar kvadratlarining yig'indisi: ${yigindi}`);

// console.log(`O'zgartirilmagan a: ${originalA}`);
// console.log(`O'zgartirilmagan b: ${originalB}`);



// for-8

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let yigindi = 0;
// for (let i = 1; i <= n; i++) {
//     yigindi += 1 / i;
// }

// console.log(`S = 1 + 1/2 + 1/3 + ... + 1/${n} = ${yigindi.toFixed(4)}`);




// for-9

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let kopaytma = 1;
// for (let i = 1.1; i <= n; i += 0.1) {
//     kopaytma *= i;
// }

// console.log(`S = 1.1 * 1.2 * 1.3 * ... * ${n} = ${kopaytma.toFixed(4)}`);




// for-17

// const A = parseInt(prompt("A ni kiriting:"));
// const B = parseInt(prompt("B ni kiriting (A < B):"));

// const originalA = A;
// const originalB = B;

// for (let i = A; i <= B; i++) {
   
//     console.log(i);

//     console.log(i);
// }

// console.log(`O'zgartirilmagan A: ${originalA}`);
// console.log(`O'zgartirilmagan B: ${originalB}`);




// for-19

// let n = parseInt(prompt("n ni kiriting (n > 1):"));

// function tubSonmi(son) {
//     if (son < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(son); i++) {
//         if (son % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// if (tubSonmi(n)) {
//     console.log(`${n} tub son.`);
// } else {
//     console.log(`${n} tub emas son.`);
// }




// while-1

// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting (A > B):"));

// let originalA = A;
// let originalB = B;

// while (A >= B) {
//     A -= B;
// }

// console.log(`A ning bosh qismi: ${originalA - A}`);

// console.log(`O'zgartirilmagan A: ${originalA}`);
// console.log(`O'zgartirilmagan B: ${originalB}`);




// while-2

// let A = parseInt(prompt("A ni kiriting:"));
// let B = parseInt(prompt("B ni kiriting (A > B):"));

// let originalA = A;
// let originalB = B;

// let joylashishlar = 0;

// while (A >= B) {
//     A -= B;
//     joylashishlar++;
// }

// console.log(`A ning boshqa joylashishlari soni: ${joylashishlar}`);

// console.log(`O'zgartirilmagan A: ${originalA}`);
// console.log(`O'zgartirilmagan B: ${originalB}`);



// while-3

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// while (n % 3 === 0) {
//     console.log("3 - ning darajasi");
//     break;
// }

// if (n % 3 !== 0) {
//     console.log("3 - ning darajasi emas");
// }




// while-4

// let n = parseInt(prompt("n ni kiriting:"));
// let m = parseInt(prompt("m ni kiriting (n > m):"));

// let originalN = n;
// let originalM = m;

// while (n >= m) {
//     n -= m;
// }

// console.log(`${originalN} ni ${originalM} ga bo'lib qoldiq: ${n}`);

// console.log(`O'zgartirilmagan n: ${originalN}`);
// console.log(`O'zgartirilmagan m: ${originalM}`);




// while-5

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let originalN = n;

// while (n > 0) {
//     const qoldiq = n % 10;
//     console.log(qoldiq);
//     n = Math.floor(n / 10);
// }

// console.log(`O'zgartirilmagan n: ${originalN}`);



// while-6

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let originalN = n;
// 6
// let yigindi = 0;

// while (n > 0) {
//     let qoldiq = n % 10;
//     yigindi += qoldiq;
//     n = Math.floor(n / 10);
// }

// console.log(`Son raqamlari yig'indisi: ${yigindi}`);
// console.log(`Son: ${originalN}`);




// while-7

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let originalN = n;

// let bor2Raqam = false;

// while (n > 0) {
//     let raqam = n % 10;
    
//     if (raqam === 2) {
//         bor2Raqam = true;
//         break; 
//     }
    
//     n = Math.floor(n / 10);
// }

// if (bor2Raqam) {
//     console.log(`${originalN} da 2 raqami bor.`);
// } else {
//     console.log(`${originalN} da 2 raqami yo'q.`);
// }



// while-8

// let n = parseInt(prompt("n ni kiriting (n > 0):"));

// let originalN = n;

// let borToqRaqam = false;

// while (n > 0) {
//     let raqam = n % 10;
    
//     if (raqam % 2 !== 0) {
//         borToqRaqam = true;
//         break; 
//     }
    
//     n = Math.floor(n / 10);
// }


// if (borToqRaqam) {
//     console.log(`${originalN} da toq raqamlar bor.`);
// } else {
//     console.log(`${originalN} da toq raqamlar yo'q.`);
// }




// while-10

let n = parseInt(prompt("n ni kiriting (n > 1):"));

let originalN = n;

function tubSonmi(son) {
    if (son < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(son); i++) {
        if (son % i === 0) {
            return false;
        }
    }
    return true;
}

if (tubSonmi(n)) {
    console.log(`${originalN} tub son.`);
} else {
    console.log(`${originalN} tub emas son.`);
}
