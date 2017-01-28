'use strict';

(function (angular) {

    angular.module('orderModule').factory('listState', listState);

    listState.$inject = ['$rootScope'];
    function listState($rootScope) {

        var state = {
            text: 'Order List Page!'
        };

        return {
            getState: function () {
                return state;
            }
        };
    }

}(angular));