(function() {
    function Auth($firebaseAuth) {

      var Auth = {};
      var user = firebase.auth().currentUser;

      Auth.authObj = $firebaseAuth();
      console.log(Auth.authObj);


      Auth.createUser = function(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.log(email, password);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      }).then(function(){
        firebase.auth().signInWithEmailAndPassword(email, password);
        // console.log(promiseObj.password,'promise password')
        // console.log(promiseObj.email,'email');
        // Auth.signIn(modal.email
        // console.log(promiseObj.email,'email');, modal.password);
      });
    }

      Auth.signIn = function(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(email, password);
        console.log("You are logged in:", firebase.auth.uid);
      });
    }

      Auth.signOut = function() {
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("You are signed out")

      }).catch(function(error) {
        // An error happened.
      });
    }

    return Auth;
  }

    angular
        .module('blocMessenger')
        .factory('Auth', ['$firebaseAuth', Auth]);
})();
