angular.module('app').service('mainSvc', function($http){
    this.getNoServer = function(){
        return $http.get('./data/noserver.json');
    }
    this.getPersonal = function(){
        return $http.get('./data/personal.json')
    }
    this.getGroup = function(){
        return $http.get('./data/group.json')
    }
})