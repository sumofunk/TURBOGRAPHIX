Ext.define('Lfd.controller.MenuBar', {
    extend: 'Lfd.controller.abstract.BaseController',

    config: {
        id: 'MenuBarController',

        refs: [
            {
                ref: 'leaguesButton',
                selector: 'button[action=toLeagues]'
            },
            {
                ref: 'lcsStatsButton',
                selector: 'button[action=toLcsStats]'
            },
            {
                ref: 'lfdStatsButton',
                selector: 'button[action=toLfdStats]'
            },
            {
                ref: 'browseButton',
                selector: 'button[action=toBrowse]'
            }
        ]

    },

    init: function() {
        this.callParent(arguments);
        this.control({
            'button[action=toLeagues]': {
                click: this.toLeagues
            }
        })
    },

    toLeagues: function() {
        this.navigateTo(Ext.create('Lfd.view.leagues.LeagueView'), Ext.create('Lfd.view.leagues.RosterView'));
//        this.navigateTo(Ext.create('Ext.button.Button'))
    }
});
