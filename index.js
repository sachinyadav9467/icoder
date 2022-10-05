console.log("hi");
const boxes=document.getElementsByClassName('boxes');
let turn="X"
let user="X";
let userFilled = new Array(9).fill(false);
let computerFilled=new Array(9).fill(false);
let leftover=[0,1,2,3,4,5,6,7,8];
let resultspace=document.getElementById('resultspace');
let gameover=0;
function reset(){
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].innerText='';

    }
    userFilled = new Array(9).fill(false);
    computerFilled=new Array(9).fill(false);
   leftover=[0,1,2,3,4,5,6,7,8];
   resultspace.innerText="";
   gameover=0;
}
function changeTurn()
{
    turn= turn=="X"?"O":"X";
}
function lose()
{
    resultspace.innerText="YOU LOSE"
}
function win()
{
    resultspace.innerText="YOU WON"
}
function checkWin()
{
    wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<8;i++)
    {
        let j=0;
        for(j=0;j<3;j++)
        {
            if(!userFilled[wins[i][j]])
            break;
        }
        if(j==3)
        return true;
        for( j=0;j<3;j++)
        {
            if(!computerFilled[wins[i][j]])
            break;
        }
        if(j==3)
        return true;
    }
    return false;
}

for(let i=0;i<boxes.length;i++)
{
    boxes[i].addEventListener('click',()=>{
        if(boxes[i].innerText=='' && !gameover)
        {
                boxes[i].innerText=turn
            if(turn==user)
            userFilled[i]=1;
            else
            computerFilled[i]=1;
            if(checkWin())
            {
                gameover=1;
                if(turn==user)
                win();
                else
                lose();
            }
            changeTurn();
        }
    })
}