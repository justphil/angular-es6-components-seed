class NewBookCtrl {
    constructor(BookDataService, $location) {
        'ngInject';
        this.BookDataService = BookDataService;
        this.$location = $location;
    }

    createNewBook(book) {
        console.log('About to create a new book', book);
        this.BookDataService.createNewBook(book).then(function() {
            this.$location.path('/books');
        }.bind(this));
    }
}

export default NewBookCtrl;
