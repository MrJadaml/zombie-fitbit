//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var humanDist = $('.human-dist').text()
var zombieDist = $('.zombie-dist').text()
console.log(humanDist)
console.log(zombieDist)

var pow = function() {
  if humanDist > zombieDist
    console.log('w00t!')
  else
    console.log('xombie z00t!')
};

pow();
