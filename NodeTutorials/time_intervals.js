//console.log('hey ningas');

//setTimeout(function(){
//  console.log('3 seconds have passed');
//}, 3000);

var time = 0;
//setInterval(function(){
//    time +=2;
//    console.log(time + 'seconds have passed');

//}, 2000);

var timer = setInterval(function(){

  time +=2;
  console.log(time + ' seconds have passed');
  if (time > 5){

      clearInterval(timer);
  }
});
