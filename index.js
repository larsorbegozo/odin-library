// Variable Definition
const libraryContainer = document.querySelector('#library-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const nPages = document.querySelector('#n-pages');
const readStatus = document.querySelector('#read-status');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("main button");
const cancelButton = document.querySelector("dialog button")
const saveButton = document.querySelector('dialog button + button');

const myLibrary = [];

let n = 0;

// Constructor
function Book(id, title, author, nPages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.readStatus = readStatus;
}

// store new book objects into myLibrary array.
function addBookToLibrary(id, title, author, nPages, readStatus) {
    const newBook = new Book(id, title, author, nPages, readStatus);
    myLibrary.push(newBook);
}

function removeBookOfLibrary(idBook) {
    if(idBook > -1) {
        let elementToRemove = myLibrary.find(({id}) => id == idBook)
        let index = myLibrary.indexOf(elementToRemove)
        myLibrary.splice(index, 1)
    }
    console.log(myLibrary);
}

function createBook(bookardo) {
    const bookContainer = document.createElement("div")
    bookContainer.classList.add('book-container');
    const book = document.createElement("div");
    book.classList.add('book')
    book.dataset.id = myLibrary[bookardo].id
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
    const removeButton = document.createElement("button")
    removeButton.classList.add('remove-button')

    libraryContainer.appendChild(bookContainer)
    bookContainer.appendChild(book)
    bookContainer.appendChild(removeButton)
    book.appendChild(titleH3)
    book.appendChild(hr)
    book.appendChild(authorDiv)
    book.appendChild(nPagesDiv)
    book.appendChild(readStatusDiv)

    titleH3.textContent = myLibrary[bookardo].title
    authorDiv.textContent = myLibrary[bookardo].author
    nPagesDiv.textContent = myLibrary[bookardo].nPages
    readStatusDiv.textContent = myLibrary[bookardo].readStatus
    removeButton.textContent = "REMOVE"
    removeButton.dataset.id = myLibrary[bookardo].id
    removeButton.setAttribute("onclick", "getBookID(this)")
}

function resetBooksGrid() {
    libraryContainer.innerHTML = ''
}

function updateBooksGrid() {
    resetBooksGrid()
    for(let book in myLibrary) {
        createBook(book)
    }
}

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
    addBookToLibrary(n, title.value, author.value, nPages.value, readStatus.value);
    dialog.close();
    console.log(myLibrary);
    n += 1

    updateBooksGrid()
})

function getBookID(element) {
    let id = element.getAttribute('data-id')

    removeBookOfLibrary(id)
    updateBooksGrid()
}