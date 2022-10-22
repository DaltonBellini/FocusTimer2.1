import Controls from "./functions.js"

const controls = Controls({

})

export default function Sound(){

    const btnPress = new Audio("sound/button-press.wav")
    const kitchenTimer = new Audio("sound/kichen-timer.mp3")
    const btnFlorest = new Audio("sound/Floresta.wav")
    const btnRain = new Audio("sound/Chuva.wav")
    const btnFire = new Audio("sound/Lareira.wav")
    const btnCofee = new Audio("sound/Cafeteria.wav")


    /* Variables volum */
    const volForest = document.querySelector('#vol-control')
    const volRain = document.querySelector('#volumRain')
    const volBusiness = document.querySelector('#volumBusiness')
    const volFire = document.querySelector('#volumFire')

    btnFlorest.loop = true
    btnRain.loop = true
    btnFire.loop = true
    btnCofee.loop = true
    


    volForest.addEventListener('input',function(){
        btnFlorest.volume = volForest.value
        
    })

    volRain.addEventListener('input',function(){
        btnRain.volume = volRain.value
    })

    volBusiness.addEventListener('input',function(){
        btnCofee.volume = volBusiness.value
    })

    volFire.addEventListener('input',function(){
        btnFire.volume = volFire.value
    })


 

    function buttonPress(){
        btnPress.play()
    }

    function kitchenAudio(){
        kitchenTimer.play()
    }

    function buttonFlorestPlay(){
        btnFlorest.play()
    }

    function buttonFlorestPause(){
        btnFlorest.pause()
    }

    function buttonRainPlay(){
        btnRain.play()
    }

    function buttonRainPause(){
        btnRain.pause()
    }

    function buttonFirePlay(){
        btnFire.play()
    }

    function buttonFirePause(){
        btnFire.pause()
    }

    function buttonCoffePlay(){
        btnCofee.play()
    }

    function buttonCoffePause(){
        btnCofee.pause()
    }

    return{
        buttonPress,
        kitchenAudio,
        buttonFlorestPlay,
        buttonFlorestPause,
        buttonRainPlay,
        buttonRainPause,
        buttonFirePlay,
        buttonFirePause,
        buttonCoffePlay,
        buttonCoffePause
    }
}