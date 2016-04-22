export default function BookDetailsCtrl($routeParams, BookDataService) {
    'ngInject';
    const isbn = $routeParams.isbn;
    BookDataService.getBookByIsbn(isbn).then(function(response) {
        this.book = response.data;
    }.bind(this));
}
