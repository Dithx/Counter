const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const number = document.getElementById('number');

let count = 0;

increase.onclick = function(){
    count += 1;
    number.innerHTML = count;
    changeColor();
}

decrease.onclick = function(){
    count -= 1;
    number.innerHTML = count;
    changeColor();
}

reset.onclick = function(){
    count = 0;
    number.innerHTML = count;
    changeColor();
}

// cek jika < 0 maka merah, > 0 maka hijau, dan jika 0 maka default
function changeColor(){
    if(count > 0){
        number.style.color = "#386641"
    }else if(count < 0){
        number.style.color = "#d90429"
    }else if(count === 0){
        number.style.color = "#001d3d"
    }
}
