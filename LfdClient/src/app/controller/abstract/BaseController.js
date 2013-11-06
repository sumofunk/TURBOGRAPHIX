Ext.define('Lfd.controller.abstract.BaseController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: [
            {
                ref: 'viewport',
                selector: 'lfd-viewport'
            }
        ]
    },

    navigateTo: function() {
        var viewport = this.getViewport();

        viewport.setActiveItem.apply(viewport, arguments);
    }

});
