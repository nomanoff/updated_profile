
console.log('it is working');

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');



for (var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(e){
        let mode = this.dataset.mode;
        console.log('Option:', mode);
       
        setTheme(mode);
      
    })
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue-theme.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green-theme.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple-theme.css'
	}

	localStorage.setItem('theme', mode)
}



//////////////////////////TYPING EFFECT////////////////

const message = ["Who am I?"];
let count = 0;
let index = 0;
let currentText = "";
let letter = " ";

function type(){

   
    if(count === message.length){
        count = 0;
    }

    currentText = message[count];
    letter = currentText.slice(0, ++index);
    console.log(letter);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 200);
};

type();



