/**
 * Classes
 */
class Book {
  constructor(title, author, isdn) {
    this.title = title;
    this.author = author;
    this.isdn = isdn;
  }

  printIsdn() {
    console.log(this.isdn);
  }
}

class ITBook extends Book {
  constructor(title, author, isdn, technology) {
    super(title, author, isdn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }

  get fullTitle() {
    return `${this.title} by ${this.author}`;
  }
  set fullTitle(fullTItle) {
    let values = fullTItle.split(' by ');
    this.title = values[0];
    this.author = values[1];
  }

}

const book = new Book("Title 1", "Author 1", "1-12323-12323");
book.printIsdn();

const jsBook = new ITBook("JS book", "JS author", "1-32323-333", "JS");
jsBook.printIsdn();
jsBook.printTechnology();

jsBook.fullTitle = 'JS Book by Author of JS';
console.log(jsBook);