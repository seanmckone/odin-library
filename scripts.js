const myLibrary = [];

function Book(title, author, pageCount, beenRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;

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
