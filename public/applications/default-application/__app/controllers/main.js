'use strict';

(function (angular, appName) {

    angular.module(appName).controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$rootScope', '$scope', 'applicationValues'];
    function MainCtrl($rootScope, $scope, applicationValues) {

        $rootScope.appInitialize = true;
    }

}(angular, appName));