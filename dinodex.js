Router.map(function(){
	this.route('keypad', {
		path: '/'
	});
	this.route('dino1');
  this.route('dino2');
  this.route('dino3');
  this.route('dino4');
  this.route('dino5');
  this.route('dino6');
  this.route('dino7');
  this.route('dino8');
  this.route('dino9');
  this.route('dino0');
});
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.keypad.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.keypad.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      var id = e.currentTarget.id;
      if (id == "1") Router.go('dino1');
      else if (id == "2") Router.go('dino2');
      else if (id == "3") Router.go('dino3');
      else if (id == "4") Router.go('dino4');
      else if (id == "5") Router.go('dino5');
      else if (id == "6") Router.go('dino6');
      else if (id == "7") Router.go('dino7');
      else if (id == "8") Router.go('dino8');
      else if (id == "9") Router.go('dino9');
      else if (id == "0") Router.go('dino0');
    }
  });
  Template.dino1.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
Template.dino2.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
Template.dino3.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
Template.dino4.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.dino5.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.dino6.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.dino7.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.dino8.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.dino9.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
  Template.dino0.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
