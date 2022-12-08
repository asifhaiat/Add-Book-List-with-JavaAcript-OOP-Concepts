/* Create a Book Class */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
/* Create a User Interface Class */
class UI {
  constructor() {}
  addToBookList(book) {
    // In index.html we created empty tbody tag so that we can put all new book item list.
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href = '' class= "delete">X</a></td>`;

    list.appendChild(row);
  }

  // When we submit Book form it's all field's are empty that's why we created this function;
  clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  // Form Validation
  showAlert(message, className) {
    let div = document.createElement("div");
    div.className = `vanishAlertMessage ${className}`;
    div.appendChild(document.createTextNode(message));
    //console.log(div);
    let container = document.querySelector(".container");
    let form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".vanishAlertMessage").remove();
    }, 3000);
  }
}

/* Get All UI Elements */
const form = document.querySelector("#book-form");
/* Add Event Listener */
form.addEventListener("submit", newBook);
/* Define newBook Function */
function newBook(e) {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Get UI Class and access it's function;
  const ui = new UI();

  // Checking all fields are fill up or not;
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill up all input fields!", "error");
    // alert("Please fill up all fields");
  } else {
    // Create an instance  book Object from Book Class;
    const book = new Book(title, author, isbn);
    // console.log(book);

    // Access addToBookList function by ui variable and pass book Object;
    ui.addToBookList(book);

    // Access clearFields function by ui variable;
    ui.clearFields();

    // Success Alert function
    ui.showAlert("Book Added!", "success");

    // Stopped default form submit behavior (Default Reload);
    e.preventDefault();
    // console.log('Hello from newBook function');
  }
}
