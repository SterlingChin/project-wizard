angular.module('app').controller('mainCtrl', function ($scope, mainSvc) {
  $scope.home = 'home controller is working';
  $scope.noserver = mainSvc.getNoServer()
  $scope.personal = mainSvc.getPersonal()
  $scope.group = mainSvc.getGroup()

  // *********************************
  // *          typewriter           *
  // *********************************

  var app = document.getElementById('homeType');

  var typewriter = new Typewriter(app, {
    loop: true
  });

  typewriter.typeString('No Server')
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(1500)
    .typeString('Personal')
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(1500)
    .typeString('Group')
    .pauseFor(3000)
    .deleteAll()
    .pauseFor(1500)
    .start();
})
