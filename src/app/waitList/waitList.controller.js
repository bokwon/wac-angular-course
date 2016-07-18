(function(){
  'use strict';
    
    angular
      .module('app.waitList')
      .controller('WaitListController', WaitListController);
    
    WaitListController.$inject = ['textMessageService', 'partyService', 'user']; //dependency injection.
  
    function WaitListController(textMessageService, partyService, user) {
      var vm = this; //vm : ViewModel (this is object instance of controller constructor function)
      
      vm.parties = partyService.getPartiesByUser(user.uid);
    }
    
})();