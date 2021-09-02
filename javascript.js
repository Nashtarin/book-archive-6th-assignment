
const bookSearchResult = document.getElementById("bookSearchResult");
// Loading data api
const loadBook = () => {
    const searchId = document.getElementById("searchText");
    const searchInput = searchId.value;
    searchId.value = '';
    if (searchInput === '') {
        bookSearchResult.innerHTML = `<h2 class="text-warning">Write something to search.<h2>`

    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchInput}`;
        fetch(url)
            .then(res => res.json())
            .then(data => docs(data.docs));
    }

}
const docs = books => {

    bookSearchResult.textContent = '';

    if (books.length === 0) {
        bookSearchResult.innerHTML = `<h2>No Result found!<h2>`

    }



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
                        <p class="fw-bold card-text">Author Name:${book.author_name[0]}</p>
                        <p>Publisher:${book.publisher[0]}</p>
                        <p>First Publish Date:${book.publish_date[0]}</p>
                        <p>First Publish Year:${book.publish_year[0]}</p>
                        
                        </div>
                    </div>
                `

        bookSearchResult.appendChild(div);

    });

}





