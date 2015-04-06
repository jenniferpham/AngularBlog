/**
 * Created by Jennifer on 4/6/2015.
 */
'use strict';

angular.module('myApp.addPost', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/addPost', {
            templateUrl: 'addPost/addPost.html',
            controller: 'AddPostCtrl'
        });
    }])
    .controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $firebase){
        $scope.AddPost = function(){
            alert('why');
            var firebaseObj = new Firebase("https://angularblog-fb.firebaseio.com/");  //create firebase object using firebase url to push data to firebase, so put firebase inside controller
            var fb = $firebase(firebaseObj);
            var title = $scope.article.title;  //declare variable and set it to the user-input of title
            var post = $scope.article.post; //delcare variable and set it to user-input of post

            alert(title + post);
            fb.$push({  //call firebase API to save data to firebase
                title: title,
                post: post
            }).then (function(ref) {  //successful callback
                console.log(ref);
                alert("sucess");
            }, function(error){  //unsuccessful callback
                console.log("Error:", error);
                alert("failed");
            });


        }
    }])