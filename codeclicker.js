angular.module('CodeClicker', [])
  .controller('GameController', function() {
  	this.lines_of_code = 0;
  	this.graduates = 0;
    this.codeclick = function() {
    	this.lines_of_code += 1;
    }
    this.buy = function(item) {
    	if (item = 'graduates' && this.lines_of_code > 10) {
    		this.graduates += 1;
    		this.lines_of_code -= 10;
    	}
    }

  });