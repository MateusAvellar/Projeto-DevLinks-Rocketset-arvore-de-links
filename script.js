function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

  /*
    if(html.classList.contains(('light'))) {
        html.classList.remove (('light'))
    } else{
        html.classList.add(('light'))
    }

    */


// pegar a tag
const img = document.querySelector("#profile img")

if(html.classList.contains('light')){
img.setAttribute('src', './Assets/avatar--light.png')
}else {
img.setAttribute('src', './Assets/avatar.png')
}


const alt = document.querySelector("#profile img")
if(html.classList.contains('light')){
 alt.setAttribute('alt', 'Atleta segurando troféu no pódio')   
} else {
    alt.setAttribute('alt', 'Foto de Mateus, sério, com roupa de treino de taekwondo.')
}




    
}