var Marionette = require('backbone.marionette'),
    ContactView = require('./views/contact'),
    AboutView = require('./views/about');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
    },

    home: function() {
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        window.App.router.navigate('#');
    },
    about: function() {
        App.core.vent.trigger('app:log', 'Controller: "About" route hit.');
        var view = new AboutView();
        this.renderView(view);
        window.App.router.navigate('about');
    },
    contact: function() {
        App.core.vent.trigger('app:log', 'Controller: "Contact" route hit.');
        var view = new ContactView();
        this.renderView(view);
        window.App.router.navigate('contact');
    },
    renderView: function(view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#veronica-node-app').html(view.render().el);
    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    }
});