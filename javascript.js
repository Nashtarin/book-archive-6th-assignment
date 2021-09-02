const bookSearchResult = document.getElementById("bookSearchResult");
// Loading data api
const loadBook = () => {
    const searchId = document.getElementById("searchText");
    const searchInput = searchId.value;
    searchId.value = '';
    // checking if input is there
    if (searchInput === '') {
        bookSearchResult.innerHTML = `<h2 class="text-warning">Write something to search.<h2>`
        document.getElementById("totalsearch").innerHTML = `<h5 class="text-white text-center fw-bold">There are no results as you didn't write anything!</h5>  `

    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchInput}`;
        fetch(url)
            .then(res => res.json())
            .then(data => docs(data.numFound, data.docs,));
    }

}
const docs = (booksNumber, books) => {
    bookSearchResult.textContent = '';
    // total searche result
    document.getElementById("totalsearch").innerHTML = `<h3 class="text-white text-center fw-bold">${booksNumber} results are found`
    //error handling if no results are found


    if (books.length === 0) {
        bookSearchResult.innerHTML = `<h2>No Results are found!<h2>`

    }


    //adding div for each book and it's details

    books.forEach(book => {
        console.log(book);

        const div = document.createElement('div');
        div.classList.add("col-md-6");
        div.classList.add("col-sm-12");
        div.innerHTML = `

                    <div class="shadow p-3card border-primary h-100 rounded-3">
                         <img class=" rounded-3 mx-auto w-100 p-4 rounded-3" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h4 class="fs-2 card-title">${book.title}</h4>
                        <p class="fw-bold fs-6 card-text">Author:${book.author_name[0]}</p>
                        <p>Publisher:${book.publisher[0]}</p>
                        <p>First Publish Date:${book.publish_date[0]}</p>
                        <p>First Publish Year:${book.first_publish_year}</p>

                        </div>
                    </div>
                `

        bookSearchResult.appendChild(div);

    });

}


