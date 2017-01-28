'use strict';

(function (angular, appName, $script) {

    angular.module(appName).config(['$stateProvider', '$locationProvider',
        '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', '$modulesRegistratorProvider', '$routesRegistratorProvider',

        function ($stateProvider, $locationProvider, $urlRouterProvider,
                  $ocLazyLoadProvider, $httpProvider, $modulesRegistratorProvider, $routesRegistratorProvider) {

            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
            $httpProvider.defaults.transformRequest = [function (data) {
                var param = function (obj) {
                    var query = '', name, value, fullSubName, subValue, innerObj, i;

                    for (name in obj) {
                        value = obj[name];

                        if (value instanceof Array) {
                            for (i = 0; i < value.length; ++i) {
                                subValue = value[i];
                                fullSubName = name + '[' + i + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value instanceof Object) {
                            for (var subName in value) {
                                subValue = value[subName];
                                fullSubName = name + '[' + subName + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value !== undefined && value !== null) {
                            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                        }
                    }

                    return query.length ? query.substr(0, query.length - 1) : query;
                };

                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];

            $ocLazyLoadProvider.config({
                asyncLoader: $script,
                events: true,
                debug: false,
                modules: $modulesRegistratorProvider.getModules()
            });

            $routesRegistratorProvider.stateProvider = $stateProvider;
            $routesRegistratorProvider.urlRouterProvider = $urlRouterProvider;
            $routesRegistratorProvider.modulesRegistratorProvider = $modulesRegistratorProvider;

            $routesRegistratorProvider.register();

            return $locationProvider.html5Mode({
                enabled: true
            });

        }]);

    angular.module(appName).run(['$rootScope', function ($rootScope) {

            $rootScope.appInitialize = false;

            $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
                //
            });

            $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
                //
            });

            $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
                //
            });

        }
    ]);

}(angular, appName, $script));