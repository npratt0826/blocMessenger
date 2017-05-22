(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open ({
        templateUrl: '/templates/login.html',
        size: 'sm',
        controller: 'ModalCtrl as modal',
        

      });
    }
  }

  angular
    .module('blocMessenger')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();