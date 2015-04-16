Router.map(function(){
	this.route('keypad', {
		path: '/'
	});
	this.route('Triceratops');
  this.route('Stegosaurus');
  this.route('Apatosaurus');
  this.route('Archaeopteryx');
  this.route('Gojirasaurus');
  this.route('T_Rex');
  this.route('Yoshi');
  this.route('Thesaurus');
  this.route('Philosoraptor');
  this.route('Barney');
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
      if (id == "1") Router.go('Triceratops');
      else if (id == "2") Router.go('Stegosaurus');
      else if (id == "3") Router.go('Apatosaurus');
      else if (id == "4") Router.go('Archaeopteryx');
      else if (id == "5") Router.go('Gojirasaurus');
      else if (id == "6") Router.go('T_Rex');
      else if (id == "7") Router.go('Yoshi');
      else if (id == "8") Router.go('Thesaurus');
      else if (id == "9") Router.go('Philosoraptor');
      else if (id == "0") Router.go('Barney');
    }
  });
  Template.Triceratops.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
Template.Stegosaurus.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
Template.Apatosaurus.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
Template.Archaeopteryx.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.Gojirasaurus.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.T_Rex.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.Yoshi.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.Thesaurus.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
 Template.Philosoraptor.events({
    'click button': function (e) {
      // increment the counter when button is clicked
      Router.go('keypad');
    }
  });
  Template.Barney.events({
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
