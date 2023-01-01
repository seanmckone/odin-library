const bookList = document.querySelector(".booklist");
const addBook = document.querySelector(".addbook");
const content = document.querySelector(".content");
const addbutton = document.querySelector(".addbutton");
const closeaddbook = document.querySelector(".closeaddbook");
const addBookForm = document.getElementById("addbook_form");

addBook.style.display = "none";

const myLibrary = [];

function Book(title, author, pageCount, beenRead, coverColor) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;
    this.coverColor = coverColor;
    this.toDisplay = true;

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

function displayBooks(library) {
    while (bookList.hasChildNodes()) {
        bookList.removeChild(bookList.lastChild);
    }

    for (let i = 0; i < library.length; i += 1) {
        if (library[i].toDisplay) {
            const bookcard = document.createElement("div");
            bookcard.style.backgroundColor = library[i].coverColor;
            bookcard.classList.toggle("bookcard");

            const infodiv = document.createElement("div");
            infodiv.classList.toggle("infodiv");

            const title = document.createElement("p");
            title.classList.toggle("title");
            title.textContent = `${library[i].title}`;

            const authorname = document.createElement("p");
            authorname.classList.toggle("author");
            authorname.textContent = `${library[i].author}`;

            const pagecount = document.createElement("p");
            pagecount.classList.toggle("pagecount");
            pagecount.textContent = `Pages: ${library[i].pageCount}`;

            const beenread = document.createElement("p");
            beenread.classList.toggle("beenread");
            if (library[i].beenRead) {
                beenread.textContent = `Read?: Yes`;
            } else {
                beenread.textContent = `Read?: No`;
            }

            infodiv.appendChild(title);
            infodiv.appendChild(authorname);
            infodiv.appendChild(pagecount);
            infodiv.appendChild(beenread);

            bookcard.appendChild(infodiv);

            const buttondiv = document.createElement("div");
            buttondiv.classList.toggle("buttondiv");

            const trashbutton = document.createElement("button");
            trashbutton.classList.toggle("trashbutton");

            const trashimage = document.createElement("img");
            trashimage.classList.toggle("trashimage");
            trashimage.src = "./images/bin.png";
            trashbutton.appendChild(trashimage);

            trashbutton.addEventListener("click", () => {
                myLibrary[i].toDisplay = false;
                bookcard.style.display = "none";
            });
            buttondiv.appendChild(trashbutton);

            const readbutton = document.createElement("button");
            readbutton.classList.toggle("readbutton");

            const readimage = document.createElement("img");
            readimage.classList.toggle("readimage");
            readimage.src = "./images/readbook.png";
            readbutton.appendChild(readimage);

            readbutton.addEventListener("click", () => {
                library[i].readToggle();
                if (library[i].beenRead) {
                    beenread.textContent = `Read?: Yes`;
                } else {
                    beenread.textContent = `Read?: No`;
                }
            });
            buttondiv.appendChild(readbutton);

            bookcard.appendChild(buttondiv);

            bookList.appendChild(bookcard);
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks(myLibrary);
}

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookToSubmit = new Book(
        addBookForm.elements.title_input.value,
        addBookForm.elements.author_input.value,
        addBookForm.elements.pagecount_input.value,
        addBookForm.elements.read_input.checked,
        addBookForm.elements.cover_color.value
    );
    addBookForm.reset();
    content.style.opacity = "100%";
    addBook.style.display = "none";
    addBookToLibrary(bookToSubmit);
    displayBooks(myLibrary);
});

addbutton.addEventListener("click", () => {
    content.style.opacity = "20%";
    addBook.style.display = "block";
});

closeaddbook.addEventListener("click", () => {
    content.style.opacity = "100%";
    addBook.style.display = "none";
});
