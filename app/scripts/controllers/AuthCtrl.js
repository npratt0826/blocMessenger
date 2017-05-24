(function() {
    function AuthCtrl($scope, $uibModalInstance, $cookies) {

      $scope.authObj = $firebaseAuth();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      });

      $scope.authObj.$signInWithCustomToken("<CUSTOM_AUTH_TOKEN>").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });

      $scope.getAuth = firebase.auth().signInWithCustomToken(token).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

    });
      }


      // var modal = this;
      //
      // modal.cancel = function(){
      //   $uibModalInstance.dismiss();
      // };
      //
      // modal.createRoom = function () {
      //   Room.add(modal.newRoom);
      //   $uibModalInstance.close();
      //   console.log(Room, "room array")
      // };
      //
      // modal.createUsername = function (){
      //   $cookies.put('blocMessengerCurrentUser', modal.username);
      //   $uibModalInstance.close();
      // }


    }

    angular
        .module('blocMessenger')
        .controller(' AuthCtrl', ['$uibModalInstance','$cookies', '$firebaseAuth', '$scope', AuthCtrl]);
})();
