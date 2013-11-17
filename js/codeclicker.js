var game = angular.module('CodeClicker', []);

game.controller('GameController', ['$scope', function($scope) {
  	$scope.lines_of_code = 0;
  	$scope.lps = 0;
    
    $scope.codeclick = function codeclick(){
    	$scope.lines_of_code += 1;
    };
    
    $scope.buy = function(item) {
    	for (var i = 0; i < $scope.powerups.length; i++) {
    		if (item == $scope.powerups[i].id && $scope.lines_of_code >= $scope.powerups[i].price) {
    			$scope.powerups[i].count += 1;
    			$scope.lines_of_code -= $scope.powerups[i].price;
                Typer.index = $scope.lines_of_code;
                $('#asd').keyup(); $('#asd').keydown();

    			clearInterval($scope.powerups[i].interval);
    			$scope.powerups[i].interval = setInterval(function(){
	    			$('#asd').keyup(); $('#asd').keydown(); },
	    			$scope.calculate_interval($scope.powerups[i]));
    			$scope.update_lps();

    		}
    	}
    };

    $scope.calculate_interval = function(powerup) {
    	return (1000/powerup.lps) / powerup.count;
    }

    $scope.update_lps = function() {
    	$scope.lps = 0;
    	for (var i = 0; i < $scope.powerups.length; i++) {
    		if ($scope.powerups[i].count > 0) {
    			$scope.lps += $scope.powerups[i].lps * $scope.powerups[i].count;
    		}
    	}
    }

    $scope.powerups = [
	    {
	   		'id': 'graduates',
	   		'name': 'Graduates',
	   		'price': 10,
	   		'lps': 1,
	   		'count': 0,
	   		'interval': '',
	    },
	    {
	   		'id': 'consultants',
	   		'name': 'Consultants',
	   		'price': 50,
	   		'lps': 2,
	   		'count': 0,
	   		'interval': '',
	    },
	    {
	   		'id': 'senior',
	   		'name': 'Senior',
	   		'price': 200,
	   		'lps': 5,
	   		'count': 0,
	   		'interval': '',
	    }
	];

}]);