const board = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];

 const childs=document.querySelectorAll('.tile')
 let flag=true


 childs.forEach((tile , index) =>{
    // console.log("test")
    tile.addEventListener('click', e=>{

        if(e.target.matches('div')){
            if (flag) {
                if(!(tile.matches('.fill-x')||tile.matches('.fill-o'))){
                    tile.classList.add('fill-x')
                    flag=false
                    board[index]='x'
                    // console.log(index)
                }
            }else{
                if(!(tile.matches('.fill-x')||tile.matches('.fill-o'))){
                    tile.classList.add('fill-o')
                    flag=true
                    board[index]='o'
                    // console.log(index)
                }
            }
        }
        console.log(board)

    })


 })
