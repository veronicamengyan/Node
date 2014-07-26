var Marionette = require('backbone.marionette');

var itemView = Marionette.ItemView.extend({
    template: require('../../templates/about.hbs'),
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    }
});
