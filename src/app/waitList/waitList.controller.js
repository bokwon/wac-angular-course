(function(){
  'use strict';
    
    angular
      .module('app.waitList')
      .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['$firebaseArray']; //dependency injection.
  
    function WaitListController($firebaseArray) {
      var vm = this; //vm : ViewModel (this is object instance of controller constructor function)
      
      var fireParties = new Firebase('https://wac-waitandeat.firebaseio.com/parties');
      
      function Party() {
        this.name = '';
        this.phone = '';
        this.size = '';
        this.done = false;
        this.notified = false;
      }
      
      vm.newParty = new Party();
      vm.parties = $firebaseArray(fireParties);
      vm.addParty = addParty;
      
      function addParty() {
        vm.parties.$add(vm.newParty);
        vm.newParty = new Party();
      }
    }
    
})();