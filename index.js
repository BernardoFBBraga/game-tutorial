import Floater from './floater.js'
const DEBUG = true

function debug(s) {
    if (DEBUG) console.log(s)
}


window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');

    const floater = new Floater();
    function tick(){
        floater.draw(ctx)
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
    }, 17) // 16,666 for 60fps
})