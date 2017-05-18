(function() {
    function ModalCtrl(Room, $uibModalInstance) {
      var modal = this;

      modal.cancel = function(){
        $uibModalInstance.dismiss();
      };

      modal.createRoom = function () {
        Room.add(modal.newRoom);
        $uibModalInstance.close();
        console.log(Room, "room array")
      };




    }

    angular
        .module('blocMessenger')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
