(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

    Message.getByRoomId = function (roomId) {
      return $firebaseArray(ref.orderByChild(roomId).equalTo(roomId));
      console.log(roomId, "room id");
    };


    return Message;
  };

  angular
    .module('blocMessenger')
    .factory('Message', ['$firebaseArray', Message]);
})();
