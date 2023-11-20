let p1="rgb(255,206,103)"
let p2='rgb(254,102,135)'

let grid=document.querySelectorAll(".grid");

grid=Array.from(grid);

let grd_sim=Array.apply(null,new Array(7)).map(()=>{return Array.apply(null,new Array())})

let pos=1;
document.querySelector(`.pointer div:nth-child(${pos})`).style=`background: url("png-transparent-computer-mouse-pointer-computer-keyboard-cursor-computer-mouse-love-electronics-hand-thumbnail.png");background-size: cover;`

let clr=p1;
let cnt=0;
let state=0;

function evnt(a)
{
    switch (a.key) {
        case 'a':

        document.querySelector(`.pointer div:nth-child(${pos})`).style="background: white;"
        
        if(pos==1)pos=7;
        else --pos;
        
        document.querySelector(`.pointer div:nth-child(${pos})`).style=`background: url("png-transparent-computer-mouse-pointer-computer-keyboard-cursor-computer-mouse-love-electronics-hand-thumbnail.png");background-size: cover;`
        
        break;
        
        case 'd':

        document.querySelector(`.pointer div:nth-child(${pos})`).style="background: white;"
        
        if(pos==7)pos=1;
        else ++pos;
        
        document.querySelector(`.pointer div:nth-child(${pos})`).style=`background: url("png-transparent-computer-mouse-pointer-computer-keyboard-cursor-computer-mouse-love-electronics-hand-thumbnail.png");background-size: cover;`
        
        break;
        
        case 'Enter':
            if(grd_sim[pos-1].length<6){
                grd_sim[pos-1].push (player);
                document.querySelector(`.grid div:nth-child(${7*(6-grd_sim[pos-1].length)+pos})`).style=`background: ${clr};`
                timer=30;
                clr=clr==p1?p2:p1; 
                check(pos,player);
                player=player==1?2:1;
                if(++cnt==42)
                {
                    clearInterval(bt);

                    let elem=document.querySelector(".clock p");
                    elem.innerHTML='Game Over';

                }
            }
        console.log(grd_sim);
        break;
    }

    // console.log(a);
}

let ev=document.addEventListener("keypress",(a)=> {
    if(state!=1){
    evnt(a);}
});


// when designeing multiplayer mode when one player moves make the assgining elemnt of the grd_sim array equal to 1 and when the other player moves make it zero and parameterize the process like this

let player=1;
let timer=30;

let bt=setInterval(()=>{
    
    let elem=document.querySelector(".clock p")

    if(--timer <0)
    {
        player=player==1?2:1;
        timer=30;
        clr=clr==p1?p2:p1;   
    }

    elem.innerHTML=`${timer}s <br> Player:${player}`
},1000);

// function check(pos , py)
// {
//     pos--;
//     if(grd_sim[pos].length < 4)
//     {
//         // debugger
//     }
//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos][grd_sim[pos].length-2] == py && grd_sim[pos][grd_sim[pos].length-3] == py && grd_sim[pos][grd_sim[pos].length-4] == py  )
//     {
//         // debugger;
//         clearInterval(bt);
//         // removeEventListener(ev);
//         console.log(1);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         return ;
//     }              //vertical

//     if(grd_sim[pos].length<4 || pos<3){//debugger;
//     }

//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos-1][grd_sim[pos].length-2] == py && grd_sim[pos-2][grd_sim[pos].length-3] == py && grd_sim[pos-3][grd_sim[pos].length-4] == py )
//     {
//         clearInterval(bt);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         console.log(2)
//         return 0;
//     }//diagonal-down-left

//     if(grd_sim[pos].length<4 || pos>3){
//     }

//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos+1][grd_sim[pos].length-2] == py && grd_sim[pos+2][grd_sim[pos].length-3] == py && grd_sim[pos+3][grd_sim[pos].length-4] == py )
//     {
//         console.log(3);
//         clearInterval(bt);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         return 0;
//     }//diagonal-down-right
    
//     if(pos>3){//debugger;
//     }

//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos+1][grd_sim[pos].length-1] == py && grd_sim[pos+2][grd_sim[pos].length-1] == py && grd_sim[pos+3][grd_sim[pos].length-1] == py )
//     {
//         console.log(4);
//         clearInterval(bt);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         return 0;
//     }//right
    
//     if(pos<3){//debugger;
//     }

//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos-1][grd_sim[pos].length-1] == py && grd_sim[pos-2][grd_sim[pos].length-1] == py && grd_sim[pos-3][grd_sim[pos].length-1] == py )
//     {
//         console.log(5);
//         clearInterval(bt);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         return 0;
//     }//left
    
//     if(pos<3 || grd_sim[pos].length>2){//debugger;
//     }

