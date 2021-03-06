/*global app */
var app =angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function() {
})

.controller('menuCtrl', function($scope, menu){
  $scope.menu = menu;
})

.controller('currentExerciseCtrl', function($scope, filterFilter, $stateParams, exercise){
  $scope.exercise = filterFilter(exercise,{'name':$stateParams.exerciseName});
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;
})

.controller('currentRoutineCtrl', function($scope, filterFilter, $location,  routines){
  $scope.currentRoutine = routines;
  $scope.routines = routines;
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;

  $scope.loadExercise = function(ex){
      $location.url('/app/current-exercise/' +ex);
  };
  //filterFilter(routines,{'active':true});
})

.controller('routinesCtrl', function($scope, routines){
  $scope.routines = routines;
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;
})

.controller('routinesDetailCtrl', function($scope, $stateParams, filterFilter, routines){
  $scope.routineId = $stateParams.routineId;
  $scope.routines = routines;
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;

  $scope.launchRoutine = function(id) {
    var selectedRoutine = filterFilter($scope.routines, id);
    selectedRoutine[0].active = true;
    console.log(filterFilter($scope.routines, id));
  };
});
