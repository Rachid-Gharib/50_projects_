const sounds = ['elevation', 'electro', 'groovy', 'guitar']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').
        appendChild(btn)
})

function stopSound() {
    sounds.forEach(sound => {
        const sd = document.getElementById(sound)
        sd.pause()
        sd.currentTime = 0
    })
}