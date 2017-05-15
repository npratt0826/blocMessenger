(function() {
    function HomeCtrl(Room) {
      var home = this;
      home.rooms = Room.all
    }

    angular
        .module('blocMessenger')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
