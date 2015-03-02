'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')
    .config(['$stateProvider', '$urlRouterProvider', '$layoutStyleProvider',
        function($stateProvider, $urlRouterProvider, $layoutStyleProvider) {

            console.log('Is Browser Layout: ' + $layoutStyleProvider.isBrowserLayout());
            console.log('Is Tablet Layout: ' + $layoutStyleProvider.isTabletLayout());
            console.log('Is Mobile Layout: ' + $layoutStyleProvider.isMobileLayout());


            function createBrowserLayout() {
                $stateProvider
                    .state('orders', {
                        url: '/',
                        views: {
                            'main': {
                                templateUrl: 'modules/core/views/browser/orders.html'
                            },
                            'navigation@orders': {
                                templateUrl: 'modules/core/views/navigation.html'
                            },
                            'list@orders': {
                                controller: 'OrderListController',
                                templateUrl: 'modules/core/views/list.html'
                            },
                            'details@orders': {
                                templateUrl: 'modules/core/views/details.html'
                            }
                        }
                    });
            }

            function createTabletLayout() {

            }

            function createMobileLayout() {

            }

            $urlRouterProvider.otherwise('/');

            /*
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to home
             */
            // $stateProvider
            //     .state('home', {
            //         url: '/',
            //         templateUrl: 'modules/core/views/navigation.html',
            //         controller: 'HomeController'
            //     });

            if ($layoutStyleProvider.isTabletLayout()) {
                createTabletLayout();
            } else if ($layoutStyleProvider.isMobileLayout()) {
                createMobileLayout();
            } else {
                createBrowserLayout();
            }
        }
    ]);
