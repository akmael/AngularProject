var app = angular.module('ngTracker', ['ngAnimate']);


app.controller('TrackerController', function($scope){
   // the 3 arrays
   $scope.jobList = [];

   $scope.haterList = [];
   $scope.loversList= [];

//show or hide things
   $scope.show = true;
   $scope.bool = false;


   /// adds to job list of yet to apply, will react if string is empty
   $scope.saveData = function(){
     var jobName = $scope.currentData

        console.log(jobName)

      if(jobName == null || jobName == ""){
          $scope.message = "This is why you don't trust the user..."

       }
       else{
         $scope.jobList.push(jobName);
         $scope.currentData="";
         $scope.bool = true;

       }
   }

  //remove from list
  $scope.deleteData = function($index){

    $scope.jobList.splice($index, 1)

  }

  //add to haters list
  $scope.addHaters = function($index){

    var moveItem = $scope.jobList.splice($index, 1)
    moveItem = String(moveItem)
    $scope.haterList.push(moveItem)

    if ($scope.haterList.length === 5){

           $scope.show= false;

      }

  }
  //reveal list
  $scope.reveal= function(){

    $scope.show = true;
  }

  //remove from haters list
  $scope.deleteHaters = function($index){
    $scope.haterList.splice($index, 1)


  }

  //add to lovers list
  $scope.addLovers = function($index){

    var moveItem = $scope.jobList.splice($index, 1)
    moveItem = String(moveItem)
    $scope.loversList.push(moveItem)


  }
  //remove lovers
  $scope.deleteLovers = function($index){
    $scope.loversList.splice($index, 1)
  }

});
