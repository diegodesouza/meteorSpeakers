Router.route('home', {
  path: '/',
  template: 'home'
});

Router.route('speakers', {
  path: '/speakers',
  template: 'speakers',
  onBeforeAction: function() {
    if (!Meteor.user()) {
      this.redirect('/');
    } else {
      this.next();
    }
  },
  waitOn: function(){
    return Meteor.subscribe('speakers');
  }
});

Router.configure({
  layoutTemplate: 'layout'
});
