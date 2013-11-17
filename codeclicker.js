var game = angular.module('CodeClicker', []);

game.controller('GameController', ['$scope', function($scope, gameStatus) {
  	$scope.lines_of_code = 0;
  	$scope.graduates = 0;
  	$scope.graduates_clock;
    
    $scope.codeclick = function codeclick(){
    	$scope.lines_of_code += 1;
    };
    
    $scope.buy = function(item) {
    	if (item = 'graduates' && $scope.lines_of_code > 10) {
    		$scope.graduates += 1;
    		$scope.lines_of_code -= 10;
    		clearInterval($scope.graduates_clock);
    		$scope.graduates_clock = setInterval(function(){
    			document.getElementById('console').click();},
    			1000/$scope.graduates);
    	}
    };

}]);

game.controller('PowerUpsController', ['$scope', function($scope) {

	$scope.powerups = [
	    {
	   		'id': 'graduates',
	   		'name': 'Graduates',
	   		'price': 10,
	   		'lps': 1,
	   		'count': 0,
	    },
	    {
	   		'id': 'consultants',
	   		'name': 'Consultants',
	   		'price': 50,
	   		'lps': 2,
	   		'count': 0,
	    },
	    {
	   		'id': 'senior',
	   		'name': 'Senior',
	   		'price': 200,
	   		'lps': 5,
	   		'count': 0,
	    }
	];

}]);