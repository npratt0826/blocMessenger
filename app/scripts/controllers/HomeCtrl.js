(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies, Auth) {

      var home = this;
      home.rooms = Room.all;
      home.currentRoom = null;
      home.currentUser = $cookies.get('blocMessengerCurrentUser');

      home.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/modal.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        });
      };

      home.login = function() {
        $uibModal.open({
          templateUrl: '/templates/signin.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        });
      };

      home.signOut = function () {
        Auth.signOut(home.currentUser);
        home.currentUser = null;
        console.log("you are signed out");

      }



      home.setCurrentRoom = function(room){
        home.currentRoom = room;
        home.messages = Message.getByRoomId(home.currentRoom.$id);

      };

      home.sendMessage = function () {
        home.newMessage.roomId = home.currentRoom.$id;
        home.newMessage.username = home.currentUser;
        Message.send(home.newMessage);
        home.newMessage.content = null;
      };


    }

    angular
        .module('blocMessenger')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal','$cookies', 'Auth', HomeCtrl]);
})();
