// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

document.addEventListener('DOMContentLoaded',function(){
  // setup first book
  const firstBookName=document.getElementById('book1Name');
  firstBookName.textContent=books[0].title;

  const firstBookAuthor=document.getElementById('book1Author');
  firstBookAuthor.textContent=books[0].author;

  const firstListItem=document.getElementById("first-book");
  if(books[0].alreadyRead===true){
    firstListItem.style.backgroundColor='green';

  }
  else{
    firstListItem.style.backgroundColor='red';
  }
  document.querySelector('#first-book img').src=books[0].bookCoverImage;

  //document.getElementById('first-book').src=books[0].bookCoverImage;

  ///////////////////////////////////////////////////////////////////////////
  //     set up second book 

  const secondBookName=document.getElementById("book2Name");
  secondBookName.textContent=books[1].title;

  const secondBookAuthor=document.getElementById("book2Author");
  secondBookAuthor.textContent=books[1].author;

  if(books[1].alreadyRead==true){
    document.getElementById("second-book").style.backgroundColor='green';
  }
  else{
    document.getElementById("second-book").style.backgroundColor='red';
  }

  document.querySelector('#second-book img').src=books[1].bookCoverImage;
  //document.getElementById('second-image').src=books[1].bookCoverImage;

  /////////////////////////////////////////////////////////////////////////////
   // setup third book
  const thirdBookName=document.getElementById('book3Name');
  thirdBookName.textContent=books[2].title;

  const thirdBookAuthor=document.getElementById('book3Author');
  thirdBookAuthor.textContent=books[2].author;

  const thirdListItem=document.getElementById("third-book");
  if(books[2].alreadyRead===true){
    thirdListItem.style.backgroundColor='green';

  }
  else{
    thirdListItem.style.backgroundColor='red';
  }


  document.querySelector('#third-book img').src=books[2].bookCoverImage;
  //document.getElementById('third-image').src=books[2].bookCoverImage;

  books.forEach(item => {
    
  });

})


