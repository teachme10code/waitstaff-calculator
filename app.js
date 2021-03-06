"use strict";

angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './home.html',
            controller : 'HomeCtrl'
        })
        .when('/new-meal', {
            templateUrl : './new-meal.html',
            controller : 'calculatorCtrl',
        })
        .when('/my-earnings', {
            templateUrl : './my-earnings.html',
            controller : 'calculatorCtrl',
        })
        .when('/error', {
		    template : '<p>Error Page Not Found</p>'
		});/*
        resolve : {
        	city: function(owmCities, $route, $location, $timeout) {
        	var city = $route.current.params.city;
	        if(owmCities.indexOf(city) == -1 ) {
	            $location.path('/error');
	            return;
	        }
        	return city;
    	}*/
    })

    //define an application controller

    .controller('HomeCtrl', function($scope) {
    })

	.controller('calculatorCtrl', function($scope) {
		var meal_count = 0;
		var average_tip = 0;
		var tip = 0;

		$scope.calculateCharges = function() {
			$scope.data.tax = $scope.data.meal_price * ($scope.data.tax_rate * .01);
			$scope.data.subtotal = $scope.data.meal_price + $scope.data.tax;
			$scope.data.tip = $scope.data.subtotal * ($scope.data.tip_percentage * .01);
			tip += $scope.data.tip;
			$scope.data.total = $scope.data.subtotal + $scope.data.tip;
			meal_count += 1;
			$scope.calculateEarnings();
		};

		$scope.calculateEarnings = function() {
			$scope.data.tips_total = tip;
			$scope.data.meal_count = meal_count;
			$scope.data.average_tip = $scope.data.tips_total / meal_count;
			$scope.clearInputFields();
		};

		$scope.clearInputFields = function() {
			MealForm.reset();
		};

		$scope.resetForm = function() {
			meal_count = 0;
			average_tip = 0;
			tip = 0;
			$scope.data = {};
			MealForm.reset();
			$scope.MealForm.$setPristine();
		};
	})