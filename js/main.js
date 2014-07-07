var buttonRain = document.getElementById('btnRain');
var cube1 = document.getElementById('cube1');

buttonRain.onclick = function() {
  var cubes = document.getElementsByClassName('cube');
  for(var cubeIndex in cubes){
    cubes[cubeIndex].classList.add('drop');
  }

};

// Number
var a = 1;

// String
var b = 'shenxiaoyang';

// Object(JSON)
var c = {
  name: 'shenxiaoyang',
  gender: 'female',
  actingCute: true,
  age: 1,
  pet: {
    species: 'dog'
  }
};

// Set value
c.name = 'xiaoyang';
c['name'] = 'shenjiayang';



// Array
var d = [1, 2, 3, 4, 5];
var e = ['a', 'b', 3, 4, 5, {

}];


// Function
var f = function(param1, param2) {
  //alert(param1 + param2);
};

f(1, 2);
