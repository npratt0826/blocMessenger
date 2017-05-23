(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
      var modal = this;

      modal.cancel = function(){
        $uibModalInstance.dismiss();
      };

      modal.createRoom = function () {
        Room.add(modal.newRoom);
        $uibModalInstance.close();
        console.log(Room, "room array")
      };

      modal.createUsername = function (){
        $cookies.put('blocMessengerCurrentUser', modal.username);
        $uibModalInstance.close();
      }


    }

    angular
        .module('blocMessenger')
        .controller('ModalCtrl', ['Room', '$uibModalInstance','$cookies', ModalCtrl]);
})();
