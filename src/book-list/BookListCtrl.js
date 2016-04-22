export default function BookListCtrl($log, BookDataService) {
    'ngInject';

    $log.info('BEFORE');
    BookDataService.getAllBooks().then(function(response) {
        $log.info('RESOLVE', response.data);
        this.books = response.data;
    }.bind(this)).catch(function(error) {
        $log.error('An error occurred', error);
    }.bind(this));


    $log.info('AFTER');



    this.deleteBook = function(book) {
        this.bookToDelete = book;
        this.dialogVisible = true;
        this.dialogTitle = 'Wirklich löschen?';
    }.bind(this);

    this.cancelDeletion = function() {
        delete this.bookToDelete;
        this.dialogVisible = false;
        delete this.dialogTitle;
    };

    this.performDeletion = function() {
        console.log('About to delete book', this.bookToDelete);
        BookDataService.deleteBook(this.bookToDelete.isbn).then(function(response) {
            if (response.data) {
                this.deleteBookLocally(this.bookToDelete);
                this.cancelDeletion();
            }
        }.bind(this));
    }.bind(this);

    this.deleteBookLocally = function(book) {
        this.books.splice(this.books.indexOf(book), 1);
    }.bind(this);
}
