(function() {
    function RoomCtrl($scope, Room) {
      $scope.rooms = Room;

      return $scope.rooms;
    }

    angular
        .module('blocMessenger')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();
