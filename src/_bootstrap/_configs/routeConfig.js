export default function routeConfig($routeProvider) {
    'ngInject';
    $routeProvider.when('/books', {
        templateUrl: 'templates/book-list/book-list.tpl.html',
        controller: 'BookListCtrl',
        controllerAs: 'bookListCtrl'
    }).otherwise({
        redirectTo: '/books'
    });
}
