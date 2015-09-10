Meteor.startup(function () {



    feedReader();



});

function feedReader() {


    var collections = {
        feeds: Feeds,
        feed_entries: Feed_Entries
    };

    Feed.collections(collections);

    var top_feed = {
        _id: '1',
        category: 'Top News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=7dcf813bd5ffbb0f0f5b4d0da63f0336&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(top_feed);

    var transfer_feed = {
        _id: '2',
        category: 'Transfer News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=0fb802b53e78e0c3266f4059705202cf&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(transfer_feed);


    var analysis_feed = {
        _id: '3',
        category: 'Analysis News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=b1ac5a6a1a4be3b7d039725cf11214d4&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(analysis_feed);

    var arsenal_feed = {
        _id: '4',
        category: 'Arsenal News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=38c53b5c704fc97cf359067c98435461&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(arsenal_feed);


    var chelsea_feed = {
        _id: '5',
        category: 'Chelsea News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=d1c88f38cb93adc398ec43828bd08052&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(chelsea_feed);


    var liverpool_feed = {
        _id: '6',
        category: 'Liverpool News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=8de890ee1fb2590494f077f11bd6cecb&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(liverpool_feed);


    var city_feed = {
        _id: '7',
        category: 'City News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=4bd9648179c58948e0f79513272466a7&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(city_feed);


    var united_feed = {
        _id: '8',
        category: 'United News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=35da14f530e6a589501e04ee4937586f&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(united_feed);

    var athletico_feed = {
        _id: '9',
        category: 'Athletico News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=13f69c9a1bede7ceed4b42037fbc3ffc&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(athletico_feed);

    var barcelona_feed = {
        _id: '10',
        category: 'Barcelona News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=f9330a845879937b99971ae06eb1a887&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(barcelona_feed);

    var madrid_feed = {
        _id: '11',
        category: 'Madrid News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=387aeb5688c3f7fe699f6ecff9433650&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(madrid_feed);

    var acmilan_feed = {
        _id: '12',
        category: 'AC Milan News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=781bd0b45df64276bf1eee163b2f0666&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(acmilan_feed);


    var asroma_feed = {
        _id: '13',
        category: 'AS Roma News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=e0d9d14db5df3e6e3d4dd4ea011e884a&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(asroma_feed);


    var inter_feed = {
        _id: '14',
        category: 'Inter News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=8564890690ea88506aa4e99194cc31fe&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(inter_feed);

    var juventus_feed = {
        _id: '15',
        category: 'Juventus News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=864ed0460b0e15de1f60ce385100bdee&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(juventus_feed);


    var bayern_feed = {
        _id: '16',
        category: 'Bayern News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=e31bdfd888c6719ecf348a6aff967a65&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(bayern_feed);

    var leverkusen_feed = {
        _id: '17',
        category: 'Leverkusen News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=ada4a3dff732d5b6b4df058b226f0230&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(leverkusen_feed);

    var dortmund_feed = {
        _id: '18',
        category: 'Dortmund News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=0c021e82dc0a48a8f04daeb2b113e1ce&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(dortmund_feed);

    var wolfsburg_feed = {
        _id: '19',
        category: 'Wolfsburg News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=f3b9786fd6303e9a314dfe9a0fde72b8&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(wolfsburg_feed);

    var ucl_feed = {
        _id: '20',
        category: 'UCL News',
        link: 'http://pipes.yahoo.com/pipes/pipe.run?_id=6c1848dbc51ae469637594881b7a8372&_render=rss',
        refresh_interval: 5000
    };

    Feed.createRssFeed(ucl_feed);



    Feed.read();

}
