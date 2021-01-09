function Background() {
    this.draw = function (canvas, ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export default Background