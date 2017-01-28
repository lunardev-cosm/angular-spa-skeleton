'use strict';

(function (angular, appName) {

    angular.module(appName).provider('$routesRegistrator', function () {

        var _this = this;

        /**
         *
         * @param {type} $stateProvider
         * @param {type} $urlRouterProvider
         * @param {type} $modulesRegistrator
         * @returns {undefined}
         */
        this.register = function ($stateProvider, $urlRouterProvider, $modulesRegistrator) {

            $urlRouterProvider.otherwise("/");

            $stateProvider.state('__app', {
                abstract: true,
                templateUrl: $modulesRegistrator.getLocations()['__app'] + 'views/main.html',
                resolve: {
                    test: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            '__app'
                        ]);
                    }]
                }
            });

            $stateProvider.state('__app_home', {
                url: "/",
                parent: '__app',
                templateUrl: $modulesRegistrator.getLocations()['__app'] + 'views/home.html',
                data: {
                    //
                },
                resolve: {
                    test: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            '__app.home'
                        ]);
                    }]
                }
            });

            $stateProvider.state('__app_order_list', {
                url: "/order/list",
                parent: '__app',
                templateUrl: $modulesRegistrator.getLocations()['order'] + 'views/list.html',
                data: {
                    //
                },
                resolve: {
                    test: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'order', 'order.list'
                        ]);
                    }]
                }
            });
        };

        return {
            stateProvider: null,
            urlRouterProvider: null,
            modulesRegistratorProvider: null,
            register: function() {
                return _this.register(this.stateProvider, this.urlRouterProvider, this.modulesRegistratorProvider);
            },
            getStates: function() {
                return _this.states;
            },
            $get: function() {
                return _this.states;
            }
        };

    });

}(angular, appName));