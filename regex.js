
/*
let str = "Hello guys my nmae is Aydos";
let regex = /[aeiou]/ig;
let cull = str.match(regex);

console.log(cull); // ['e', 'o', 'u','a', 'e', 'i','A', 'o']
*/


/*
let str = "Hello guys my nmae is Aydos";
let regex = /[a-z]/ig;
let result = str.match(regex);

console.log(result); // ['H', 'e', 'l', 'l', 'o','g', 'u', 'y', 's', 'm','y', 'n', 'm', 'a', 'e','i', 's', 'A', 'y', 'd','o', 's']
*/


/*
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true
*/


/*
let str = "3hello guys6";
let regex = /[^0-9aeiou]/ig;
let result = str.match(regex);

console.log(result);  // ['h', 'l', 'l',' ', 'g', 'y','s']
*/

/*
let str = "Bobbjobbobss";
let regex = /b+/ig;
let result = str.match(regex);

console.log(result); // ["B","bb","bb", "b"]
*/


// let str = "Gooooooooooooooooooooooow";
// let regex = /go*/ig;
// let result = str.match(regex);

// console.log(result); // Gooooooooooooooooooooooo


/*
let str = "<h1> hello ki ki </h1>";
let regex = /<.*?>/g;
let result = str.match(regex);

console.log(result); // [ '<h1>', '</h1>' ]
*/



/*
let str = "cul go to school";
let regex = /^cul/;
let result = regex.test(str);

console.log(result); // true
*/



/*
let str = "the is the cul cobuus";
let regex = /cobuus$/;
let result = regex.test(str);

console.log(result); // true
*/



/*
let str = "The jupiter verry big plant";
let regex = /\w/g;
let result = str.match(regex).length;

console.log(result); // 23
*/

/*
let str = "The jupiter verry big plant";
let regex = /\W/g;
let result = str.match(regex).length;

console.log(result); // 4
*/


/*
let str = "The jupiter verry big plant $5000";
let regex = /\d/g;
let result = str.match(regex).length;

console.log(result); // 4
*/




/*
let str = "The jupiter verry big plant $5000";
let regex = /\D/g;
let result = str.match(regex).length;

console.log(result); //29
*/




/*
let str = "AappMOneya";
let regex = /^[A-Za-z]{2,}\d*$/;
let result = regex.test(str);

console.log(result); // true
*/




/*
let str = "The jupiter verry big plant $5000";
let regex = /\s/g;
let result = str.match(regex).length;

console.log(result); // 5
*/



/*
let str = "The jupiter verry big plant $5000";
let regex = /\S/g;
let result = str.match(regex).length;

console.log(result); // 28
*/



/*
let str = "Ohhhhhh no";
let regex = /Oh{2,6} no/;
let result = regex.test(str);

console.log(result); // true
*/



/*
let str = "favorite";
let regex = /favou?rite/;
let result = regex.test(str);

console.log(result); // true
*/


/*
let str = "qu";
let regex = /q(?=u)/;
let result = regex.test(str);

console.log(result); // true
*/


/*
let str = "qu";
let regex = /q(?!u)/;
let result = regex.test(str);

console.log(result); // false
*/



/*
let str = "cull77";
let regex = /(?=\w{5})(?=\D*\d{2})/;
let result = regex.test(str);

console.log(result); // true
*/


/*
let str = "cull cull";
let regex = /(\w+)\s\1/;

let result = str.match(regex);
let result2 = regex.test(str);

console.log(result); // ['cull cull','cull']
console.log(result2); // true
*/


/*
let strNum = "42 42 42";
let regex = /^(\d+)\s\1\s\1$/;
let result = regex.test(strNum);

console.log(result); // true
*/



/*
let str = "VS CODE";
let result = str.replace(/(\w+)\s(\w+)/, '$2 $1');

console.log(result); // CODE VS
*/



/*
let str = "This sandwich is good.";
let fixRegex = /good/;
let replaceStr = "okey-dokey";

let result = str.replace(fixRegex, replaceStr);

console.log(result); // This sandwich is okey-dokey.
*/


/*
let str = "   Hello GitHub  ";
let regex = /^\s+|\s+$/g;

let result = str.replace(regex, '');

console.log(result); // Hello GitHub
*/

/*
var re = /(\w+)\s(\w+)/;
var str = "John Smith";

var newstr = str.replace(re, "$2, $1");

console.log(newstr); // "Smith John"
*/



















