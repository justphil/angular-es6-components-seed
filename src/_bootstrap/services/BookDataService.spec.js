import angular from 'angular';
import 'angular-mocks';

describe('BookDataService', function() {
    let BookDataService, $httpBackend, REST_BASE_URL;

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

    beforeEach(inject(function(_BookDataService_, _$httpBackend_, _REST_BASE_URL_) {
        BookDataService = _BookDataService_;
        $httpBackend = _$httpBackend_;
        REST_BASE_URL = _REST_BASE_URL_;
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
        it('should invoke the proper REST endpoint', function() {
            $httpBackend.expectGET(REST_BASE_URL + '/books').respond([{}]);
            BookDataService.getAllBooks();
            $httpBackend.flush(1);
        });
    });

    describe('getBookByIsbn()', function() {
        it('should invoke the proper REST endpoint', function() {
            const isbn = 'whatever';
            $httpBackend.expectGET(REST_BASE_URL + '/books/' + isbn).respond({});
            BookDataService.getBookByIsbn(isbn);
            $httpBackend.flush(1);
        });
    });
});
