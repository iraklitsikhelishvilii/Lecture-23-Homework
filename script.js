// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.
// let Numbers = [1, 2, 3, 4, 5, 6];
// let AddedNumbers = Numbers.reduce((acc, cur) => {
//   return (acc += cur);
// }, 0);
// console.log(AddedNumbers);

// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.
// let Numbers = [1, 2, 3, 4, 5, 6];
// let MaxNumber = Numbers.reduce((acc, cur) => {
//   if (cur > acc) {
//     return cur;
//   } else {
//     return acc;
//   }
// }, 0);
// console.log(MaxNumber);

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.
// let Words = ["irakli", "andria", "niki", "vaxo"];
// let WordsToString = Words.toString();
// console.log(WordsToString);

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.
// let Numbers = [1, 2, 3, 4, 5, 6, 7];
// let MultipliesNumbers = Numbers.reduce((acc, cur) => {
//   return acc * cur;
// }, 1);
// console.log(MultipliesNumbers);

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.
// let Numbers = [1, 2, 3, 4, 5, 6];
// let MinusNumbers = Numbers.reduce((acc, cur) => {
//   return acc - cur;
// });
// console.log(MinusNumbers);

// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.
// let Numbers = [1, 2, 3, 4, 5, 6];
// let DuplicatedNumbers = Numbers.map((Element) => {
//   return Element * 2;
// });
// console.log(DuplicatedNumbers);

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.
// let Names = ["IRAKLI", "ANDRIA", "NIKI", "VAXO"];
// let LowerCaseNames = Names.map((Element) => {
//   return Element.toLowerCase();
// });
// console.log(LowerCaseNames);

// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.
// let HTML = ["div", "p", "h1"];
// HTML.map((Element) => {
//   let p = document.createElement("p");
//   p.textContent = Element;
//   document.body.appendChild(p);
// });
// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.
// let Numbers = [1, 2, 3, 4, 5];
// let DuplicatedNumbers = Numbers.map((Element) => {
//   return Element * Element;
// });
// console.log(DuplicatedNumbers);

// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.
// let HTML = ["div", "p", "h1"];
// HTML.forEach((element) => {
//   console.log(element + " kargia");
// });
// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.
// let StudentsScores = [
//   { name: "irakli", score: 10 },
//   { name: "andria", score: 11 },
//   { name: "niki", score: 12 },
// ];
// StudentsScores.forEach((Element) => {
//   console.log(`name: ${Element.name} score: ${Element.score + 5}`);
// });

// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.
// let Numbers = [1, 2, 3, 4, 5, 6];
// let ReversNumbers = [];
// for (let i = Numbers.length - 1; i >= 0; i--) {
//   ReversNumbers.push(Numbers[i]);
// }
// console.log(ReversNumbers);

// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.
// let Divs = [1, 2, 3, 4, 5];
// for (let index = 0; index < Divs.length; index++) {
//   let div = document.createElement("div");
//   div.style.backgroundColor = "red";
//   div.style.height = " 100px";
//   div.style.width = "100px";
//   document.body.appendChild(div);
// }
// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.
// let Numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < Numbers.length; i++) {
//   console.log(`${Numbers[i]} x ${i} = ${Numbers[i] * i}`);
// }
// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.
// let Numbers = [1, 23, 4, 5, 67, 90];
// let BigNumbers = Numbers.filter((Element) => {
//   return Element > 10;
// });
// console.log(BigNumbers);

// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.
// let HTML = [
//   { name: "div", class: "CSS" },
//   { name: "h1", class: "CSS" },
//   { name: "p", class: "HTML" },
//   { name: "span", class: "HTML" },
// ];
// const FilteredArray = HTML.filter((Element) => {
//   if (Element.class === "CSS") {
//     return Element.name;
//   }
// });
// console.log(FilteredArray);
