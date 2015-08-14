Meteor.publish('topnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return top_news(options);
});
Meteor.publish('transfernews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return transfer_news(options);
});
Meteor.publish('analysisnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return analysis_news(options);
});
Meteor.publish('arsenalnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return arsenal_news(options);
});
Meteor.publish('chelseanews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return chelsea_news(options);
});
Meteor.publish('liverpoolnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return liverpool_news(options);
});
Meteor.publish('citynews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return city_news(options);
});
Meteor.publish('unitednews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return united_news(options);
});
Meteor.publish('athleticonews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return athletico_news(options);
});
Meteor.publish('barcelonanews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return barcelona_news(options);
});
Meteor.publish('madridnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return madrid_news(options);
});
Meteor.publish('acmilannews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return acmilan_news(options);
});
Meteor.publish('asromanews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return asroma_news(options);
});
Meteor.publish('internews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return inter_news(options);
});
Meteor.publish('juventusnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return juventus_news(options);
});
Meteor.publish('bayernnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return bayern_news(options);
});
Meteor.publish('leverkusennews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return leverkusen_news(options);
});
Meteor.publish('dortmundnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return dortmund_news(options);
});
Meteor.publish('wolfsburgnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return wolfsburg_news(options);
});
Meteor.publish('uclnews', function(options) {
  check(options, {
  	limit: Number,
  	sort: Object
  });
  return ucl_news(options);
});
