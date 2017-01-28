'use strict';

(function (angular, appName) {

    angular.module(appName).factory('homeState', homeState);

    homeState.$inject = ['$rootScope'];
    function homeState($rootScope) {

        var state = {
            text: 'Home Page!'
        };

        return {
            getState: function () {
                return state;
            }
        };
    }

}(angular, appName));