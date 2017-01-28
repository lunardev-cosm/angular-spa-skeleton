'use strict';

var appName = 'defaultApplication';

(function (angular, appName) {

    angular.module(appName, [
        'ui.router',
        'oc.lazyLoad'
    ]);

}(angular, appName));