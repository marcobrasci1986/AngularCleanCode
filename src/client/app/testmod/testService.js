(function () {
    'use strict';

    angular
        .module('testmodule')
        .factory('testService', testService);

    testService.$inject = ['$http'];

    /* @ngInject */
    function testService($http) {
        var service = {
            ping: ping
        };

        return service;

        ////////////////

        function ping() {
            return 'pong';
        }
    }
})();