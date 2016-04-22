/**
 * 3rd-Party Libraries
 */

// Angular Core Libs (available via npm)
import angular from 'angular';
import angularRoute from 'angular-route';
import angularMessages from 'angular-messages';

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
import BookDetailsCtrl from '../book-details/BookDetailsCtrl';
import NewBookCtrl from '../new-book/NewBookCtrl';

// Services
import BookDataService from './services/BookDataService';
import DataEnhancer from './services/DataEnhancer';

// Filters

// Directives
import colorPicker from './directives/colorPicker';

/**
 * Register all components within Angular.
 */
angular.module('myApp', [
    angularRoute,
    angularMessages
])
.controller('MainCtrl', MainCtrl)
.controller('BookListCtrl', BookListCtrl)
.controller('BookDetailsCtrl', BookDetailsCtrl)
.controller('NewBookCtrl', NewBookCtrl)
.service('BookDataService', BookDataService)
.service('DataEnhancer', DataEnhancer)
.directive('colorPicker', colorPicker)
.config(routeConfig);
