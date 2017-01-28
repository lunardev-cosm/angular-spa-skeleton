'use strict';

(function (angular, appName) {

    angular.module(appName).provider('$modulesRegistrator', function () {

        var _this = this;

        this.root = {
            defaultApplication: '/applications/default-application/',
            packages: '/packages/'
        };

        this.locations = {
            "__app": this.root.defaultApplication + '__app/',
            "order": this.root.defaultApplication + 'order/'
        };

        this.modules = [];

        this.modules.push({
            name: '__app',
            files: getRealPathFiles('__app', [
                'controllers/main.js',
                'directives.js',
                'filters.js'
            ]),
            serie: true
        });

        this.modules.push({
            name: '__app.home',
            files: getRealPathFiles('__app', [
                'controllers/home.js',
                'factories/states/homeState.js'
            ]),
            serie: true
        });

        this.modules.push({
            name: 'order',
            files: getRealPathFiles('order', [
                'order.js'
            ]),
            serie: true
        });

        this.modules.push({
            name: 'order.list',
            files: getRealPathFiles('order', [
                'controllers/list.js',
                'factories/states/listState.js'
            ]),
            serie: true
        });

        /**
         *
         * @param module
         * @returns {*}
         */
        function getModuleRoot(module) {
            return _this.locations[module];
        }

        /**
         *
         * @param module
         * @param files
         * @returns {Array}
         */
        function getRealPathFiles(module, files) {
            var list = module.split('.');
            if (list.length > 1) {
                module = list[0];
            }

            var filesBootModule = [];
            if (files.length > 0) {
                files.forEach(function (file) {
                    if (typeof file === 'object') {
                        file.path = getModuleRoot(module) + file.path;
                        filesBootModule.push(file);
                    } else {
                        filesBootModule.push(getModuleRoot(module) + file);
                    }
                });
            }

            return filesBootModule;
        }

        return {
            getModules: function () {
                return _this.modules;
            },
            getLocations: function () {
                return _this.locations;
            },
            $get: function () {
                return _this.locations;
            }
        };

    });

}(angular, appName));