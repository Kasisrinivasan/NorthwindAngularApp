//'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('northwindApp.services', [])
  .value('version', '0.1')
  .factory("dataService", function ($http, $q) {
      var _orders = [];
      var _getOrders = function () {

          var deferred = $q.defer();
          $http.get("http://services.odata.org/V3/Northwind/Northwind.svc/Orders")
            .then(function (result) {

                // Successful
                angular.copy(result.data.value, _orders);
                //alert("Orders count " + _orders.length);
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
          getOrders: _getOrders
      };

  });