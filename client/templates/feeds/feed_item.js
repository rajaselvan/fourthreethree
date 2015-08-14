Template.feedItem.helpers({
  
  domain: function() {
    var a = document.createElement('a');
    a.href = this.link;
    var hostname=a.hostname.replace("www.",'');
    if (hostname==="feedproxy.google.com"){
  			return "soccerlens.com";
     }
     else if(hostname==="telegraph.feedsportal.com"){
  			return "telegraph.co.uk";
     }
     else if(hostname==="marca.feedsportal.com"){
  			return "marca.com";
     }
     else{
  		return hostname;
     }
  }
});


