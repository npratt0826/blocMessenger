(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);


    Room.all = rooms;

    Room.add = function (room) {
      rooms.$add(room);
      console.log(room, "room object")
    };

    return Room;
  }

  angular
    .module('blocMessenger')
    .factory('Room', ['$firebaseArray', Room]);
})();
