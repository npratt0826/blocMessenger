(function() {
    function HomeCtrl(Room) {
      this.heroTitle = "Bloc Messenger";

      this.rooms = Room.all


    }

    angular
        .module('blocMessenger')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
