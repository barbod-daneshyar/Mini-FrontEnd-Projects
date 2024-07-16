const controls = document.querySelector('.controls')
const video = document.querySelector('video')
const volume_show = document.querySelector('.volume-show')
const volume_btn = document.querySelector('.btn-valume>i')

function show_controls() {
    controls.style.opacity = 1
}
function hide_controls() {
    controls.style.opacity = 0
}
function play_video() {
    const play_btn = document.querySelector('.btn-play>i')
    if (video.paused) {
        video.play()
        play_btn.classList.add('fa-pause')
        play_btn.classList.remove('fa-play')
    }
    else {
        video.pause()
        play_btn.classList.add('fa-play')
        play_btn.classList.remove('fa-pause')
    }
}
function seekButton(n) {
    video.currentTime += 5 * n
}
function muteSound() {
    video.muteSound()
}

video.addEventListener("timeupdate", () => {
    let percent = video.currentTime / video.duration * 100 //%
    document.querySelector('.progress').style.width = `${percent}%`
})

document.onkeydown = (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (video.volume < 1) {
                video.volume = (video.volume + 0.1).toFixed(1)
                volume_show.textContent = `${video.volume * 100}%`
                if (volume_btn.classList.contains('fa-phone-volume')) {
                    volume_btn.classList.remove('fa-phone-volume')
                    volume_btn.classList.add('fa-music')
                }
            }
            if (video.muted) {
                video.muted = false
                volume_btn.classList.remove('fa-phone-volume')
                volume_btn.classList.add('fa-music')
            }
            break
        case 'ArrowDown':
            if (video.volume >= 0) {
                video.volume = (video.volume - 0.1).toFixed(1)
                volume_show.textContent = `${video.volume * 100}%`
                if (video.volume == 0 && volume_btn.classList.contains('fa-music')) {
                    volume_btn.classList.add('fa-phone-volume')
                    volume_btn.classList.remove('fa-music')
                }

            }
            break
        case 'ArrowRight':
            seekButton(1)
            break
        case 'ArrowLeft':
            seekButton(-1)
            break
        case "Enter":
            full_screen()
            break;
        case ' ':
            play_video()
            break
    }
}

function full_screen() {
    if (video.requestFullscreen) {
        video.requestFullscreen()
    }
    if (document.exitFullscreen) {
        document.exitFullscreen()
    }
}

function toggle_mute() {
    if (video.muted) {
        video.muted = false
        volume_btn.classList.remove('fa-phone-volume')
        volume_btn.classList.add('fa-music')
    } else {
        video.muted = true
        volume_btn.classList.add('fa-phone-volume')
        volume_btn.classList.remove('fa-music')
    }
}