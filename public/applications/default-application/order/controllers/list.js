'use strict';

(function (angular) {

    angular.module('orderModule').controller('ListOrderCtrl', ListOrderCtrl);

    ListOrderCtrl.$inject = ['$rootScope', '$scope', 'listState'];
    function ListOrderCtrl($rootScope, $scope, listState) {

        $rootScope.appInitialize = true;

        $scope.model = listState.getState();
    }

}(angular));