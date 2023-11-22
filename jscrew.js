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

const crews = document.querySelectorAll('.opts-crew')
console.log(crews)
crews.forEach((e)=>{
    
    e.addEventListener('click', () => {
        crews.forEach((e)=>{
            if(e.className == 'opts-crew opt-actv'){
                e.classList.toggle('opt-actv')
            }
        })
        e.classList.toggle('opt-actv')
        if(e.id == 'douglas'){
            const moonimg = document.getElementById('crew-img')
            moonimg.src = 'images/crew/image-douglas-hurley.png'

            const crewtitle = document.getElementById('crew-title')
            crewtitle.innerText = 'Douglas Hurley'

            const moondesc = document.getElementById('crew-desc')
            moondesc.innerText = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'

            const profession = document.getElementById('profession')
            
            profession.innerText = 'Commander'

            const crewconteiner = document.getElementById('crew-img')

            if(crewconteiner.className.indexOf(' ') !== -1){
                crewconteiner.className = 'crew'
            }

            crewconteiner.classList.toggle('d')

            
    

        }

        if(e.id == 'victor'){
            const moonimg = document.getElementById('crew-img')
            moonimg.src = 'images/crew/image-victor-glover.png'  
            
            const crewtitle = document.getElementById('crew-title')
            crewtitle.innerText = 'Victor Glover'

            const moondesc = document.getElementById('crew-desc')
            moondesc.innerText = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'

            const profession = document.getElementById('profession')
            
            profession.innerText = 'Pilot'

            const crewconteiner = document.getElementById('crew-img')

            if(crewconteiner.className.indexOf(' ') !== -1){
                crewconteiner.className = 'crew'
            }

            crewconteiner.classList.toggle('v')

 
        }

        if(e.id == 'mark'){
            const moonimg = document.getElementById('crew-img')
            moonimg.src = 'images/crew/image-mark-shuttleworth.png' 
            const crewtitle = document.getElementById('crew-title')
            crewtitle.innerText = 'Mark Shuttleworth'

            const moondesc = document.getElementById('crew-desc')
            moondesc.innerText = ' Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'

            const profession = document.getElementById('profession')
            
            profession.innerText = 'Mission Specialist'

            const crewconteiner = document.getElementById('crew-img')

            if(crewconteiner.className.indexOf(' ') !== -1){
                crewconteiner.className = 'crew'
            }

            crewconteiner.classList.toggle('m')

        
        }

        if(e.id == 'anousheh'){
            const moonimg = document.getElementById('crew-img')
            moonimg.src = 'images/crew/image-anousheh-ansari.png' 
           
            const crewtitle = document.getElementById('crew-title')
            crewtitle.innerText = 'Anousheh Ansari'

            const moondesc = document.getElementById('crew-desc')
            moondesc.innerText = ' Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'


            const profession = document.getElementById('profession')
            
            profession.innerText = 'Flight Engineer'


            const crewconteiner = document.getElementById('crew-img')

            if(crewconteiner.className.indexOf(' ') !== -1){
                crewconteiner.className = 'crew'
            }

            crewconteiner.classList.toggle('n')
            

        }
    })
})



//Moons