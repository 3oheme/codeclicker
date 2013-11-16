angular.module('CodeClicker', [])
  .controller('GameController', function() {
  	this.lines_of_code = 0;

    this.codeclick = function() {
    	this.lines_of_code += 1;
    }
  });