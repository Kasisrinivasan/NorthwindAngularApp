//'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('northwindApp.services', [])
  .value('version', '0.1')
  .factory("dataService", function ($http, $q, $log) {
      var _orders = [];
      var _ordersNextLink = "";
      var _customers = [];
      var _customersNextLink = "";

      var _getOrders = function () {
          $log.log("Executing the function to get the orders");
          var deferred = $q.defer();
          $http.get("http://services.odata.org/V3/Northwind/Northwind.svc/Orders")
            .then(function (result) {
                $log.log("Sucessfully finished fetched the orders from the Northwind service. Found (" + result.data.value.length + ") records....");
                // Successful
                angular.copy(result.data.value, _orders);
                angular.copy(result.data["odata.nextLink"], _ordersNextLink);
                deferred.resolve();
            },
            function () {
                // Error
                deferred.reject();
            });

          return deferred.promise;
      };

      var _getCustomers = function () {
          $log.log("Executing the function to get the customers");
          var deferred = $q.defer();
          $http.get("http://services.odata.org/V3/Northwind/Northwind.svc/Customers")
            .then(function (result) {
                $log.log("Sucessfully finished fetched the customers from the Northwind service. Found (" + result.data.value.length + ") records....");
                // Successful
                angular.copy(result.data.value, _customers);
                $log.log(result.data["odata.nextLink"]);
                angular.copy(result.data["odata.nextLink"], _customersNextLink);
                deferred.resolve();
            },
            function () {
                // Error
                deferred.reject();
            });

          return deferred.promise;
      };

      return {
          orders: _orders,
          customers: _customers,
          hasMoreCustomers: _customersNextLink != "",
          getCustomers: _getCustomers,
          getOrders: _getOrders
      };

  });