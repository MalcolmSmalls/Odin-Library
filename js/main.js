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
        newLi.className = `Book${index}`
        listUL.appendChild(newLi).innerHTML = `${book.displayInfo()} <button class="read-status btn-${index}" data-index="${index}">${readStatus}</button><button class="remove-btn" data-index="${index}">Remove Title</button>`
    })
    document.querySelectorAll('.remove-btn').forEach(removal => {
        removal.addEventListener('click', deleteBook)
    })
    document.querySelectorAll('.read-status').forEach(readOrNot => {
        readOrNot.addEventListener('click', changeReadStatus)
    })
    

    

}

function changeReadStatus(e){
    let i = Number(e.target.attributes[1].value)
    console.log(e)
    if(library[i].readStatus === 'read'){
        library[i].readStatus = 'unread'
        e.target.textContent = 'unread'
    }else{
        library[i].readStatus = 'read'
        e.target.textContent = 'read'
    }
}


function deleteBook(e) {
    let dataIndex = Number(e.target.attributes[1].value)
    library.splice(dataIndex)
    document.querySelector(`.Book${dataIndex}`).remove()
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

