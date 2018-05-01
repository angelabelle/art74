console.log('sketch is working');

var s = function(sketch) {
let rectangles =[];


  sketch.setup = function() {
    document.body.style['userSelect'] = 'none';
    sketch.createCanvas(document.body.clientWidth, document.body.clientHeight);

  }

  sketch.mouseMoved = function() {
    console.log(rectangles);
    rectangles.push ({posX: sketch.random(document.body.clientWidth-50), posY: sketch.random(document.body.clientHeight-50), color: sketch.random(255), speed: sketch.random(1,5), size: sketch.random(100), size2: sketch.random(300)})
    //this adds to the array with objects
  }

  sketch.draw = function() {

for (let i = rectangles.length - 1; i >= 0; i--) {
  sketch.fill(0);
  sketch.rect(rectangles[i].posX, rectangles[i].posY, rectangles[i].size2, rectangles[i].size);
    }
  }


};

var myp5 = new p5(s);
