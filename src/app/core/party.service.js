(function(){
  'use strict';
  
  angular
    .module('app.core')
    .factory('partyService', partyService);
  
  function partyService() {
    // return an object
    
    var service = {
      Party: Party
    };
    
    return service;
    
    function Party() {
      this.name = '';
      this.phone = '';
      this.size = '';
      this.done = false;
      this.notified = false;
    }
  }
})();