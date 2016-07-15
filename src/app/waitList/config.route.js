(function(){
    'use strict';
    
    angular
        .module('app.waitList')
        .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/waitlist', {
          templateUrl: 'app/waitList/waitList.html',
          controller: 'WaitListController',
          controllerAs: 'vm', 
          resolve: {user: resolveUser } // this controller will only load when user is returned from promise
        });
    }
    
    resolveUser.$inject = ['authService'];
  
    function resolveUser(authService) {
      return authService.firebaseAuthObject.$requireSignIn();
    }
    
})();