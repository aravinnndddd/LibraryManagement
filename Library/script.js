 // Sample books
      let books = [
        { id: 1, title: "Introduction to Algorithms", available: true },
        {
          id: 2,
          title: "Data Structures and Algorithms in Java",
          available: true,
        },
        { id: 3, title: "Algorithms", available: true },
        { id: 4, title: "C Programming Language", available: true },
        { id: 5, title: "Effective Java", available: true },
        { id: 6, title: "Python Crash Course", available: true },
        { id: 7, title: "Computer Organization and Design", available: true },
        {
          id: 8,
          title: "Digital Design and Computer Architecture",
          available: true,
        },
        { id: 9, title: "Operating System Concepts", available: true },
        { id: 10, title: "Modern Operating Systems", available: true },
      ];

      const bookList = document.getElementById("bookList");

      function renderBooks() {
        bookList.innerHTML = "";
        books.forEach((book) => {
          const li = document.createElement("li");
          li.className =
            "mb-2 p-2 flex flex-col rounded-[10px] h-[15vh] justify-between items-center bg-black/10";

          const status = book.available ? "Available" : "Borrowed";
          const statusColor = book.available
            ? "text-green-600"
            : "text-red-600";
          const btnText = book.available ? "Borrow" : "Return";
          const btnColor = book.available
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-green-600 hover:bg-green-700";

          li.innerHTML = `
        <div class="w-fit flex flex-col">
          <span>${book.title}</span>
          <span class="${statusColor}">${status}</span>
        </div>
        <button class="ml-2 px-3 py-1 text-white rounded ${btnColor}">
          ${btnText}
        </button>
      `;

          const btn = li.querySelector("button");
          btn.addEventListener("click", () => {
            book.available = !book.available; // toggle availability
            renderBooks(); // re-render list
          });

          bookList.appendChild(li);
        });
      }

      renderBooks();