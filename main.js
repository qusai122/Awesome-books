function ReadElement(selector) {
    return document.querySelector(selector);
}

const addButton = ReadElement('#add-btn');
const booksHTML = ReadElement('#books-holder');
const tittleInput = ReadElement('#book-tittle-input');
const authInput = ReadElement('#book-auth-input');




function Book(tittle, author) {
    this.tittle = tittle;
    this.author = author;
  }

let books = [
    new Book("Book Number 1","Auth 1"),
    new Book("Book Number 2","Auth 2"),
    new Book("Book Number 3","Auth 3"),
];

function add_book(){
    let tittle = tittleInput.value;
    let author = authInput.value;
    console.log("add book called");
    console.log(tittle);
    console.log(author);

    books.push(new Book(tittle,author));
    buildBooks();   

}

function remove_book(tittle){
    console.log(tittle);
    books = books.filter() 
    books = books.filter(Book => {
        return Book.tittle !== tittle;
      });
}
function buildBooks() {
    document.querySelector('#books-holder').innerHTML = books.map((book) => `
    <div class="single-book">
        <h4 class="speaker-name">${book.tittle}</h4>
        <i class="speaker-about">${book.author}</i>
        <button class="rmv-btn" id="rmv-btn" type="button" onclick="remove_book(${book.tittle})">
        remove
        </button>
        <hr class="line">
    </div>
    </div>`).join('');
  }


  // run codes

buildBooks();   
