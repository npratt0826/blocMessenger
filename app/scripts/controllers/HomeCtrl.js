(function() {
    function HomeCtrl(Room, $uibModal) {
      this.heroTitle = "Bloc Messenger";

      var home = this;
      home.rooms = Room.all

      home.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/modal.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        });
      }




    }

    angular
        .module('blocMessenger')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
