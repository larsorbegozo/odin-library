// Variable Definition
const libraryContainer = document.querySelector('#library-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const nPages = document.querySelector('#n-pages');
const readStatus = document.querySelector('#read-status');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const cancelButton = document.querySelector("dialog button")
const saveButton = document.querySelector('dialog button + button');

const myLibrary = [];

// Constructor
function Book(title, author, nPages, readStatus) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.readStatus = readStatus;
}

// store new book objects into myLibrary array.
function addBookToLibrary(title, author, nPages, readStatus) {
    const newBook = new Book(title, author, nPages, readStatus);
    myLibrary.push(newBook);
}

console.log(myLibrary);

// Loop through myLibrary array, create new divs and display them.
for(let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = `${myLibrary[i].title} ${myLibrary[i].author} ${myLibrary[i].nPages} ${myLibrary[i].readStatus}`;
    libraryContainer.appendChild(newDiv)
}

showButton.addEventListener("click", () => {
    dialog.showModal();
})

cancelButton.addEventListener("click", () => {
    dialog.close();
})

// Create a new book and add it to myLibrary array.
saveButton.addEventListener("click", () => {
    addBookToLibrary(title.value, author.value, nPages.value, readStatus.value);
    dialog.close();
    console.log(myLibrary);

    const book = document.createElement("div");
    book.classList.add('book')
    const titleH3 = document.createElement("h3")
    titleH3.classList.add('title')
    const hr = document.createElement("hr")
    hr.setAttribute('id', 'rounded')
    const authorDiv = document.createElement("div")
    authorDiv.classList.add('author')
    const nPagesDiv = document.createElement("div")
    nPagesDiv.classList.add('n-pages')
    const readStatusDiv = document.createElement("div")
    readStatusDiv.classList.add('read-status')

    libraryContainer.appendChild(book)
    book.appendChild(titleH3)
    book.appendChild(hr)
    book.appendChild(authorDiv)
    book.appendChild(nPagesDiv)
    book.appendChild(readStatusDiv)

    titleH3.textContent = myLibrary[myLibrary.length-1].title
    authorDiv.textContent = myLibrary[myLibrary.length-1].author
    nPagesDiv.textContent = myLibrary[myLibrary.length-1].nPages
    readStatusDiv.textContent = myLibrary[myLibrary.length-1].readStatus

    event.preventDefault();
})