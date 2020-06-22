function solution(board) {
    var answer = 0;

    var arr = [];
    for(var s = 0; s < board[0].length + 1; s++)
    {
        arr.push(0);
    }
    board.unshift(arr);

    for (var i = 1; i < board.length; i++) {   
        board[i].unshift(0);     
        for (var j = 1; j < board[0].length; j++) {
            if (board[i][j] === 1) {
                board[i][j] = (Math.min(board[i][j - 1], board[i - 1][j - 1], board[i - 1][j])) + 1;

                if (board[i][j] > answer) {
                    answer = board[i][j];
                }
            }
        }
    }
    
    return answer * answer;
}

console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]));
// console.log(solution([[0,0,1,1],[1,1,1,1]]));