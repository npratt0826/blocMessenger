(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocMessengerCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open ({
        templateUrl: '/templates/signin.html',
        size: 'sm',
        controller: 'ModalCtrl as modal',


      });
    }
  }

  angular
    .module('blocMessenger')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
