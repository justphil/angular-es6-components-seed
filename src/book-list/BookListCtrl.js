export default function BookListCtrl($log, BookDataService) {
    'ngInject';
    $log.info('BookListCtrl created!');

    this.books = BookDataService.getAllBooks();
}
