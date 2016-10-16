'use strict';

angular.module('app1', [
  'ngRoute',
  'rmDatepicker',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.config(["rmDatepickerConfig", function(rmDatepickerConfig) {
  rmDatepickerConfig.mondayStart = true;
  rmDatepickerConfig.initState = "month";
}]);