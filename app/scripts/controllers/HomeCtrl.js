(function() {
    function HomeCtrl() {
      this.heroTitle = "Bloc Messenger";
    }

    angular
        .module('blocMessenger')
        .controller('HomeCtrl', [HomeCtrl]);
})();
