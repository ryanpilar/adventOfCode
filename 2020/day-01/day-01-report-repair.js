// https://adventofcode.com/2020/day/1

const stringData = require('./puzzle-input')
const listData = data.split('\n')

function findCombo(data) {

     // brute force through all combinations:
    const bingoBank = []
    listData.forEach( num => {

        listData.forEach( num2 => {

            listData.forEach( num3 => {

                if (Number(num3) + Number(num2) + Number(num) === 2020) {

                    bingoBank.push([num3, num2, num], num3*num2*num)
                } 
            })
        })
    })
    return bingoBank
}

console.log(findCombo(stringData));