"use strict";

angular.module('myApp', [])
	.controller('StaffCalculator', function($scope) {

		$scope.calculate = function() {
			$scope.data.subtotal = $scope.data.meal_price * $scope.data.tax_rate * $scope.data.tip_percentage;
		};

		$scope.resetForm = function() {
			$scope.data = {};
		};
	})