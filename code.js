const square=document.querySelector('.square');
const circle=document.querySelector('.circle');

function sleep(sleepTime){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(),sleepTime);
    })
}

function generateRandomNumberWithinRange(min,max){
    return min+Math.random()*(max-min)
}

function changeDIVWidth(div,minWidth,maxWidth){
    let randomWidth=generateRandomNumberWithinRange(minWidth,maxWidth);
    div.style.width=`${randomWidth}px`
}

function changeDIVHeight(div,minHeight,maxHeight){
    let randomHeight=generateRandomNumberWithinRange(minHeight,maxHeight);
    div.style.height=`${randomHeight}px`
}

async function animateDIV(div,minSize,maxSize,waitTime){
    while(true){
        await sleep(waitTime);
        changeDIVHeight(div,minSize,maxSize);
        changeDIVWidth(div,minSize,maxSize);
    }
}

animateDIV(circle,5,400,1500);
animateDIV(square,5,400,1500);