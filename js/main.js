let library = [];

const submitButton = document.querySelector('#submit-btn')
const formTitle = document.getElementById('bookTitle')
const formAuthor = document.getElementById('author')
const formPages = document.getElementById('pages')
const formRead = document.getElementById('read')
const formUnread = document.getElementById('unread')
const listUL = document.querySelector('ul')



submitButton.addEventListener('click', addBook)


function addBook() {
    let newLi = document.createElement('li')
    let readStatus = ""
    let bookTitle = formTitle.value
    let author = formAuthor.value
    let pageNumber = formPages.value
    if(formRead.checked === true){
        readStatus = formRead.value
    }else{
        readStatus = formUnread.value
    }
    let newBook = new Book(bookTitle, author, pageNumber, readStatus)
    library.push(newBook)
    library.forEach((book, index) => {
        listUL.appendChild(newLi).innerHTML = `${book.displayInfo()} <button class="remove-btn" data-index="${index}">Remove Title</button>`
    })
    document.querySelectorAll('.remove-btn').forEach(removal => {
        removal.addEventListener('click', deleteBook)
    })
    

}


function deleteBook(e) {
    let dataIndex = Number(e.target.attributes[1].value)
    console.log(dataIndex)
}


function Book(bookTitle, author, pageNumber, readStatus) {
    this.bookTitle = bookTitle
    this.author = author
    this.pageNumber = pageNumber
    this.readStatus = readStatus
    this.displayInfo = function() {
        return `${bookTitle}, ${author} ${pageNumber} ${readStatus}`
    }
};

