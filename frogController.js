var app = angular.module('racingFrogs', []);

app.controller('frogController', FrogController);

function FrogController() {
	var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.      
       
	vm.frogs = [];
	
	function Frog(name, posX) {
		var thisFrog = {
			name: name,
			posX: posX
		};

		vm.frogs.push(thisFrog);
	}
	
	vm.bruce = new Frog("Bruce", 1);
	vm.alfred = new Frog("Alfred", 1);
	vm.bane = new Frog("Bane", 1);
	vm.barbra = new Frog("Barbra", 1);

	 vm.winnerFlag = 0;
    vm.race = function () {
        //console.log('inside race function');
        
        for (var i = 0; i < vm.frogs.length; i++) {
            var randomStep = Math.floor((Math.random() * 1000) + 1);
            var currentPos = vm.frogs[i].pos;
            var newPos = currentPos + randomStep / 100;
            vm.frogs[i].pos = Math.min(newPos, 100);
            console.log(vm.frogs[i].name, vm.frogs[i].pos);
            if (vm.frogs[i].pos >= 100 && vm.winnerFlag === 0) {
                console.log('winner flag is ' + vm.winnerFlag);
                vm.winnerFlag = 1;
                alert('We have a winner ' + vm.frogs[i].name + ' at ' + vm.frogs[i].pos);
            }
        }
        //if (vm.winnerFlag === 0) {vm.race();}
    }
    
    vm.reset = function () {
        //console.log('inside race function');
          vm.winnerFlag = 0;
        for (var i = 0; i < vm.frogs.length; i++) {
            vm.frogs[i].pos = 0;
        }
    }
}