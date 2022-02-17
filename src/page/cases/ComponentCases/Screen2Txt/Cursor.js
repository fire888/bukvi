const ctx = canvas.getContext("2d");
const bg_ctx = bg.getContext("2d"); // background canvas
let cw = (canvas.width = window.innerWidth + 50),
    cx = cw / 2;
let ch = (canvas.height = window.innerHeight + 50),
    cy = ch / 2;
bg.width = cw;
bg.height = ch;
let iw, ih, IW, IH;



let notMoving = true; // boolean to detect if the mouse is moving
let filter_canvas = 0; // used to style the #canvas

let history_max_length = 90;
var r = 70; // radius of the blur eraser
// the initial mouse posirion
let m = {
    x: -r,
    y: -r
};
let easing = 1 / 10;

class Ball {
    constructor(x, y) {
        this.r = r;
        this.x = x;
        this.y = y;
        this.v = {};

        this.history_max_length = history_max_length;

        this.history = [];
    }

    draw(fillStyle) {
        ctx.save();
        ctx.fillStyle = fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

        this.history.map((h, i) => {
            let alp = i / this.history_max_length;
            let fillStyle = `rgba(255,255,255,${alp})`;
            h.r = this.r;
            h.draw(fillStyle);
        });
    }

    update() {
        this.v.x = (m.x - this.x) * easing;
        this.v.y = (m.y - this.y) * easing;

        if (Math.abs(m.x - this.x) < 1) {
            this.x = m.x;
        }

        this.x += this.v.x;
        this.y += this.v.y;
    }
}

let ball = new Ball(-r, -r);

let img = new Image();
img.src = "http://i.imgur.com/JbTmhkW.jpg";
//img.src =  maori;

img.onload = function() {
    iw = img.width;
    ih = img.height;
    canvasCover(bg_ctx);
    canvasCover(ctx);
};

// a function to make sure the image always covers the entire canvas
function canvasCover(ctx) {
    let c_ratio = cw / ch;
    let i_ratio = iw / ih;

    if (c_ratio == i_ratio) {
        ctx.drawImage(img, 0, 0, cw, ch);
    }

    if (c_ratio > i_ratio) {
        let ratio = cw / iw;
        IW = cw;
        IH = ih * ratio;
        let offsetY = -(IH - ch) / 2; // to center the image
        ctx.drawImage(img, 0, offsetY, IW, IH);
    }

    if (c_ratio < i_ratio) {
        let ratio = ch / ih;
        IH = ch;
        IW = iw * ratio;
        let offsetX = -(IW - cw) / 2;
        ctx.drawImage(img, offsetX, 0, IW, IH);
    }
}

function Animate() {
    rid = window.requestAnimationFrame(Animate);
    ctx.clearRect(0, 0, cw, ch);

    // ball's history for the trail
    ball.history.push(new Ball(ball.x, ball.y));
    if (ball.history.length > ball.history_max_length) {
        ball.history.splice(0, 1);
    }

    // if the mouse is not moving
    if (notMoving && filter_canvas < 7 && ball.r > 1) {
        filter_canvas += 7 / r; // blur the canvas
        ball.r--; //and shrink the ball
        // set the style
        canvas.style.filter = `blur(${filter_canvas}px) brightness(0.8)`;

        // if the mouse is not moving
    } else if (!notMoving && filter_canvas > 0 && ball.r < r) {
        filter_canvas -= 7 / r; //unblur the canvas
        ball.r++; // and grow the ball
        // set the style
        canvas.style.filter = `blur(${filter_canvas}px) brightness(0.8)`;
    }

    ball.update();
    ctx.save();
    ball.draw("white");
    ctx.globalCompositeOperation = "source-atop";
    canvasCover(ctx);
    ctx.restore();
}

Animate();

let timeout;
canvas.addEventListener(
    "mousemove",
    function(evt) {
        // if mouse not moving
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            notMoving = true;
        }, 600);
        // but if it moves:
        m = oMousePos(canvas, evt);
        notMoving = false;
    },
    false
);

canvas.addEventListener(
    "mouseenter",
    function(evt) {
        notMoving = false;
    },
    false
);



function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    };
}

function Init() {
    cw = canvas.width = window.innerWidth + 50;
    ch = canvas.height = window.innerHeight + 50;
    bg.width = cw;
    bg.height = ch;
    canvasCover(bg_ctx);
    canvasCover(ctx);
}

window.setTimeout(function() {
    Init();
    window.addEventListener("resize", Init, false);
}, 15);

function map(n, a, b, _a, _b) {
    let d = b - a;
    let _d = _b - _a;
    let u = _d / d;
    return _a + n * u;
}

function constrain(n, low, high) {
    return Math.max(Math.min(n, high), low);
}
