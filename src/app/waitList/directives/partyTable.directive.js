(function(){
  'use strict';
  
  angular
    .module('app.waitList')
    .directive('cusPartyTable', cusPartyTable);
  
  function cusPartyTable() {
    return {
      templateUrl: 'app/waitList/directives/partyTable.html',
      restrict: 'E',
      controller: PartyTableController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        parties: "="
      }
    }
  }
  
  PartyTableController.$inject = ['partyService'];
  
  function PartyTableController(partyService) {
    var vm = this;
    
    vm.removeParty = removeParty;
    vm.sendTextMessage = sendTextMessage;
    vm.toggleDone = toggleDone;
    
    function removeParty(party) {
      vm.parties.$remove(party);
    }
      
    function sendTextMessage(party) {
      textMessageService.sendTextMessage(party, vm.parties);
    }
      
    function toggleDone(party) {
      vm.parties.$save(party);
    }
  }
  
})();