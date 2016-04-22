/**
 * 3rd-Party Libraries
 */

// Angular Core Libs (available via npm)
import angular from 'angular';
import angularRoute from 'angular-route';

/**
 * SPA code
 */

// Configs
import routeConfig from './_configs/routeConfig';

// Constants

// Run Blocks

// Controllers
import MainCtrl from './controllers/MainCtrl';
import BookListCtrl from '../book-list/BookListCtrl';

// Services
import BookDataService from './services/BookDataService';

// Filters

// Directives
import colorPicker from './directives/colorPicker';

/**
 * Register all components within Angular.
 */
angular.module('myApp', [
    angularRoute
])
.controller('MainCtrl', MainCtrl)
.controller('BookListCtrl', BookListCtrl)
.service('BookDataService', BookDataService)
.directive('colorPicker', colorPicker)
.config(routeConfig);
