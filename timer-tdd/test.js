var test = QUnit.test;
test("Function `program` should be exist", function(t) {
  t.ok(window.program,'it exists');
});

test("program function should return object",function(t){
	var a = program();
	t.equal(Object.prototype.toString.call(a) ,"[object Object]",'It return object');
});

test("'start()' method should be exist",function(t){
	var a = program();
	t.ok(a.hasOwnProperty('startTimer'),true,'It exists')
});

test("If user insert invalid duration (string or negativ number ) method should return Warning text",function(t){
	var a = program("-1").startTimer();
	console.log("R",a);
	var b = "Enter valid number";
	t.equal(a == b , true,'Pass the validation');
});

