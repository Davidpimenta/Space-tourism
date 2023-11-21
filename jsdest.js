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

//Moons

const moonsopt = document.querySelectorAll('.opts-moons')
console.log(moonsopt)
moonsopt.forEach((e)=>{
    
    
    e.addEventListener('click', () => {
        moonsopt.forEach((e)=>{
            if(e.className == 'opts-moons opt-actv'){
                e.classList.toggle('opt-actv')
            }
        })
        e.classList.toggle('opt-actv')
        if(e.id == 'moon'){
            const moonimg = document.getElementById('moon-img')
            moonimg.src = 'images/destination/image-moon.png'

            const moontitle = document.getElementById('moon-title')
            moontitle.innerText = 'moon'

            const moondesc = document.getElementById('moon-desc')
            moondesc.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'

            const moondistancetext = document.getElementById('moon-distance-text')
            moondistancetext.innerText = 'Avg. distance'

            const moondistance = document.getElementById('moon-distance')
            moondistance.innerText = '384,400 km'

            const timetravel = document.getElementById('time-of-travel')
            timetravel.innerText = '3 days'
            
        }

        if(e.id == 'mars'){
            const moonimg = document.getElementById('moon-img')
            moonimg.src = 'images/destination/image-mars.png'  
            
            const moontitle = document.getElementById('moon-title')
            moontitle.innerText = 'mars'

            const moondesc = document.getElementById('moon-desc')
            moondesc.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'

            const moondistance = document.getElementById('moon-distance')
            moondistance.innerText = '225 mil. km'
            const timetravel = document.getElementById('time-of-travel')
            timetravel.innerText = ' 9 months'
 
        }

        if(e.id == 'europa'){
            const moonimg = document.getElementById('moon-img')
            moonimg.src = 'images/destination/image-europa.png' 
            
            const moontitle = document.getElementById('moon-title')
            moontitle.innerText = 'europa'

            const moondesc = document.getElementById('moon-desc')
            moondesc.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'


            const moondistancetext = document.getElementById('moon-distance-text')
            moondistancetext.innerText = 'Avg. distance'

            const moondistance = document.getElementById('moon-distance')
            moondistance.innerText = '628 mil. km'

            const timetravel = document.getElementById('time-of-travel')
    
            timetravel.innerText = '3 years'
        
        }

        if(e.id == 'titan'){
            const moonimg = document.getElementById('moon-img')
            moonimg.src = 'images/destination/image-titan.png' 
            const moontitle = document.getElementById('moon-title')
            moontitle.innerText = 'titan'
            const moondesc = document.getElementById('moon-desc')
            moondesc.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
            const moondistancetext = document.getElementById('moon-distance-text')
            moondistancetext.innerText = 'Avg. distance'
            const moondistance = document.getElementById('moon-distance')
            moondistance.innerText = '1.6 bil. km'
            const timetravel = document.getElementById('time-of-travel')
            timetravel.innerText = '7 years'
          
        }
    })
})



//Moons