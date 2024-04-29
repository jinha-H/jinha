var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
      result[prop] = target[prop];
    }
    return result;
  };
  
  var user = {
    name: 'Jinha',
    urls: {
      portfolio: 'https://github.com/jinha-H',
      blog: 'https://blog.naver.com/jinha9335',
      facebook: 'http://facebook.com/abc',
    },
  };
  var user2 = copyObject(user);
  user2.name = 'Hwang';
  
  console.log(user.name === user2.name); // false
  
  user.urls.portfolio = 'http://portfolio.com';
  console.log(user.urls.portfolio === user2.urls.portfolio); // true
  
  user2.urls.blog = '';
  console.log(user.urls.blog === user2.urls.blog); // true