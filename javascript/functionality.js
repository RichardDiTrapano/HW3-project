function tableForming(){
/* source to find how to get the inputted value and put it to JS: 
https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript */
var minColNum = document.getElementById('minColVal').value;
var maxColNum = document.getElementById('maxColVal').value;
var minRowNum = document.getElementById('minRowVal').value;
var maxRowNum = document.getElementById('maxRowVal').value;

var numColumns = (maxColNum - minColNum) + 1;
var numRows = (maxRowNum - minRowNum) + 1;

var i, j;

var rowNum = minRowNum;
var colNum = minColNum;

var userTable = document.getElementById("inputted-table");
var userRow, userColumn;

//source for javascript array declaration syntax found here: https://www.w3schools.com/js/js_arrays.asp
let valuesInTable = [];
let valuesPerRow = [];


if((minColNum > 50 && minColNum < -50) && (minRowNum > 50 && minRowNum < -50) && (maxColNum > 50 && maxColNum < -50) && (maxRowNum > 50 && maxRowNum < -50)){
    var text = "Invalid input, please try again!";
    return text;
}

//creates the elements to put into the array used in the table
for(i = 0; i < numRows; i++){

    if(i == 0){
       for(j = 0; j < numColumns; j++){
            if(j == 0)
                valuesPerRow[j] = "";
            else{
                valuesPerRow[j] = colNum;
                colNum++;
            }
        } 
    }
    
    else{
        for(j = 0; j < numColumns; j++){
            if(j == 0 && i == 1)
                valuesPerRow[j] = minRowNum;
            
            else if(j == 0 && i > 1)
                valuesPerRow[j] = minRowNum + i - 1;

            else{
                valuesPerRow[j] = colNum * rowNum;
                colNum++;
            }
        }

        rowNum++;
        valuesInTable[i] = valuesPerRow;

        while(valuesPerRow.length > 0){
            valuesPerRow.pop;
        }
    }
}

    //outputting table results
    /* sources for .insertRow/insertCell and .innerHTML: https://www.w3schools.com/jsref/met_table_insertrow.asp
    */
    for(i = 0; i < numRows; i++){
        userRow = userTable.insertRow();

        if(i == 0){
            for(j = 0; j < numColumns; j++){
                if(j == 0){
                    userColumn = userTable.insertCell();
                    userColumn.innerHTML("");
                }

                else{
                    userColumn = userTable.insertCell();
                    userColumn.innerHTML(colNum);
                    colNum++;
                }

            }
        }
        else{
            for(j = 0; j < numColumns; j++){
                if(j == 0 && i == 1){
                    userColumn = userTable.insertCell();
                    userColumn.innerHTML(minRowNum);
                }

                if(j == 0 && i > 1){
                    userColumn = userTable.insertCell();
                    userColumn.innerHTML(minRowNum + i - 1);
                }

                else{
                    userColumn = userTable.insertCell();
                    userColumn.innerHTML(valuesInTable[i][j]);
                }
                
        }
        }
        
    }

}


