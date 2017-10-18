/**
 * Үлдэгдэл шалгах, Гүйлгээг хийж чадах эсэх
 * 
 * Method : POST
 * path   : /payment-check
 */
declare module Payment {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * Шалгах дансны дугаар
         */
        accountNumber: string

        /**
         * Суутгах дүн
         */
        amount: number
    }


    /**
     * StatusCode : 200
     */
    interface Response {
        
    }
}