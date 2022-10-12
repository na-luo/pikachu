import string from './css.js'
import jQuery from './jquery.js'
window.jQuery =jQuery
const player = {
    id : undefined,
    time : 50,
    n : 1,
    ui:{
        demo:document.querySelector('#demo'),
        demo1:document.querySelector('#demo1')
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    init:()=>{
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo1.innerHTML = string.substring(0,player.n)
        player.bindEvent()
        player.play()
    },
    bindEvent:()=>{ 
        for(let key in player.events){
            if (player.events.hasOwnProperty(key)) {               
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    intervalFunc:()=>{
        player.n += 1
        if (player.n>string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substring(0,player.n)
        player.ui.demo1.innerHTML = string.substring(0,player.n)
        player.ui.demo.scrollTop = player.demo.scrollHeight
    },
    play:()=>{
        player.id = setInterval(player.intervalFunc,player.time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.time = 150
        player.play()
    },
    normal:()=>{
        player.pause()
        player.time = 50
        player.play()
    },
    fast:()=>{
        player.pause()
        player.time = 1
        player.play()
    }
}
player.init()
