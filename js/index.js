// Your code goes here
let busImg = document.querySelector('.intro')

busImg.addEventListener('mouseenter', e => {
    busImg.style.backgroundColor = 'green';
    busImg.style.border = '5px solid orange'
  })
  

  busImg.addEventListener('mouseleave', e => {
    busImg.style.backgroundColor = 'white';
    busImg.style.border = '2px dotted black'
  })

  let contentDes = document.querySelector('.content-destination')

  console.log(contentDes.children)

  contentDes.children[0].addEventListener('dblclick', e => {
      contentDes.style.backgroundColor = 'aqua' 
  })

  contentDes.children[0].addEventListener('auxclick', e =>{
      e.preventDefault();
      contentDes.style.backgroundColor = 'maroon'
  })

  contentDes.children[0].addEventListener('click', e => {
    contentDes.style.backgroundColor = 'white' 
})

  contentDes.children[2].addEventListener('mouseover', e => {
      contentDes.children[2].style.width = '70%'
  })

  contentDes.children[2].addEventListener('mouseout', e => {
    contentDes.children[2].style.width = '100%'
})

let body = document.querySelector('body')

body.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
        body.style.backgroundColor = 'red'
    }
})

body.addEventListener('keyup', e => {
    if (e.keyCode === 32) {
        body.style.backgroundColor = 'white'
    }
})

let footer = document.querySelector('footer')

footer.children[0].addEventListener('select', e=>{
    footer.style.fontSize = '32px'
})

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    busImg.children[0].style.transform = `scale(${scale})`;
  }

  let scale = 1;
  busImg.children[0].onwheel = zoom;

  console.log(busImg.children)

  document.querySelector('.nav a').addEventListener('click', event => {
    event.preventDefault()
  })