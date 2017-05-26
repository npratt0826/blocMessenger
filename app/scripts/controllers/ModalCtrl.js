(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies, Auth) {
      var modal = this;

      modal.cancel = function(){
        $uibModalInstance.dismiss();
      };

      modal.createRoom = function () {
        Room.add(modal.newRoom);
        $uibModalInstance.close();
      };

      // modal.createUsername = function (){
      //   $cookies.put('blocMessengerCurrentUser', modal.username);
      //   $uibModalInstance.close();
      // };

      modal.createUser = function () {
        Auth.createUser(modal.email, modal.password);
        $cookies.put('blocMessengerCurrentUser', modal.email);
        $uibModalInstance.close();
        console.log("create user works")
        $uibModalInstance.close();
      };

      modal.signIn = function() {
        Auth.signIn(modal.email, modal.password);
        $cookies.put('blocMessengerCurrentUser', modal.email);
        $uibModalInstance.close();
        console.log(modal.email, "sign in email")


      };

      modal.signOut = function () {
        Auth.signOut();
        alert("you are signed out");

      };


    }

    angular
        .module('blocMessenger')
        .controller('ModalCtrl', ['Room', '$uibModalInstance','$cookies', 'Auth', ModalCtrl]);
})();
