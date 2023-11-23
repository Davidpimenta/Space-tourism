function ativar(){
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
    const sectmain = document.getElementById('main-conteiner')
    const mobilemenu = document.getElementById('mobile-menu')
    mobilemenu.classList.toggle('mobile-menu-active')
    const body = document.querySelector('body')
    body.classList.toggle('body-active-menu')
    const liopt = document.querySelectorAll('.li-opt')
    liopt.forEach((e) =>{
        e.classList.toggle('liactive')
    })
}

const opts = document.querySelectorAll('.opts-t')
console.log(opts)
opts.forEach((e)=>{
    
    
    e.addEventListener('click', () => {
        opts.forEach((e)=>{
            if(e.className == 'opts-t opts-t-actv'){
                e.classList.toggle('opts-t-actv')
            }
        })
        
        e.classList.toggle('opts-t-actv')
        screenWidth = window.innerWidth
        if(e.id == '1'){
           const title = document.getElementById('title')
           title.innerText = 'Launch vehicle'
           const text = document.getElementById('text')
           
           text.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            
           const img = document.getElementById('technology')


           if(768 >= screenWidth){  
                const source = document.getElementById('img-mobile-t')
                source.srcset = 'images/technology/image-launch-vehicle-landscape.jpg' 
            } else {
                img.src = 'images/technology/image-launch-vehicle-portrait.jpg'
            }
        }

        if(e.id == '2'){
           const title = document.getElementById('title')
           title.innerText = 'Space capsule'
           const text = document.getElementById('text')
           text.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."

           const img = document.getElementById('technology')
            
           if(768 >= screenWidth){  
            const source = document.getElementById('img-mobile-t')
            source.srcset = 'images/technology/image-space-capsule-landscape.jpg' 
            
             } else {
                img.src = 'images/technology/image-space-capsule-portrait.jpg'
            }
           
          
        }

        if(e.id == '3'){
           const title = document.getElementById('title')
           title.innerText = 'Spaceport'
           const text = document.getElementById('text')
           text.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        
           const img = document.getElementById('technology')

           img.src = 'images/technology/image-spaceport-portrait.jpg'
           if(768 >= screenWidth){  
            const source = document.getElementById('img-mobile-t')
            source.srcset = 'images/technology/image-spaceport-landscape.jpg' 
            } else {
                img.src = 'images/technology/image-spaceport-portrait.jpg'
            }
        }   

    })
})