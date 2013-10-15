//'use strict';


// Declare app level module which depends on filters, and services
angular.module('northwindApp', ['northwindApp.filters', 'northwindApp.services', 'northwindApp.directives', 'northwindApp.controllers'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/Customers', {
          templateUrl: 'partials/Customers.html', controller: 'customerController'
      });
      $routeProvider.when('/Orders/:id', {
          templateUrl: 'partials/Orders.html', controller: 'orderController'
      });
      $routeProvider.otherwise({
          redirectTo: '/Customers'
      });
  }]);
