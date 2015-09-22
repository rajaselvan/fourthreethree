Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  progressSpinner : false
});


TopFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {

    return { sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0}, limit: this.postsLimit()};
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('topnews', this.findOptions());
  },
  posts: function () {
    return top_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.topFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});



     

ArsenalFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {

    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('arsenalnews', this.findOptions());
  },
  posts: function () {
    return arsenal_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.arsenalFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

ChelseaFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('chelseanews', this.findOptions());
  },
  posts: function () {
    return chelsea_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.chelseaFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

LiverpoolFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } ,  fields: {'summary':0, 'description':0}, limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('liverpoolnews', this.findOptions());
  },
  posts: function () {
    return liverpool_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.liverpoolFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

CityFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('citynews', this.findOptions());
  },
  posts: function () {
	   return city_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.cityFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() == self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

UnitedFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('unitednews', this.findOptions());
  },
  posts: function () {
    return united_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.unitedFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});


AthleticoFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return { sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit()};
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('athleticonews', this.findOptions());
  },
  posts: function () {
    return athletico_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.athleticoFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

BarcelonaFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('barcelonanews', this.findOptions());
  },
  posts: function () {
    return barcelona_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.barcelonaFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

MadridFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('madridnews', this.findOptions());
  },
  posts: function () {
    return madrid_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.madridFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

AcMilanFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return { sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit()};
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('acmilannews', this.findOptions());
  },
  posts: function () {
    return acmilan_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.acmilanFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

AsRomaFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } ,  fields: {'summary':0, 'description':0}, limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('asromanews', this.findOptions());
  },
  posts: function () {
    return asroma_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.asromaFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

InterFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('internews', this.findOptions());
  },
  posts: function () {
    return inter_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.interFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

JuventusFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return { sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0}, limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('juventusnews', this.findOptions());
  },
  posts: function () {
    return juventus_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.juventusFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

BayernFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return { sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0}, limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('bayernnews', this.findOptions());
  },
  posts: function () {
    return bayern_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.bayernFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

LeverkusenFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('leverkusennews', this.findOptions());
  },
  posts: function () {
    return leverkusen_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.leverkusenFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

DortmundFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return { sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0}, limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('dortmundnews', this.findOptions());
  },
  posts: function () {
    return dortmund_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.dortmundFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});


WolfsburgFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('wolfsburgnews', this.findOptions());
  },
  posts: function () {
    return wolfsburg_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.wolfsburgFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

UclFeedsController = RouteController.extend({
  template: 'feedsList',
  increment: 9,
  postsLimit: function () {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function () {
    return {sort: { "pubdate": -1 } , fields: {'summary':0, 'description':0},  limit: this.postsLimit() };
  },
  subscriptions: function () {
    this.postsSub = Meteor.subscribe('uclnews', this.findOptions());
  },
  posts: function () {
    return ucl_news(this.findOptions());
  },
  nextPath: function () {
    return Router.routes.uclFeeds.path({ postsLimit: this.postsLimit() + this.increment });
  },
  fastRender: true,
  data: function () {
    var self = this;
    return {
      posts: self.posts(),
      ready: self.postsSub.ready,
      nextPath: function () {
        if (self.posts().count() === self.postsLimit())
          return self.nextPath();
      }
    };
  }
});

Router.route('/', {
  name: 'home',
  controller: TopFeedsController,
  fastRender: true

});


Router.route('/top/:postsLimit?', {
  name: 'topFeeds',
  controller: TopFeedsController
});



Router.route('/arsenal/:postsLimit?', {
  name: 'arsenalFeeds',
  controller: ArsenalFeedsController
});

Router.route('/chelsea/:postsLimit?', {
  name: 'chelseaFeeds',
  controller: ChelseaFeedsController
});

Router.route('/liverpool/:postsLimit?', {
  name: 'liverpoolFeeds',
  controller: LiverpoolFeedsController
});

Router.route('/city/:postsLimit?', {
  name: 'cityFeeds',
  controller: CityFeedsController
});

Router.route('/united/:postsLimit?', {
  name: 'unitedFeeds',
  controller: UnitedFeedsController
});

Router.route('/athletico/:postsLimit?', {
  name: 'athleticoFeeds',
  controller: AthleticoFeedsController
});

Router.route('/barcelona/:postsLimit?', {
  name: 'barcelonaFeeds',
  controller: BarcelonaFeedsController
});

Router.route('/madrid/:postsLimit?', {
  name: 'madridFeeds',
  controller: MadridFeedsController
});

Router.route('/acmilan/:postsLimit?', {
  name: 'acmilanFeeds',
  controller: AcMilanFeedsController
});

Router.route('/asroma/:postsLimit?', {
  name: 'asromaFeeds',
  controller: AsRomaFeedsController
});


Router.route('/inter/:postsLimit?', {
  name: 'interFeeds',
  controller: InterFeedsController
});

Router.route('/juventus/:postsLimit?', {
  name: 'juventusFeeds',
  controller: JuventusFeedsController
});


Router.route('/bayern/:postsLimit?', {
  name: 'bayernFeeds',
  controller: BayernFeedsController
});

Router.route('/leverkusen/:postsLimit?', {
  name: 'leverkusenFeeds',
  controller: LeverkusenFeedsController
});

Router.route('/dortmund/:postsLimit?', {
  name: 'dortmundFeeds',
  controller: DortmundFeedsController
});

Router.route('/wolfsburg/:postsLimit?', {
  name: 'wolfsburgFeeds',
  controller: WolfsburgFeedsController
});

Router.route('/ucl/:postsLimit?', {
  name: 'uclFeeds',
  controller: UclFeedsController
});

