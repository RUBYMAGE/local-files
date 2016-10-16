'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

      $scope.date = new Date();

      $scope.onDirectoryChange = function(){
        var files = this.files;
        $scope.files = Object.keys(files)
            .map(function (key) { return files[key]; })
            .sort(function(a,b){
              return new Date(b.lastModified) - new Date(a.lastModified);
            });
        $scope.$apply();
      };

      $scope.notImplemented = function(){
        console.log('Not implemented')
      };
}])

.directive('fileOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.fileOnChange);
      element.bind('change', onChangeHandler);
    }
  };
})

.filter("newerThan", function() {
  return function(items, date) {
    var d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return items.filter(function(item){
      return item.lastModifiedDate < d;
    });
  };
});