let i = 0;
let colors = ["red", "green", "blue", "lavender", "violet", "grey"];
function changeColor(){
    document.body.style.backgroundColor = colors[i];
    i = i + 1
    if (i >= colors.length){
        i = 0;
    }
};


const interval = setInterval(() => {
    console.log('Executed every 3seconds');
    document.body.style.backgroundColor = colors[i];
    i++;
    if(i == colors.length){
        i = 0;
    }
}, 3000);



// setTimeout(() => clearInterval(interval), 30000);


