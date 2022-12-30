const content = document.querySelector(".booklist");
const addBookForm = document.getElementById("addbook_form");

const myLibrary = [];

function Book(title, author, pageCount, beenRead, coverColor) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;
    this.coverColor = coverColor;

    this.info = () => {
        let returnString = "";
        returnString = `${this.title} by ${this.author}, ${this.pageCount} pages, `;
        if (this.beenRead) {
            returnString += "has been read";
        } else {
            returnString += "not yet read";
        }

        return returnString;
    };

    this.readToggle = () => {
        this.beenRead = !this.beenRead;

        return this.beenRead;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(library) {
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }

    for (let i = 0; i < library.length; i += 1) {
        const bookcard = document.createElement("div");
        bookcard.style.backgroundColor = library[i].coverColor;
        bookcard.classList.toggle("bookcard");

        const div = document.createElement("div");

        const title = document.createElement("p");
        title.classList.toggle("title");
        title.textContent = `${library[i].title}`;

        const authorname = document.createElement("p");
        authorname.classList.toggle("author");
        authorname.textContent = `${library[i].author}`;

        const pagecount = document.createElement("p");
        pagecount.classList.toggle("pagecount");
        pagecount.textContent = `Pages: ${library[i].pageCount}`;

        const br = document.createElement("br");

        div.appendChild(title);
        div.appendChild(br);
        div.appendChild(authorname);

        bookcard.appendChild(div);
        bookcard.appendChild(pagecount);

        content.appendChild(bookcard);
    }
}

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const bookToSubmit = new Book(
        addBookForm.elements.title_input.value,
        addBookForm.elements.author_input.value,
        addBookForm.elements.pagecount_input.value,
        false,
        addBookForm.elements.cover_color.value
    );
    addBookToLibrary(bookToSubmit);
    displayBooks(myLibrary);
});
