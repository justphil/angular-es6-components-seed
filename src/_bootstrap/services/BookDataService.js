import angular from 'angular';

class InMemoryBookDataService {
    constructor($q, DataEnhancer) {
        'ngInject';
        this.$q = $q;
        this.DataEnhancer = DataEnhancer;

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
        }).then(function(response) {
            response.data.forEach(function(book) {
                this.DataEnhancer.enhance(book);
            }.bind(this));

            return response;
        }.bind(this));

        /*const deferred = this.$q.defer();

        setTimeout(function() {
            deferred.resolve({
                data: angular.copy(this.books)
            });
        }.bind(this), 0);

        return deferred.promise;*/
    }

    getBookByIsbn(isbn) {
        const filteredBooks = this.books.filter(function(book) {
            return isbn === book.isbn;
        });

        if (filteredBooks.length > 0) {
            return this.$q.when({
                data: angular.copy(filteredBooks[0])
            });
        } else {
            return this.$q.when({
                data: null
            });
        }
    }

    createNewBook(book) {
        this.books.push(book);
        return this.$q.when({
            data: true
        });
    }
}

class BookDataService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.baseUrl = 'http://ajs-workshop.herokuapp.com/api';
    }

    getAllBooks() {
        return this.$http.get(this.baseUrl + '/books');
    }

    getBookByIsbn(isbn) {
        return this.$http.get(this.baseUrl + '/books/' + isbn);
    }

    createNewBook(book) {
        return this.$http.post(this.baseUrl + '/books', book);
    }
}

export default BookDataService;
