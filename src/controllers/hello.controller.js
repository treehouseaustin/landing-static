angular.module('TreeHouse.controller.hello', [])
.controller('HelloController', HelloController);

function HelloController() {

  this.hello = 'World';

}

HelloController.$inject = [];