//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos-1][grd_sim[pos].length-1] == py && grd_sim[pos-2][grd_sim[pos].length-1] == py && grd_sim[pos-3][grd_sim[pos].length-1] == py )
//     {
//         console.log(6);
//         clearInterval(bt);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         return 0;
//     }//diagonal-up-left
    

//     if(pos>3 || grd_sim[pos].length>2){//debugger;
//     }

//     else if(grd_sim[pos][grd_sim[pos].length-1] == py && grd_sim[pos+1][grd_sim[pos].length] == py && grd_sim[pos+2][grd_sim[pos].length+1] == py && grd_sim[pos+3][grd_sim[pos].length+2] == py )
//     {
//         console.log(7);
//         clearInterval(bt);
//         let elem=document.querySelector(".clock p");
//         elem.innerHTML=`Player ${py} won`;
//         return 0;
//     }//diagonal-up-right


// }

function vertical(pos,py)
{
    if(!(grd_sim[pos].length < 4))
    {
        let cnt=0;
        for(let i=4;i>0;i--)
        {
            if(grd_sim[pos][grd_sim[pos].length-i] == py) cnt++;
            else break;
        }
        return cnt;
    }  
}

function left(pos,py,s=0)
{
    // debugger;
    // if(!(pos<3))
    // {
        let cnt=0;
        for(let i=0;i<4;i++)
        {
            try {
                if(grd_sim[pos-i][grd_sim[pos].length-1] == py) cnt++;
                else break;
            } catch (err) {
                break;
            }
        }
        if(cnt<4 && s!=1)
        {
            cnt+=right(pos,py,1)-1;
        }
        return cnt;
    // }  
}

function right(pos,py,s=0)
{
    // if(!(pos<3))
    // {
        let cnt=0;
        
        for(let i=0;i<4;i++)
        {
            try {
                if(grd_sim[pos+i][grd_sim[pos].length-1] == py) cnt++;
                else break;
            } catch (err) {
                break;
            }
        }
        if(cnt<4 && s!=1)
        {
            cnt+=left(pos,py,1)-1;
        }
        return cnt;
    // }  
}

function diag_down_right(pos,py,s=0)
{
    // if(!(grd_sim[pos].length<4 || pos>3))
    // {
        let cnt=0;
        for(let i=0;i<4;i++)
        {
            try {
                if(grd_sim[pos+i][grd_sim[pos].length-1-i] == py) cnt++;
                else break;
            } catch (err) {
                break;
            }
        }
        if(cnt<4 && s!=1)
        {
            cnt+=diag_up_left(pos,py,1)-1;
        }
        return cnt;
    // }  
}

function diag_down_left(pos,py,s=0)
{
    // if(!(grd_sim[pos].length<4 || pos<3))
    // {
        let cnt=0;
        for(let i=0;i<4;i++)
        {
            try {
                if(grd_sim[pos-i][grd_sim[pos].length-1-i] == py) cnt++;
                else break;
            } catch (err) {
                break;
            }
        }
        if(cnt<4 && s!=1)
        {
            cnt+=diag_up_right(pos,py,1)-1;
        }
        return cnt;
    // }  
}

function diag_up_left(pos,py,s=0)
{
    // if(!(pos<3 || grd_sim[pos].length>2))
    // {
        let cnt=0;
        for(let i=0;i<4;i++)
        {
            try {                
                if(grd_sim[pos-i][grd_sim[pos].length-1+i] == py) cnt++;
                else break;
            } catch (err) {
                break;
            }
        }
        if(cnt<4 && s!=1)
        {
            cnt+=diag_down_right(pos,py,1)-1;
        }
        return cnt;
    // }  
}

function diag_up_right(pos,py,s)
{
    // if(!(pos>3 || grd_sim[pos].length>2))
    // {
        debugger;
        let cnt=0;
        for(let i=0;i<4;i++)
        {
            try {
                if(grd_sim[pos+i][grd_sim[pos].length-1+i] == py) cnt++;
                else break;
            } catch (error) {
                break;
            }
        }
        if(cnt<4 && s!=1)
        {
            cnt+=diag_down_left(pos,py,1)-1;
        }
        return cnt;
    // }  
}


function check(pos,py){
    pos--;
    if(vertical(pos,py)>=4) succ(py,1);
    if(left(pos,py)>=4) succ(py,2);
    if(right(pos,py)>=4) succ(py,3);
    if(diag_down_left(pos,py)>=4) succ(py,4);
    if(diag_down_right(pos,py)>=4) succ(py,5);
    if(diag_up_left(pos,py)>=4) succ(py,6);
    if(diag_up_right(pos,py)>=4) succ(py,7);
}

function succ(py,p)
{
    state=1;
    clearInterval(bt);
    let elem=document.querySelector(".clock p");
    elem.innerHTML=`Player ${py} won`;
    console.log(p);
}
