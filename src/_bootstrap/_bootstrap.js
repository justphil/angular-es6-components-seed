/**
 * 3rd-Party Libraries
 */

// Angular Core Libs (available via npm)
import angular from 'angular';

/**
 * SPA code
 */

// Configs

// Constants

// Run Blocks

// Controllers
import MainCtrl from './controllers/MainCtrl';

// Services

// Filters

// Directives
import colorPicker from './directives/colorPicker';

/**
 * Register all components within Angular.
 */
angular.module('myApp', [])
.controller('MainCtrl', MainCtrl)
.directive('colorPicker', colorPicker);
