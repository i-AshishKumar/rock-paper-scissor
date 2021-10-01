var Rock = "https://pngimg.com/uploads/stone/stone_PNG13592.png";
var Paper = "https://pngimg.com/uploads/paper_sheet/small/paper_sheet_PNG7234.png";
var Scissor = "https://pngimg.com/uploads/scissors/small/scissors_PNG2.png";

function setChoice(clicked_id) 
{
    document.getElementById('choice').src=document.getElementById(clicked_id).src;
    document.getElementById('choice').width=100;
    document.getElementById('choice').height=100;

    setTimeout(() => {document.getElementById('player2choice').innerText="Computer's choice is ...";computerChoice();winDecider();},50)
}

function computerChoice() 
{
    document.getElementById('pcChoice').width=100;
    document.getElementById('pcChoice').height=100;
    var val = Math.ceil(Math.random()*3);
    console.log(val)
    if(val===1)
    {
        document.getElementById('pcChoice').src = Rock;
    }
    else if(val===2)
    {
        document.getElementById('pcChoice').src = Paper;
    }
    else if(val===3)
    {
        document.getElementById('pcChoice').src = Scissor;
    }
}

function winDecider() 
{
    if(document.getElementById('choice').src === document.getElementById('pcChoice').src)
    {
        document.getElementById('winner').innerText = "DRAW";
        document.getElementById('winner').style.color ='black';
    }

    else if(document.getElementById('choice').src === Rock && document.getElementById('pcChoice').src === Paper)
    {
        document.getElementById('winner').innerText = "COMPUTER WON";
        document.getElementById('winner').style.color ='#ff1a1a';
    }

    else if(document.getElementById('choice').src === Rock && document.getElementById('pcChoice').src === Scissor)
    {
        document.getElementById('winner').innerText = "YOU WON!!!";
        document.getElementById('winner').style.color ='#ff6600';
    }

    else if(document.getElementById('choice').src === Paper && document.getElementById('pcChoice').src === Rock)
    {
        document.getElementById('winner').innerText = "YOU WON!!!";
        document.getElementById('winner').style.color ='#ff6600';
    }

    else if(document.getElementById('choice').src === Paper && document.getElementById('pcChoice').src === Scissor)
    {
        document.getElementById('winner').innerText = "COMPUTER WON";
        document.getElementById('winner').style.color ='#ff1a1a';
    }

    else if(document.getElementById('choice').src === Scissor && document.getElementById('pcChoice').src === Rock)
    {
        document.getElementById('winner').innerText = "COMPUTER WON";
        document.getElementById('winner').style.color ='#ff1a1a';
    }

    else if(document.getElementById('choice').src === Scissor && document.getElementById('pcChoice').src === Paper)
    {
        document.getElementById('winner').innerText = "YOU WON!!!";
        document.getElementById('winner').style.color ='#ff6600';
    }
}