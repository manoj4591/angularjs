var steveApp = {};
steveApp.person="steve";

steveApp.logperson = function(){
	console.log(steveApp.person);
}
var myApp = angular.module("myApp",[]);

myApp.controller('mainController',function(){

});


<!DOCTYPE html>
<html ng-app="myApp">
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script type="text/javascript" src="app.js"></script>
  <script type="text/javascript" src="utility.js"></script>
  <link rel="stylesheet" type="text/css" href="custom.css">
<body>
<div  ng-controller="mainController">
<h4>hello manoj</h4>
</div>
</body>
</html>