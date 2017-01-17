console.log('hello')
var app = angular.module('MyAwesomeAngularApp', ['ngRoute'])


app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      controller: 'FrontCtrl',
      templateUrl: 'partials/front.html'
    })
    .when('/atlantic', {
      controller: 'AtlanticCtrl',
      templateUrl: 'partials/atlantic.html'
    })
    .when('/highway', {
      controller: 'HighwayCtrl',
      templateUrl: 'partials/highway.html'
    })
    .otherwise({
      redirectTo : '/'
    })
})


app.controller('FrontCtrl', function ($scope) {
  $scope.header = 'Must See Highways',
  $scope.description = 'There’s nothing like a road trip to really experience a country. From coastal highways and dizzying mountain passes, to scenic routes through national parks and bridges over great spans of water; roads are the circulatory system that connects a country.'
});

app.controller('AtlanticCtrl', function ($scope) {
  $scope.title = "The Atlantic Road, Norway"
  $scope.description = "Opened on July 7, 1989, the Atlantic Road is a National Tourist Route and was honoured as Norway’s Construction of the Century in 2005. The Atlantic is an 8.3 kilometer (5.2 miles) section of Country Road 64 which runs between the towns of Kristiansund and Molde, the two main population centres in the county of More og Romsdal in Fjord, Norway. The road is built on several small islands and skerries, which are connected by several causeways, viaducts and eight bridges."
  $scope.image = "http://twistedsifter.files.wordpress.com/2012/05/atlantic-road-norway-aerial-photograph-from-above.jpg?w=1600&h=1274"
});

app.controller('HighwayCtrl', function ($scope) {
  $scope.title = "Highway 1, Big Sur, California"
  $scope.description = "State Route 1 is a major north-south state highway that runs along most of the Pacific coastline of the U.S. state of California. The highway is famous for running along some of the most beautiful coastlines in the USA, leading to its designation as an All-American Road."
  $scope.image = "http://twistedsifter.files.wordpress.com/2013/03/bixby-bridge-highway-1-big-sur-california.jpg?w=1600&h=1068"
});


//
// var app = angular.module('nameOfApp', ['ngRoute'])
//
// app.config(($routeProvider) => {
//   $routeProvider
//     .when('/', {
//       controller: 'MainCtrl',
//       templateUrl: 'partials/main.html'
//     })
//     .when('/list', {
//       controller: 'ListCtrl',
//       templateUrl: 'partials/list.html'
//     })
// })
//
// app.controller('MainCtrl', function ($scope) {
//   $scope.nameOfModel = "baked!"
//   $scope.number = 10
//   $scope.array = [1,2,3]
//   $scope.obj = {1: "thing"}
//   $scope.functionThing = function () {
//     console.log('hooray')
//   }
//   console.log($scope)
//
//
// })
