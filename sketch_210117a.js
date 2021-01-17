// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(17, 126, 139);
  c2 = color(137, 255, 197);
  c3 = color(196,255,240);
}


function draw() {
  setGradient( 0, 0, width, height * 0.5, c1, c2, c3, Y_AXIS);
  setGradient( 0, height * 0.5, width, height * 0.5, c1, c2, c3, X_AXIS);

  
  scale(1/3, 1);
  setTriangle(0,0,height, c3,c2,c1);
  setTriangle(width,0,height, c3,c2,c1);
  setTriangle(width*2,0,height, c3,c2,c1);
  
  save("20210117.png");
  noLoop();
}


function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - (h/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - (h/2) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      //stroke(c);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - (h/2)){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      } 
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, (x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2) , x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if(i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + w);
      }else{
        stroke(p);
        line(i, y, i, y + w);
      }
      
    }
  }
}

function setTriangle(x, y, h, c1, c2, c3 ){
  d = h;
  push();
  //translate( d * 0.2, d*0.2);
  for (let i = y; i <= y + d; i++) {
    let inter = map(i, y, (y + d) - (d/2), 0, 1);
    let c = lerpColor(c2, c1, inter);
    
    let inter02 = map(i, (y + d) - (d/2) ,  y + d , 0, 1);
    let p = lerpColor(c1, c3, inter02);
    
    line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);    
    if ( i <= (y + d) - (d/2)){
      stroke(c);
      line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
    }else{
      stroke(p);
      line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
    }
  }
  pop();
}
