angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$stateProvider
    .state('home',{
        url: '/',
        templateUrl:'./views/home.html',
        controller: 'mainCtrl',
    })
    .state('noserver',{
        url: '/noserver',
        templateUrl:'./views/noserver.html',
        controller: 'mainCtrl',
    })
    .state('personal', {
        url:'/personal',
        templateUrl: './views/personal.html',
        controller: 'mainCtrl',
    })
    .state('group', {
        url:'/group',
        templateUrl: './views/group.html',
        controller: 'mainCtrl',
    })

$urlRouterProvider.otherwise('/');

});