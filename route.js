var myapp = angular.module("myapp", ['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
          url: "/home",
          templateUrl: "demo.html",
          controller:'myController'
    })
    .state('demo', {
		  	url: "/demo",
		    templateUrl: "data.html",
			 controller: 'myController'
  	})
  	.state('registration', {
		  	url: "/registration",
		    templateUrl: "registration.html",
			 controller: 'myController'
  	});
    $urlRouterProvider.otherwise("/home");
});