var a = 1;
let b = 2;
const c = 3;

for(let i = 0; i < c; i++) {
  console.log(i % 1);
}

let fn = function(a, b) {
  console.log(a + b);
}

var book = {
  title: 'Title',
  author: "Author",
  year: '2000',
  getYear: function() {
    return this.year;
  }
}
