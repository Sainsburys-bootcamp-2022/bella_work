
//is Valid row or column is checking that it first is a valid array and then that the array length is equal to 6 
const isValidRowOrColumn = require('./connect4')
const isValidColumn = require('./connect4')

describe('when invoking the is valid row function', () => {
    it('check array length is equal to 6', () => {




        //ARRANGE
        const array = [2, 1, 4, 6, 7, 8]
        const expectedresult = true


        //ACT
        const result = isValidRowOrColumn.isValidRowOrColumn(array)


        //ASSERT
        expect(result).toEqual(expectedresult)



    }
    )


}
)

describe('when invoking the valid column function', () => {
    it('check the array is made up of ReadableStream, yellow and null', () => {

        //ARRANGE
        const columnArray = ["red", "yellow", null, "yellow"]
        const expectedresult = true

        //ACT
        const result = isValidColumn.isValidColumn(columnArray)

        //ASSERT
        expect(result).toEqual(expectedresult)
    })


})
