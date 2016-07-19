(function(){
  'use strict';
  
  angular
    .module('app.auth')
    .directive('cusAuthForm', cusAuthForm)
  
  function cusAuthForm(){
    return {
      templateUrl: 'app/auth/authForm.html',
      restrict: 'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        error: "=", // two-way binding object
        formTitle: "@", // string
        submitAction: "&" // function expression
      }
    }
  };
  
  function AuthFormController() {
    var vm = this;
    
     vm.user = {
        email: '',
        password: ''
     };
  }
  
})();