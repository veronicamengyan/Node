var Marionette = require('backbone.marionette');

module.exports = Router = Marionette.AppRouter.extend({
    appRoutes: {
        '' : 'home',
        'about' : 'about',
        'contact' : 'contact'
    }
});