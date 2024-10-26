window.onload = (event) => {

    const videos = document.getElementsByTagName("video")
    const videos_arr = Array.from(videos)
}

function ReproduzirVideo(element)
{
    console.log(element)
    element.play()
}

function PausarVideo(element)
{
    element.pause()
    const v = element.currentSrc
    element.src = ''
    element.src = v
}