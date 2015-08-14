App.info({
  name: 'BreatheFootball',
  author: 'Rajaselvan',
  description: 'An Android app built with Meteor',
  version: '0.0.1'
});

App.icons({
  'android_ldpi': 'public/img/ball.png',
  'android_mdpi': 'public/img/ball.png',
  'android_hdpi': 'public/img/ball.png',
  'android_xhdpi': 'public/img/ball.png'
});

App.launchScreens({
  
  // Android
  'android_ldpi_portrait': 'public/splash/ldpi-por.png',
  'android_ldpi_landscape': 'public/splash/ldpi-land.png',
  'android_mdpi_portrait': 'public/splash/mdpi-por.png',
  'android_mdpi_landscape': 'public/splash/mdpi-land.png',
  'android_hdpi_portrait': 'public/splash/hdpi-por.png',
  'android_hdpi_landscape': 'public/splash/hdpi-land.png'
});

App.accessRule('http://*');
App.accessRule('https://*');
