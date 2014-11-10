
var lyndaTutnamespace = angular.module('myApp', []);

lyndaTutnamespace.controller('MyController', function MyController($scope) { //// CONTROLLER ////
    /******* MODEL *******/
    $scope.author = {  // Variable Scope and authoer with javascript objects (name, title and company)
        'name': 'Subodh',
        'title': 'Staff Author',
        'company': 'Spawning Designs'
    }
});
