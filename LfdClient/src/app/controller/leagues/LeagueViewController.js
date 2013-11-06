Ext.define('Lfd.controller.leagues.LeagueViewController', {
    extend: 'Ext.app.Controller',

    config: {
        id: 'LeagueViewController',

        refs: [
            {
                ref: 'dropDownMenu',
                selector: '#ddt'
            },
            {
                ref: 'openLeaguesButton',
                selector: 'button[action=openMenu]'
            },
            {
                ref: 'closeLeaguesButton',
                selector: 'button[action=closeMenu]'
            },
            {
                ref: 'leagueContainer',
                selector: '#league-view-container'
            }
        ]

    },

    init: function() {
        this.callParent(arguments);
        this.control({
            'button[action=openMenu]': {
                click: function() {
                    this.getDropDownMenu().open();
                }
            },
            'button[action=closeMenu]': {
                click: function() {
                    this.getDropDownMenu().close();
                }
            }
        });
    }
})
