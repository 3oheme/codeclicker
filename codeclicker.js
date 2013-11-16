angular.module('CodeClicker', [])
  .controller('GameController', function() {
  	this.lines_of_code = 0;
  	this.graduates = 0;
  	this.graduates_clock;
    
    this.codeclick = function codeclick(){
    	this.lines_of_code += 1;
    };
    
    this.buy = function(item) {
    	if (item = 'graduates' && this.lines_of_code > 10) {
    		this.graduates += 1;
    		this.lines_of_code -= 10;
    		clearInterval(this.graduates_clock);
    		this.graduates_clock = setInterval(function(){
    			document.getElementById('console').click();
    			console.log('hey')},
    			1000/this.graduates);
    	}
    };

  });