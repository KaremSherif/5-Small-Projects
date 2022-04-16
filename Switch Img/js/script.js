const silderContainer = document.querySelector('.silder-container')
const rightSide = document.querySelector('.right-side')
const leftSide = document.querySelector('.left-side')
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const silderLength = rightSide.querySelectorAll('div').length

let activeSideIndex = 0
leftSide.style.top = `-${(silderLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSilde('up'))
downBtn.addEventListener('click', () => changeSilde('down'))

const changeSilde = (direction) => {
    const silderheight = silderContainer.clientHeight
    if(direction ==='up'){
        activeSideIndex++
        if(activeSideIndex > silderLength - 1){
            activeSideIndex = 0
        }
    } else if(direction === 'down') {
        activeSideIndex--
        if(activeSideIndex < 0){
            activeSideIndex = silderLength -1
        }
    }
    rightSide.style.transform = `translateY(-${activeSideIndex * 
    silderheight}px)`

    leftSide.style.transform = `translateY(${activeSideIndex * 
    silderheight}px)`

}