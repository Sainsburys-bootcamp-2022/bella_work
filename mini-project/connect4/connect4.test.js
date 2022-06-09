


const isValidRowOrColumn = require('./connect4')

describe ('when invoking the clearboard function', () => {
    it ('updates the board so that all inner html', () => {

       


        //ARRANGE
        const array = 7
        const expectedresult = false


         //ACT
         const result = isValidRowOrColumn.isValidRowOrColumn(array)
         
   
        //ASSERT
         expect(result).toBe(expectedresult)


    
    }
    )
    
}
    )
