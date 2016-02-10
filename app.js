(function(){
  var app = angular.module('dStore', []);

  app.controller('StoreController', function() {
    this.details = det;
  });
    app.controller('StoreController2', function() {
    this.details = det2;
  });
  
    app.controller("contactController", function(){

    this.review = {};

    this.addReview = function(contact){
      contact.reviews.push(this.review);
      this.review = {};
    };
  });
  
    app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
  
  
var det =[{
heading:'AngularJS Tutorial',
author: "Jakob Jenkov",
image: "images/6.jpg",
url:"http://tutorials.jenkov.com/angularjs/index.html"},
{ heading: 'Learn AngularJS With These 5 Practical Examples',
author: "JMartin Angelov",
image: "images/angularjs.png",
url:"http://tutorialzine.com/2013/08/learn-angularjs-5-examples/"},
{heading:'AngularJS CRUD application demo',
author: "angular-app",
image: "images/angularjs.png",
url: "https://github.com/angular-app/angular-app"},
{heading:'AngularJS Tutorial - Building a Web App in 5 minutes',
author: "Nick Kaye",
image: "images/4.jpeg",
url:"https://www.airpair.com/angularjs/building-angularjs-app-tutorial"},
{heading:'Angularjs -- Workshop',
author: "Santiago Esteva",
image: "images/angularjs.png",
url:"http://ng-learn.org/tags/workshop.html"},
{heading:'AngularJS in 20ish Minutes',
author: "Dan Wahlin",
image: "images/angularjs.png",
url:"https://www.youtube.com/watch?v=tnXO-i7944M"},
{heading:'Introduction to AngularJS',
author: "Microsoft Virtual Academy",
image: "images/logo_mva.png",
url:"http://www.microsoftvirtualacademy.com/training-courses/introduction-to-angularjs"},
{heading:'A Step-by-Step Guide to Your First AngularJS App',
author: "Raoni Boaventura",
image: "images/5.jpg",
url:"http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app"}
];
var det2 =[{
heading:'Food',
detail: "These are designs only … it’s a rough idea of what it should look like. You have full liberty to mess with this. Include any navigation you like."},
{ heading: 'Drinks',
detail: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem."},
{heading:'Cars',
detail: "These are designs only … it’s a rough idea of what it should look like. You have full liberty to mess with this. Include any navigation you like."}

];
})();