// const data = [
//   {
//     id: 1,
//     title: "The Lord of the Rings",
//     publicationDate: "1954-07-29",
//     author: "J. R. R. Tolkien",
//     genres: [
//       "fantasy",
//       "high-fantasy",
//       "adventure",
//       "fiction",
//       "novels",
//       "literature",
//     ],
//     hasMovieAdaptation: true,
//     pages: 1216,
//     translations: {
//       spanish: "El señor de los anillos",
//       chinese: "魔戒",
//       french: "Le Seigneur des anneaux",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.52,
//         ratingsCount: 630994,
//         reviewsCount: 13417,
//       },
//       librarything: {
//         rating: 4.53,
//         ratingsCount: 47166,
//         reviewsCount: 452,
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "The Cyberiad",
//     publicationDate: "1965-01-01",
//     author: "Stanislaw Lem",
//     genres: [
//       "science fiction",
//       "humor",
//       "speculative fiction",
//       "short stories",
//       "fantasy",
//     ],
//     hasMovieAdaptation: false,
//     pages: 295,
//     translations: {},
//     reviews: {
//       goodreads: {
//         rating: 4.16,
//         ratingsCount: 11663,
//         reviewsCount: 812,
//       },
//       librarything: {
//         rating: 4.13,
//         ratingsCount: 2434,
//         reviewsCount: 0,
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "Dune",
//     publicationDate: "1965-01-01",
//     author: "Frank Herbert",
//     genres: ["science fiction", "novel", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 658,
//     translations: {
//       spanish: "",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.25,
//         ratingsCount: 1142893,
//         reviewsCount: 49701,
//       },
//     },
//   },
//   {
//     id: 4,
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: "1997-06-26",
//     author: "J. K. Rowling",
//     genres: ["fantasy", "adventure"],
//     hasMovieAdaptation: true,
//     pages: 223,
//     translations: {
//       spanish: "Harry Potter y la piedra filosofal",
//       korean: "해리 포터와 마법사의 돌",
//       bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//       portuguese: "Harry Potter e a Pedra Filosofal",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.47,
//         ratingsCount: 8910059,
//         reviewsCount: 140625,
//       },
//       librarything: {
//         rating: 4.29,
//         ratingsCount: 120941,
//         reviewsCount: 1960,
//       },
//     },
//   },
//   {
//     id: 5,
//     title: "A Game of Thrones",
//     publicationDate: "1996-08-01",
//     author: "George R. R. Martin",
//     genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//     hasMovieAdaptation: true,
//     pages: 835,
//     translations: {
//       korean: "왕좌의 게임",
//       polish: "Gra o tron",
//       portuguese: "A Guerra dos Tronos",
//       spanish: "Juego de tronos",
//     },
//     reviews: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 2295233,
//         reviewsCount: 59058,
//       },
//       librarything: {
//         rating: 4.36,
//         ratingsCount: 38358,
//         reviewsCount: 1095,
//       },
//     },
//   },
// ];

// function getBooks() {
//   return data;
// }

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// // // Destructuring an array

// // const book = getBook(3);

// // // const title = book.title;
// // // const author = book.author;

// // // Object destructuring
// // const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
// //   book;
// // book;

// // console.log(author, title, genres);

// // // const primaryGenre = genres[0];
// // // const secondaryGenre = genres[1];

// // // Array destructuring
// // const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// // console.log(primaryGenre, secondaryGenre, otherGenres);

// // const newGenres = ["epic fantacy", ...genres]; // Will add at the begining
// // const newGenres2 = [...genres, "comedy"]; //Will add at the end

// // const updatedBook = {
// //   pages: 1210,
// //   ...book,
// //   moviePublicationDate: "2001-12-19",
// // };

// // updatedBook;

// // const summary = ` ${title} a ${pages}-page long book, was written by ${author} and published in ${
// //   publicationDate.split("-")[0]
// // }`; //Template literals
// // summary;

