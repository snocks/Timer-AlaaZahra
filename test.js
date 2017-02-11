var test = QUnit.test;
test("Function `program` should be exist", function(t) {
  t.ok(window.program,'it exists');
});

test("program function should return object",function(t){
	var a = program();
	t.equal(Object.prototype.toString.call(a) ,"[object Object]",'It return object');
});

test("'startTimer()' method should be exist",function(t){
	var a = program();
	t.ok(a.hasOwnProperty('startTimer'),true,'It exists')
});

// test("If user insert invalid duration (string or negativ number ) method should return Warning text",function(t){
// 	var a = program("-1").startTimer();
// 	console.log("R",a);
// 	var b = "Enter valid number";
// 	t.equal(a == b , true,'Pass the validation');
// });

test("'reset()' method should be exist",function(t){
	var a = program();
	t.ok(a.hasOwnProperty('reset'),true,'It exists')
});


test("'paus()' method should be exist",function(t){
	var a = program();
	t.ok(a.hasOwnProperty('paus'),true,'It exists')
});

QUnit.test( "'startTimer' & 'paus' methods  work well", function( t ) {	
  //duration = 60;
  var done1 = t.async();
  var done2 = t.async();
  var done3 = t.async();
  var done4 = t.async();
  program().startTimer();
  setTimeout(program().paus,5000);
  setTimeout(program().paus,9000);
  setTimeout(program().reset, 15000);
  setTimeout(function() {
    t.equal( (seconds == 58 ),true,'Timer counts correctly'  );
    done1();
  }, 3000 );

  setTimeout(function() {
    t.equal( (seconds == 56 ),true,'First run of paus method'  );
    done2();
  }, 7000 );

setTimeout(function() {
    t.equal( (seconds < 56 ),true,'Second run of paus method'  );
    done3();
  }, 11000 );

  setTimeout(function() {
    t.equal( (minutes == 0 && seconds ==0 ),true,'method reset work well'  );
    done4();
  }, 18000 );


});










