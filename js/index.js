import Controls from './functions.js'
import Timer from './timer.js'
import Events from './events.js'





const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause') 
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sum')
const buttonSub = document.querySelector('.sub')


const buttonFlorestOn  = document.querySelector('.butonFlorestOn')
const buttonFlorestOff = document.querySelector('.buttonFlorestOff')
const buttonRainOff = document.querySelector('.buttonRainOff')
const buttonRainOn = document.querySelector('.buttonRainOn')
const buttonBusinessOff = document.querySelector('.businessOff')
const buttonBusinessOn = document.querySelector('.businessOn')
const buttonFireOff = document.querySelector('.fireOff')
const buttonFireOn = document.querySelector('.fireOn')


const imageFlorest = document.querySelector('.image-futuristic-florest')
const imageRain = document.querySelector ('.image-futuristic-rain')
const imageBusiness = document.querySelector('.image-futuristic-coffe')
const imageFire = document.querySelector('.image-futuristic-fire')

/* DarkMode */
const buttonDarkmode = document.querySelector('.buttonDarkmode')
const buttonMoon = document.querySelector('.buttonMoon')
const content = document.querySelector('.content')
const time = document.querySelector('.time')

const buttonPlayDark = document.querySelector('.playDark')
const buttonPauseDark = document.querySelector('.pauseDark')
const buttonstopDark = document.querySelector('.stopDark')
const buttonSumDark = document.querySelector ('.sumDark')
const buttonSubDark = document.querySelector('.subDark')





/* All controls  application */
const controls = Controls({
    buttonPause,
    buttonPlay,
    imageFlorest,
    buttonFlorestOn,
    buttonFlorestOff,
    imageRain,
    buttonRainOn,
    buttonRainOff,
    buttonBusinessOff,
    buttonBusinessOn,
    imageBusiness,
    buttonFireOff,
    buttonFireOn,
    imageFire,
    content,
    time,
    buttonSum,
    buttonSub,
    buttonPlayDark,
    buttonstopDark,
    buttonSumDark,
    buttonSubDark,
    buttonPauseDark,
    buttonDarkmode,
    buttonMoon
    
    
})

/* All application operation */
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    controls,
    
})

/*  All event application */
Events ({
    controls,
    timer,
    buttonFlorestOff,
    buttonFlorestOn,
    buttonRainOff,
    buttonRainOn,
    buttonBusinessOff,
    buttonBusinessOn,
    buttonFireOff,
    buttonFireOn,
    buttonSum,
    buttonSub,
    buttonDarkmode,
    buttonPlayDark,
    buttonPauseDark,
    buttonstopDark,
    buttonSumDark,
    buttonSubDark,
    buttonMoon
    
    
    
    
})


/*  Export variables buttons */
export{ 
    buttonPlay,buttonPause,buttonStop
}