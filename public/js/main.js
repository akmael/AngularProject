var app = angular.module('ngTracker', []);


app.controller('TrackerController', function($scope){
   //place holder array 1 of 3
   $scope.jobList = ['Target',
                    'Walmart',
                    'capsule corp',
                    'umbrella corp',
                    'Valve'];

   /// adds to job list of yet to apply
   $scope.saveData = function(){
     var jobName = $scope.currentData;
     $scope.jobList.push(jobName);
     $scope.currentData="";
   }

  //remove from list
  $scope.deleteData = function($index){

    $scope.jobList.splice($index, 1)

  }


});
