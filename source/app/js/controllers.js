'use strict';

/* Controllers */
angular.module('northwindApp.controllers', [])
  .config(function ($httpProvider) {
      // Temp Fix for the Cross resource access
      delete $httpProvider.defaults.headers.common['X-Requested-With']; 
  })
  .controller('customerController', function ($scope, $http, $window, dataService) {
      dataService.getCustomers();
      $scope.customers = dataService.customers;
      $scope.hasMoreCustomers = dataService.hasMoreCustomers;

      $scope.redirectToOrder = function (customerId) {
          $window.location = "#/Orders/:" + customerId;
      }
     
  })
  .controller('orderController', function ($scope, $routeParams, dataService) {
      $scope.customerId = $routeParams.id;
      $scope.orders = dataService.orders;

      // Now retrieve the order information
      dataService.getOrders($routeParams.id);
  });





