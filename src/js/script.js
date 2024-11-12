`use strict`;


class Book{
    title=null;
    author =null;
    year =null;

    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;

    }
    get info(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
    getDescription(){
        console.log(`This is a book titled ${this.title} by ${this.author}.`)
    }
    set year(year){
        if (typeof year!=='number') console.error('Year does not equal number ');


    }
}

class PrintedBook extends Book{
    pageCount = null;
    fileSize=null;
    constructor( { name,author , year,pageCount,fileSize} ) {
        super(name,
            author,
            year);
        this.pageCount=pageCount;
        this.fileSize=fileSize;
    }
    get  info(){
        super.info();
        console.log(`File Size: ${this.fileSize} MB`);
    }
    getDescription(){
        super.getDescription();
        console.log(`File size is ${this.fileSize} MB.`);
    }

    set fileSize(fileSize){
        if (typeof fileSize !== 'number' || fileSize < 0) {
            console.warn('Cannot set such fileSize as age');
        }
    }


}

const myBook = new PrintedBook({
    name: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869,
    pageCount: 1225,
    fileSize: 2.5
});

myBook.info();
myBook.getDescription();
