window.addEventListener('DOMContentLoaded', () => {
    const DEBUG = true

    function debug(s) {
        if (DEBUG) console.log(s)
    }

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    const seed = [128, 128, 128]
    function tick() {
        seed.forEach((v, i, a) => {
            const factor = 30
            const delta = ((Math.random() * 2) - 1) * factor
            a[i] = Math.min(Math.abs(Math.round(v + delta)),255)
        })
       const [r,g,b] = seed
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(canvas.width/3,canvas.height/3, canvas.width/3, canvas.height/3);
    }

    let lastTick
    setInterval(() => {
        if (lastTick) {
            debug('canceling last tick')
            window.cancelAnimationFrame(lastTick)
        }
        lastTick = window.requestAnimationFrame(() => {
            tick()
            lastTick = undefined
        })
    }, 2000) // 1,666 for 60fps
})