// https://adventofcode.com/2020/day/2

const puzzleInput_str = require('./puzzle-input')
const puzzleInput_list = puzzleInput_str.split('\n')

function checkValidity() {

    const validPaswordsOne = []
    const validPaswordsTwo = []

                                                                // convert string data to be pramically useful:
    const puzzleInput_objs = puzzleInput_list.forEach( entry => {
    
        const [key, password] = entry.split(': ')               // clean up data and make it usable
        const [range, char] = key.split(' ')                    // clean up 'key' and separate values
        const [lowRange, highRange] = range.split('-')          // clean up 'key' and separate values
        let counterOne = 0                                      
        
        // check validity for problem #1
        password.split('').forEach( character => {
            character === char ? counterOne ++ : false
        } )
                                                                // filter all valid passwords:
        counterOne >= Number(lowRange) && counterOne <= Number(highRange) 
            ? validPaswordsOne.push([password, counterOne, char, lowRange, highRange]) 
            : false

        // check validity for problem #2
        const checkIndexOne = char == password[Number(lowRange)-1] 
        const checkIndexTwo = char == password[Number(highRange)-1]

                                                                // filter all valid passwords:
        if ( checkIndexOne && checkIndexTwo ) {}
        else if ( checkIndexOne || checkIndexTwo ) {
            validPaswordsTwo.push([password, counterOne, char, lowRange, highRange])
        } 
    })

    // problem #1 answer
    return validPaswordsOne.length
    
    // problem #2 answer
    // return validPaswordsTwo.length

}

console.log(checkValidity());

