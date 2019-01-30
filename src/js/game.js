let CANVAS = document.querySelector('#gameCanvas');
let CTX    = CANVAS.getContext('2d');
const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
CANVAS.width = CANVAS_WIDTH;
CANVAS.height = CANVAS_HEIGHT;
CTX.fillStyle = 'rgb(40,30,30)';
CTX.fillRect(10,10,50,50);

CTX.fillStyle = 'rgb(200, 0, 0)';
CTX.fillRect(10, 10, 50, 94);

CTX.fillStyle = 'rgba(0, 0, 200, 0.5)';
CTX.fillRect(30, 30, 50, 50);

// class Canvas {
//     constructor(){
//         this.canvas = document.getElementById('gameCanvas');
//         if(!this.checkCanvasSupport())
//             throw new Error('Canvas is not supported by the browser');
//         this.setCanvasSize(300,100);
//         this.ctx = this.canvas.getContext('2d');
//         this.testDraw();
//     }
//     setCanvasSize(width=window.innerWidth, height=window.innerHeight){
//         this.canvas.width = width;
//         this.canvas.height = height;
//     }
//     checkCanvasSupport(){
//         return this.canvas.getContext;
//     }
//     getCanvas(){
//         return this.canvas;
//     }
//     testDraw(){
//         this.ctx.fillStyle = 'rgb(40,30,80)';
//         this.ctx.fillRect = (10,10,50,50);
//         // this.draw();
//     }
//     draw(){
//         // this.canvas.draw();
//     }
// }

// const myCanvas = new Canvas();
// console.dir(myCanvas);