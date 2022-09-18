let library = [];

const submitButton = document.querySelector('button')
const formTitle = document.getElementById('bookTitle')
const formAuthor = document.getElementById('author')
const formPages = document.getElementById('pages')
const formRead = document.getElementById('read')
const formUnread = document.getElementById('unread')
const testP = document.querySelector('p')



submitButton.addEventListener('click', addBook)


function addBook() {
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
    testP.textContent = 'woah'
}





function Book(bookTitle, author, pageNumber, readStatus) {
    this.bookTitle = bookTitle
    this.author = author
    this.pageNumber = pageNumber
    this.readStatus = readStatus
};

