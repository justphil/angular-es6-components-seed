import angular from 'angular';
import 'angular-mocks';

describe('BookDataService', function() {
    let BookDataService, $rootScope;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.module(function($provide) {
        $provide.factory('DataEnhancer', function() {
            return {
                enhance: function(book) {
                    book.whatever = 'updated';
                }
            };
        });
    }));

    beforeEach(inject(function(_BookDataService_, _$rootScope_) {
        BookDataService = _BookDataService_;
        $rootScope = _$rootScope_;
    }));

    it('should be defined', function() {
        expect(BookDataService).toBeDefined();
    });

    describe('Duck Typing', function() {
        it('should contain a getAllBooks() function', function() {
            expect(BookDataService.getAllBooks).toEqual(jasmine.any(Function));
        });

        it('should contain a getBookByIsbn() function', function() {
            expect(BookDataService.getBookByIsbn).toEqual(jasmine.any(Function));
        });
    });

    describe('getAllBooks()', function() {
        it('should return an array of book objects', function() {
            let books;

            console.log('BEFORE');
            BookDataService.getAllBooks().then(function(response) {
                console.log('INNER');
                books = response.data;
            });

            $rootScope.$apply();

            expect(books).toEqual(jasmine.any(Array));
            expect(books.length).toBe(3);
            books.forEach(function(book) {
                expect(isValidBook(book)).toBe(true);
                expect(book.whatever).toBe('updated');
            });
        });
    });

    describe('getBookByIsbn()', function() {
        it('should return the book with the passed isbn', function() {
            let book;

            BookDataService.getBookByIsbn('111-111-111').then(function(response) {
                book = response.data;
            });

            $rootScope.$apply();

            expect(isValidBook(book)).toBe(true);
        });
    });

    function isValidBook(book) {
        return angular.isObject(book)
                && angular.isString(book.title)
                && angular.isString(book.author)
                && angular.isString(book.isbn)
                && angular.isNumber(book.numPages);
    }
});
