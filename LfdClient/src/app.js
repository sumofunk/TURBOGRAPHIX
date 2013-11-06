Ext.require([
    'Ext.container.Viewport'
]);

Ext.application({
    name: 'Lfd',


    models: [],
    stores: [],

    controllers: [

         'abstract.BaseController',
//
//                'browser.LeaguesListController',
//                'browser.LeagueViewController',
//
//                'lcsStats.StatsViewController',
//
//                'leagues.CreateViewController',
//                'leagues.LeagueViewController',
//                'leagues.NewsFeedController',
//                'leagues.RankingsController',
//                'leagues.RosterViewController',
//                'leagues.ScheduleController',
//                'leagues.SettingsController',
//
//                'LoginViewController',
//
//                'lfd.StatsViewController',
//
        'MenuBar'

    ],

    views: [

//                'abstract.PlaceholderView',
//
//                'browser.LeaguesList',
//                'browser.LeagueView',
//
//                'lcsStats.StatsView',
//
//                'leagues.CreateView',
        'leagues.LeagueView',
//                'leagues.NewsFeed',
//                'leagues.Rankings',
//                'leagues.RosterView',
//                'leagues.Schedule',
//                'leagues.Settings',
//
//                'LoginView',
//
//                'lfd.StatsView',

        'MenuBar',

        'Viewport'

    ],


    launch: function() {
        var viewport = Ext.create('Lfd.view.Viewport');

        viewport.setActiveItem(Ext.create('Ext.button.Button'));
        return viewport;
    }
});