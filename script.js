function Book(title, author, pageCount, beenRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.beenRead = beenRead;

    this.info = function() {
        returnString =  `${title} by ${author}, ${pageCount} pages, `;
        if(beenRead) {
            returnString += "has been read";
        }
        else {
            returnString += "not yet read";
        }

        return returnString;
    }
}