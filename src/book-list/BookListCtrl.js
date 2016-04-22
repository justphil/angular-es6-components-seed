export default function BookListCtrl($log, BookDataService) {
    'ngInject';

    $log.info('BEFORE');
    BookDataService.getAllBooks().then(function(response) {
        $log.info('RESOLVE');
        this.books = response.data;
    }.bind(this)).catch(function(error) {
        $log.error('An error occurred', error);
    }.bind(this));


    $log.info('AFTER');
}
