(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      // home.heroTitle = "Bloc Messenger";

      var home = this;
      home.rooms = Room.all;
      home.currentRoom = null;


      home.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/modal.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        });
      }

      home.setCurrentRoom = function(room){
        home.currentRoom = room;
        home.messages = Message.getByRoomId(home.currentRoom.$id);

      };



    }

    angular
        .module('blocMessenger')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
