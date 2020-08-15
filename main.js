// Ejercicio 1


let NewString = (a, b, c) => `Hola mi nombre es ${a} ${b} y mi edad ${c}`;
console.log(NewString("rodolfo", "alfredo", 30));

//Ejercicio2

let sumOfCubes = (a, b, c) => a ** 3 + b ** 3 + c ** 3;
console.log(sumOfCubes(1, 5, 9));

//Ejercicio3


function getTypeValues(value) {
  return typeof value;
}

console.log(getTypeValues("rodolfo"));

//Ejercicio4

let sum = 0;

let sumrest = (...rest) => {
  for (let index = 0; index < rest.length; index = index + 1) {
    sum = sum + rest[index];
  }
  console.log(sum);
};

sumrest(1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5);

//Ejercicio5

arrayfilter = [];

function filterNoString(coleccion = []) {
  coleccion.forEach(function (elemento, indice) {
    if (typeof elemento != "string") {
      arrayfilter = arrayfilter.concat(elemento);
    }
  });
}

filterNoString([1, "2", 3, "rodolfo", "1", 3, { name: "rodolfo" }]);
console.log(arrayfilter);

//Ejercicio 6 

function minMax(coleccion2 = []) {
  return [Math.min(...coleccion2), Math.max(...coleccion2)];
}

console.log(minMax([1, 2, 3, 4, 5]));

//Ejercio 7 
//

function formatPhoneNumber(coleccion3 = []) {
  let phone = [];
  let phone2 = [];
  let phone3 = [];
  coleccion3.forEach(function (e, index) {
    if (index <= 2) {
      phone = phone.concat(e);
    } else if (index > 2 && index <= 5) {
      phone2 = phone2.concat(e);
    } else {
      phone3 = phone3.concat(e);
    }
  });
  phone.unshift("(");
  phone.push(") ");
  phone2.push("-");
  console.log(
    `el numero de telefono del array es ${phone.join("")}${phone2.join(
      ""
    )}${phone3.join("")}`
  );
}
console.log(formatPhoneNumber([1, 2, 3, 4, 2, 6, 7, 8, 9, 0]));

//EJercicio 8 
//

function findLargestNums(coleccion4 = []) {
  let LargestNums = [];
  coleccion4.forEach(function (e) {
    LargestNums = LargestNums.concat([Math.max(...e)]);
  });
  console.log(LargestNums);
}

findLargestNums([
  [4, 2, 7, 1],
  [20, 70, 40, 90],
  [1, 2, 0],
  [1, 2, 3, 99],
]);

//Ejercicio 9 

function charIndex(a, b) {
  let Index = [];
  Index = [a.indexOf(b)];
  Index.push(a.lastIndexOf(b));
  console.log(Index);
  console.log(
    `the first "${b}" has index ${Index[0]}, the last "${b}" has index ${Index[1]}`
  );
}

console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));

//Ejercicio 10 
//

function ToArray(coleccion5 = {}) {
  return Object.entries(coleccion5);
}

console.log(ToArray({ a: 1, b: 2 }));

/*
//Ejercicio 11 
11. 
*/

function getBudgets(coleccion6 = []) {
  return coleccion6.map((obj) => obj.budget).reduce((a, b) => a + b, 0);
}

console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

/*12. */

let students = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];
function getStudentNames() {
  let studentsnames = [];
  for (const key in students) {
    for (const a in students[key]) {
      studentsnames = studentsnames.concat(students[key][a]);
    }
  }
  console.log(studentsnames);
}

getStudentNames();

/*13.*/

function objectToArray(coleccion7 = []) {
  console.log(Object.entries(coleccion7));
}
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10,
});

/*14  */

function SquareSum(n) {
  let SumaCuadrados = 0;
  for (let i = 1; i <= n; i = i + 1) {
    SumaCuadrados = SumaCuadrados + i ** 2;
  }
  console.log(SumaCuadrados);
}
console.log(SquareSum(102));

/*15.*/

function multiplyByLength(colecction = []) {
  console.log(colecction.map((obj) => obj * colecction.length));
}

multiplyByLength([2, 3, 1, 0, 3, 4, 5, 2]);

/*16 */

function countdown(coleccion7) {
  let countdown2 = [];
  for (let i = 0; i <= coleccion7; i = i + 1) {
    countdown2 = countdown2.concat(i);
  }
  return countdown2.reverse();
}

console.log(countdown(5));



/*20. */

function vreplace(a, b) {
  return a.replace(/[aeiou]/g, b);
}

console.log(vreplace("apples and bananas", "e"));

/* 21.  */

function findNemo(a, b) {
  let stn = [];
  a.split(" ").forEach(function (element, e) {
    if (element == b) {
      stn = stn.concat(e + 1);
    }
  });
  return `i found ${b} at ${stn} !`;
}

console.log(findNemo("I am finding Nemo !", "Nemo"));

/* 22.  */

function capLast(a) {
  let word = "";
  let lastletter = "";
  a.split("").forEach(function (element, e) {
    if (e + 1 == a.split("").length) {
      lastletter = lastletter.concat(element);
    } else {
      word = word.concat(element);
    }
  });
  return `${word}${lastletter.toUpperCase()}`;
}

console.log(capLast("hello"));