console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("MyController", MyController);

function WelcomeController(){
  this.full_name = "Ryan Thomas";
  this.age = 24;
  this.city = "Bridgewater";
  this.state = "New Jersey";
  this.shout = function(string) {
    return string.toUpperCase() + "!";
  }
}

function MyController() {
  this.class_name = "WDI 34";
  this.enrolled_students = 11;
  this.start_date = "11/28/2016";
  this.end_date = "03/03/2017";
  this.daysRemaining = function() {
    var date1 = new Date(Date.now());
    var date2 = new Date(this.end_date);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
    return diffDays;
  }
}
