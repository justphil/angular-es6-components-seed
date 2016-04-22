import angular from 'angular';

class BookDataService {
    constructor($q) {
        'ngInject';
        this.$q = $q;
        this.books = [
            {
                title: 'AngularJS for Beginners',
                isbn: '111-111-111',
                author: 'Max Mustermann',
                numPages: 123
            },
            {
                title: 'React for Beginners',
                isbn: '222-222-222',
                author: 'Sarah Sahara',
                numPages: 200
            },
            {
                title: 'EmberJS for Beginners',
                isbn: '333-333-333',
                author: 'Toni Macaroni',
                numPages: 300
            }
        ];
    }

    getAllBooks() {
        return this.$q.when({
            data: angular.copy(this.books)
        });

        /*const deferred = this.$q.defer();

        setTimeout(function() {
            deferred.resolve({
                data: angular.copy(this.books)
            });
        }.bind(this), 0);

        return deferred.promise;*/
    }
}

export default BookDataService;