// // // function getYear(str) {
// // //   return str.split("-")[0]
// // // }

// // const getYear = (str) => str.split("-")[0];

// // console.log(getYear(publicationDate));

// // //Short circuiting

// // console.log(true && "some string"); //some string -> No short circuiting
// // console.log(false && "some string"); //short circuit -> Hence returns false
// // //falsy: 0, '', null, undefined
// // console.log("jonas" && "some string"); //some string
// // console.log(0 && "some string"); // 0

// // console.log(true || "some string"); //short circuit -> Hence returns true
// // console.log(false || "some string"); //No short circuit -> Hence returns "some string"

// // console.log(book.translations.spanish);

// // const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

// // spanishTranslation;

// // // console.log(book.reviews.librarything.reviewsCount);

// // // const countWrong = book.reviews.librarything.reviewsCount || "no data"; //Will give no data even if we have review count  as 0

// // // countWrong;

// // // //Solution to the above problem
// // // const count = book.reviews.librarything.reviewsCount ?? "no data"; //count = 0
// // // will only write no data when the first operator is null or not defined (not when its 0 or empty string!) -> Knowledge cohesive operator

// function getTotalReviewsCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// // console.log(getTotalReviewsCount(book));

// const books = getBooks();

// const x = [1, 2, 3, 4, 5].map((el) => el * 2); //The callback function will get called for each element of the array and will perform operation in that callback function

// console.log(x);

// const titles = books.map((book) => book.title);

// titles;

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   }; // We have to add a return function to make sure it returns an object because it considers this as a function block
// });

// //OR

// const essentialData2 = books.map((book) => ({
//   title: book.title,
//   author: book.author, // We have to add a return function to make sure it returns an object because it considers this as a function block
//   reviewsCount: getTotalReviewsCount(book),
// }));

// essentialData2;

// const longBooksWithMovie = books
//   .filter((book) => book.pages > 500) //We have to enter a condition which should return true or false, If the value is true then only the element will go in result array.
//   .filter((book) => book.hasMovieAdaptation); //As the result is a new array, we can also chain the filters (although doing it as && in first filter would be more efficient)
// longBooksWithMovie;

// const adventureBooks = books
//   .filter((book) => book.genres.includes("adventure")) // Includes method returns true or false
//   .map((book) => book.title); //We can also chain map on filter

// adventureBooks;

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0); //First argument is a callback function and second argument is the starter value
// // acc is current value of accumulator which starts at the starter value
// pagesAllBooks;

// const arr = [3, 7, 1, 9, 6];
// const sorted = arr.sort((a, b) => a - b);
// // To sort it in desc order, we will need to do (b - a)
// // Unlike map and reduce method, this is not a functional method, it mutates the original array, which is not ideal in react.
// // To stop this, we can perform it as below:
// const arr1 = [3, 7, 1, 9, 6];
// const sorted1 = arr.slice().sort((a, b) => a - b);
// // Doing this on real world objects:
// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

// sortedByPages;

// sorted;
// arr;

// sorted1;
// arr1;

// // 1) Adding a book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the chamber of secrets",
//   author: "J. K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd; //Result

// // 2) Delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete; //Result

// // 3) Update a book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// booksAfterUpdate; //Result

// console.log(fetch("https://jsonplaceholder.typicode.com/todos")); //Returns a promise which can be logged -> Promise { <pending> }
// console.log("jonas"); //This will be exixuted before above line as the above rest call will take time to respond

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json()) //then function will be executed when the promise returns the response
//   .then((data) => console.log(data)); //as res.json will also return a promise, we will need to add another then function here

// console.log("juan"); //This will be exixuted before above line as the above rest call will take time to respond

// Below is a cleaner way of doing it
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // Javascript waits for the promise to resolve before going to the next line because of await
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log("jonas"); // But again this line will get executed first because getTools() will take time to execute
