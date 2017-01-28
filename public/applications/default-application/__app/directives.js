'use strict';

(function (angular, appName) {

    angular.module(appName).directive('headTitle', headTitle);

    headTitle.$inject = ['$rootScope', '$timeout'];
    function headTitle($rootScope, $timeout) {
        return {
            link: function (scope, element) {
                var listener = function (event, toState, toParams, fromState, fromParams) {
                    var title = '';

                    if (toState.data && toState.data.headTitle)
                        title = toState.data.headTitle;
                    $timeout(function () {
                        element.text(title);
                    });
                };

                $rootScope.$on('$stateChangeStart', listener);
            }
        };
    }

}(angular, appName));