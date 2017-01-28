'use strict';

(function (angular, appName) {

    angular.module(appName).controller('BaseCtrl', BaseCtrl);

    BaseCtrl.$inject = ['$rootScope', '$scope'];
    function BaseCtrl($rootScope, $scope) {
        $scope.model = {
            text: 'Hello!'
        };
    }

}(angular, appName));
