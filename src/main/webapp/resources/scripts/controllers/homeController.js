controllers.controller(
    "HomeController",
    ['$rootScope', '$scope', '$http', '$sessionStorage',
    function ($rootScope, $scope, $http, $sessionStorage) {

    $scope.$storage = $sessionStorage;

    $scope.model = {};

    $http.get("/ws/home/model").success(function(data) {
        $scope.model = data;
    })

}]);