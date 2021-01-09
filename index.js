window.addEventListener('DOMContentLoaded', () => {
    const DEBUG = true

    function debug(s) {
        if (DEBUG) console.log(s)
    }

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    const seed = [255, 0, 122]
    function tick() {
        seed.forEach((v, i, a) => {
            const factor = 10
            const delta = ((Math.random() * 2) - 1) * factor
            a[i] = Math.min(Math.abs(Math.round(v + delta)),255)
        })
       const [r,g,b] = seed
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(10, 10, 150, 100);
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
    }, 33)
})