// alert("hi");
function ageindays()
{
var birthyear=prompt("what's your birthyear");
var ageindays1=(2023-birthyear)*365;
var h1=document.createElement('h1');
var textanswer=document.createTextNode("You are "+ageindays1+" days old.");
h1.setAttribute('id','ageindays2');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}
// var currentyear=prompt("what's the current year");
function reset()
{
    document.getElementById('ageindays2').remove();
}
//Challenge 2
function generatecat()
{
    var image=document.createElement('img');
    var div=document.getElementById('flex-box-catgen');
    image.src="https://images.unsplash.com/photo-1572039863446-dd69ee840291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMjI3NjY3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=200";
    div.appendChild(image);
}

//Challenge 3

function rpsGame(yourChoice)
{
    console.log(yourChoice.id);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice= numbertochoice(randtorpsint());
    console.log("Computer choice:",botChoice);
    results=decideWinner(humanChoice,botChoice);
    console.log(results);
    message=finalMessage(results); 
    console.log(message);
    rpsFrontend(yourChoice.id,botChoice,message);   
}
function randtorpsint()
{
    return Math.floor(Math.random()*3);//generates 0,1 or 2.
}

function numbertochoice(number)
{
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice)
{
    var rpsDatabase={
        "rock":{"scissors":1,"rock":0.5,"paper":0},
        "paper":{"rock":1,"paper":0.5,"scissors":0},
        "scissors":{"paper":1,"scissors":0.5,"rock":0}
    };
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore])
{
    if(yourScore===0){
        return ("you lost");
    }
    else if(yourScore===0.5)
    {
        return {'message':"You tied","color":"yellow"};
    }
    else{
        return {'message':"You won","color":"Green"};
    }
}

function rpsFrontend(humanImageChoice,botImageChoice,finalMessage)
{
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //removing all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src'"+imagesDatabase[humanImageChoice]+"'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
}
