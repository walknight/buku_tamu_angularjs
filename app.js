var app = angular.module('CrudApp',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'app/list.html',
        controller : ListCtrl
        
      })
      .otherwise({
        redirectTo : '/'
        
      });
      
      
}]);

app.directive('loading', function () {
    return {
      restrict: 'E',
      replace:true,
      template: '<div class="progress"><div class="indeterminate"></div></div>',
      link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
      };
});

function ListCtrl($scope, $http)
{
  $scope.loading = true;
  $http.get("http://ifcode.in/test_api.php?m=list")
    .success(function(data){
      //console.log(data);
      $scope.guest=data.data;
    
    })
    .finally(function(){
      $scope.loading = false;
    });
  
  $scope.clickMe = function(){
    alert('test');
  };
  
}

