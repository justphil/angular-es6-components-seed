export default function routeConfig($routeProvider) {
    'ngInject';
    $routeProvider.when('/books/:isbn', {
        templateUrl: 'templates/book-details/book-details.tpl.html',
        controller: 'BookDetailsCtrl',
        controllerAs: 'bookDetailsCtrl'
    }).when('/books', {
        templateUrl: 'templates/book-list/book-list.tpl.html',
        controller: 'BookListCtrl',
        controllerAs: 'bookListCtrl'
    }).when('/new-book', {
        templateUrl: 'templates/new-book/new-book.tpl.html',
        controller: 'NewBookCtrl',
        controllerAs: 'newBookCtrl'
    }).otherwise({
        redirectTo: '/books'
    });
}
