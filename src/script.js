const omokContainer = document.querySelector('.omok-container');
const currentState = document.querySelector('#current-status');
const resetBtn = document.querySelector('#reset-btn');
const ROWS = 19;
const COLS = 19;
const omokBoard = [];
let count = 0;


class Omok {
    constructor(disabled, row, col, rowName,colName,active){
        this.disabled = disabled;
        this.row = row;
        this.col = col;
        this.rowName = rowName;
        this.colName = colName;
        this.active = active;
    }

}

ininGameStart();

function createCell(cell){
    const cellEl = document.createElement('input');
    cellEl.className = 'cell';
    cellEl.id = 'cell_' + cell.row + String.fromCharCode(65 + cell.col);

    cellEl.addEventListener('click', () => handleClick(cell));

    return cellEl;
}

function handleClick(cell){
    const rowActive = cell.rowName;
    const colActive = cell.colName;
    // console.log(rowActive + colActive);
    currentState.innerText = cell.rowName + ' ' + cell.colName;
    const cellClick = document.getElementById('cell_' + rowActive + colActive);

    if(count % 2 === 0){
        cellClick.classList.add('activeWhite');
        cellClick.setAttribute('disabled', '');
        cell.active = true;
        cell.disabled = true;   

        count++;
    } else {
        cellClick.classList.add('activeBlack');
        cellClick.setAttribute('disabled', '');
        cell.active = true;
        cell.disabled = true;
        count++;
    }

    if(count >= 2){
        count = 0;
    }

    console.log(cell);

}

function drawCell(){
    for(let i=0; i<omokBoard.length; i++){
        const rowEl = document.createElement('div');
        rowEl.className = 'cell-rows';
        for(let j=0; j<omokBoard[i].length; j++){
            const cell = omokBoard[i][j];
            const cellEl = createCell(cell);

            rowEl.append(cellEl);
        }
        omokContainer.append(rowEl);
    }
}

function handleReset(cell){
    for(let i=0; i<omokBoard.length; i++){
        for(let j=0; j<omokBoard[i].length; j++){
            const cellEl = omokBoard[i][j];
            const cellData = createCell(cell);

            const cellRowColEl = getElFromRowCol(cellEl.rowName, cellEl.colName);
            if(cellRowColEl.classList.contains('activeWhite')){
                cellRowColEl.classList.remove('activeWhite');
            } else if(cellRowColEl.classList.contains('activeBlack')){
                cellRowColEl.classList.remove('activeBlack');
            }

            cellData.active = false;
            cellData.disabled = false;
        }
    }
}

function getElFromRowCol(row,col){
    return document.getElementById('cell_'+ row + col);
}

function ininGameStart(){
    for(let i=0; i<ROWS; i++){
        let omokBoardRow = [];
        for(let j=0; j<COLS; j++){
            let active = false;
            let disabled = false;
            const rowName = i;
            const colName = String.fromCharCode(65 + j);
            const omok = new Omok(disabled, i, j ,rowName,colName, active);
            omokBoardRow.push(omok);
        }
        omokBoard.push(omokBoardRow);
    }
    drawCell();

    resetBtn.addEventListener('click', handleReset);
}

