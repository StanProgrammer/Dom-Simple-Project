const img1=document.createElement('img');
img1.classList.add('image')
img1.src='buboff.jpg'

const con=document.querySelector('.container')
con.appendChild(img1);

const btn=document.createElement('button');
btn.innerHTML='button';
con.appendChild(btn);
btn.addEventListener('click',()=>{
    if(img1.src.match('off')){
        img1.src='bubon.jpg'
        btn.innerHTML='Turn off'
    }
    else{
        img1.src='buboff.jpg'
        btn.innerHTML='Turn on'
    }
    // img1.src='bubon.jpg'
})