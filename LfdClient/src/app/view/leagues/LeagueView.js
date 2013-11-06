Ext.define('Lfd.view.leagues.LeagueView', {
    extend: 'Ext.container.Container',
    xtype: 'lfd-league-view',

    config: {

        items: [
            {
                xtype: 'dropdowntab'
            },
            {
                text: 'League Information'
            },
            {
                xtype: 'container',

                items: [
                    {
                        xtype: 'container',
                        width: 100,
                        layout: 'vbox',
                        style: {
                            display: 'inline-block'
                        },

                        items: [
                            {
                                xtype: 'button',
                                text: 'News'
                            },
                            {
                                xtype: 'button',
                                text: 'Schedule'
                            },
                            {
                                xtype: 'button',
                                text: 'Rosters'
                            },
                            {
                                xtype: 'button',
                                text: 'Rankings'
                            },
                            {
                                xtype: 'button',
                                text: 'Trades'
                            },
                            {
                                xtype: 'button',
                                text: 'Settings'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        id: 'league-view-container',
                        width: 500,
                        style: {
                            display: 'inline-block'
                        }
                    }
                ]
            }
        ]

    },

    setActiveItem: function() {
        var args = arguments,
            length = args.length;

        if (length < 1) {
            //TODO: Do anything?
        } else {
            var view = args[0],
                container = Lfd.app.getController('leagues.LeagueViewController').getLeagueContainer();
            container.removeAll();
            container.add(view);

            if(view.setActiveItem && args[1]) {
                view.setActiveItem.apply(view, Ext.Array.slice.call(null, args).slice(1));
            }
        }

    }

});
