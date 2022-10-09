// https://adventofcode.com/2020/day/3

const puzzleInput_str = require('./puzzle-input')

                                                            // convert the data into a list structure so we can use list methods
const puzzleInput_list = puzzleInput_str.split('\n')

function runCombos() {
    const combos = [ [1,1], [3,1], [5,1], [7,1], [1,2]]     // combos given from adventOfCode
                                                            
    return combos                                           // run countTrees on every single combo, then multiply those solutions together
        .map( combo => countTrees(combo[0], combo[1]) )
        .reduce( (total, current) => { return total * current}, 1 )
}

function countTrees(x_coordinate, y_coordinate) {

    let targetCoordinate = [x_coordinate, y_coordinate]
    let countTrees = 0
    let countOpenSpaces = 0

    puzzleInput_list.forEach( (rowData, index) => {
        
        if (index === targetCoordinate[1]) {                // are we on the right row/index?
                                                            // do we need to duplicate the board?
            if ( targetCoordinate[0] >= rowData.length ) {  
                                                            // how many times do we need to duplicate rowData:
                const scaleBy = Math.ceil( targetCoordinate[0] / rowData.length )
                                                            // I added an extra frame for good measure :) 
                rowData = rowData.repeat(scaleBy == 1 ? 2 : scaleBy + 1)
            }
                                                            // count trees:
            rowData[ targetCoordinate[0] ] === '#' ? countTrees++ : console.log( 'FALSE', rowData[ targetCoordinate[0] ], targetCoordinate[0])
            
                                                            // update coordinates to new value:
            targetCoordinate[0] = targetCoordinate[0] + x_coordinate 
            targetCoordinate[1] = targetCoordinate[1] + y_coordinate
        }
    })
    return countTrees
}

// console.log(countTrees(3,1));
console.log(runCombos());

