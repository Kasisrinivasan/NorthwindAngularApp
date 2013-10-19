'use strict';

/* Controllers */
angular.module('northwindApp.controllers', [])
  .config(function ($httpProvider) {
      // Temp Fix for the Cross resource access
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .controller('alertController', function ($scope) {
      $scope.alerts = [
        { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
      ];

      $scope.addAlert = function () {
          $scope.alerts.push({ msg: "Another alert!" });
      };

      $scope.closeAlert = function (index) {
          $scope.alerts.splice(index, 1);
      };

  })
  .controller('customerController', function ($scope, $http, $window, dataService) {
      dataService.getCustomers();
      $scope.customers = dataService.customers;

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





