//'use strict';

/* Controllers */

angular.module('northwindApp.controllers', [])
  .config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    })
  .controller('customerController', function ($scope, $http, $window, dataService) {
      $http.get('http://services.odata.org/V3/Northwind/Northwind.svc/Customers')
          .success(function (data) {
              $scope.customers = data.value;
          })
          .error(function () {
              alert("call to the service failed");
          });

      $scope.getOrderData = function (customerId) {
         $window.location = "#/Orders/:" + customerId;
      }
  })
  .controller('orderController', function ($scope, $routeParams, dataService) {
      $scope.customerId = $routeParams.id;      
      $scope.orders = dataService.orders;
      // Now retrieve the order information
      dataService.getOrders($routeParams.id);
  });