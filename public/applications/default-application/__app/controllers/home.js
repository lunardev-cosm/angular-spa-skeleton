'use strict';

(function (angular, appName) {

    angular.module(appName).controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$rootScope', '$scope', 'homeState'];
    function HomeCtrl($rootScope, $scope, homeState) {

        $rootScope.appInitialize = true;

        $scope.model = homeState.getState();
    }

}(angular, appName));