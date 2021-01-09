function Floater() {
    this.seed = [canvas.width / 2, canvas.height / 2]
    this.draw = function (ctx) {
        this.seed.forEach((v, i, a) => {
            const factor = 5
            const delta = ((Math.random() * 2) - 1) * factor
            a[i] = Math.min(Math.abs(Math.round(v + delta)), i === 0 ? canvas.width : canvas.height)
        })
        const [x, y] = this.seed
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

export default Floater