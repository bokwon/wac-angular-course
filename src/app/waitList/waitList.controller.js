(function(){
  'use strict';
    
    angular
      .module('app.waitList')
      .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['$firebaseArray']; //dependency injection.
  
    function WaitListController($firebaseArray) {
      var vm = this; //vm : ViewModel (this is object instance of controller constructor function)
      
      var fireParties = new Firebase('https://wac-waitandeat.firebaseio.com/parties');
      var fireTextMessages = new Firebase('https://wac-waitandeat.firebaseio.com/textMessages');
      
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
      vm.removeParty = removeParty;
      vm.sendTextMessage = sendTextMessage;
      vm.toggleDone = toggleDone;
      
      function addParty() {
        vm.parties.$add(vm.newParty);
        vm.newParty = new Party();
      }
      
      function removeParty(party) {
        vm.parties.$remove(party);
      }
      
      function sendTextMessage(party) {
        var newTextMessage = {
          phoneNumber: party.phone,
          size: party.size,
          name: party.name
        };
        
        fireTextMessages.push(newTextMessage);
        party.notified = true;
        vm.parties.$save(party);
      }
      
      function toggleDone(party) {
        vm.parties.$save(party);
      }
    }
    
})();