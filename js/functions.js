
import { buttonStop } from "./index.js"


export default function Controls({
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
}){




    
    function darkModeOn(){
        content.classList.toggle('dark')
        time.classList.toggle('dark')
        buttonPlay.classList.toggle('hide')
    
        buttonStop.classList.toggle('hide')
        buttonSum.classList.toggle('hide')
        buttonSub.classList.toggle('hide')
        buttonPlayDark.classList.toggle('hide')
        buttonstopDark.classList.toggle('hide')
        buttonSumDark.classList.toggle('hide')
        buttonSubDark.classList.toggle('hide')

    }

    function noHideButtonPause (){
        buttonPauseDark.classList.remove('hide')
    }

    function hideButtonPauseAndNoHideButtonPlayDark(){
        buttonPauseDark.classList.add('hide')
        buttonPlayDark.classList.remove('hide')
    }

    function startApplicationDark(){
        buttonPlay.classList.add('hide')
        buttonPlayDark.classList.toggle('hide')
        
    }

    function pauseApplicationDarkmode(){
        buttonPauseDark.classList.toggle()
        buttonPlayDark.classList.toggle()
    }

    function buttonpauseDarkmode(){
        buttonPauseDark.classList.add('hide')
        buttonPlayDark.classList.remove('hide')
    }



    function playHideDarkMode(){
        buttonDarkmode.classList.add('hide')
    }

    function stopHideDarkMode(){
        buttonDarkmode.classList.remove('hide')
    }

    function hideMoon(){
        buttonMoon.classList.toggle('hide')
    }
    








    /*  Clean Code */
    function startApplication(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }
    

    function resetTimer(){ 
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    
    }


    function hideFlorest(){
        buttonFlorestOn.classList.add('hide')
        buttonFlorestOff.classList.remove('hide')
        imageFlorest.classList.add('hide')
    }

    function hideBusiness(){
        buttonBusinessOff.classList.remove('hide')
        buttonBusinessOn.classList.add('hide')
        imageBusiness.classList.add('hide')

    }

    function hideFire(){
        buttonFireOff.classList.remove('hide')
        buttonFireOn.classList.add('hide')
        imageFire.classList.add('hide')
    }

    function hideRain(){
        buttonRainOn.classList.add('hide')
        buttonRainOff.classList.remove('hide')
        imageRain.classList.add('hide')
    }   

    function imageSunHide(){
        buttonDarkmode.classList.toggle('hide')
        buttonMoon.classList.toggle('hide')
    }

  



    /* Application */



    function onFlorest(){ 
        imageFlorest.classList.remove('hide')
        buttonFlorestOn.classList.remove('hide')
        buttonFlorestOff.classList.add('hide')

        hideRain()
        hideBusiness()
        hideFire()
    }

    function offFlorest(){
        imageFlorest.classList.add('hide')
        buttonFlorestOn.classList.add('hide')
        buttonFlorestOff.classList.remove('hide')
    }



    function onRain(){ 
        imageRain.classList.remove('hide')
        buttonRainOff.classList.add('hide')
        buttonRainOn.classList.remove('hide')

        hideFlorest()
        hideBusiness()
        hideFire()
    }
    
    function offRain(){
        hideRain()
    }



    function OffBusiness(){
        buttonBusinessOff.classList.add('hide')
        buttonBusinessOn.classList.remove('hide')
        imageBusiness.classList.remove('hide')

        hideRain()
        hideFlorest()
        hideFire()
    }

    function OnBusiness(){ 
        hideBusiness()
    }



    function OnFire(){ 
        buttonFireOff.classList.add('hide')
        buttonFireOn.classList.remove('hide')
        imageFire.classList.remove('hide')

        hideFlorest()
        hideRain()
        hideBusiness()
    }

    function offFire(){
        hideFire()
    }

    return{


        startApplication,
        resetTimer,
        onFlorest,
        offFlorest,
        onRain,
        offRain,
        OffBusiness,
        OnBusiness,
        OnFire,
        offFire,
        darkModeOn,
        startApplicationDark,
        pauseApplicationDarkmode,
        noHideButtonPause,
        buttonpauseDarkmode,
        hideButtonPauseAndNoHideButtonPlayDark,
        playHideDarkMode,
        stopHideDarkMode,
        imageSunHide,
        hideMoon
        
        
    }
}   