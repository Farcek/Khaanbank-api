/**
 * Гүйлгээг буцаах
 * 
 * Method : POST
 * path   : /payment-back
 */
declare module Payment {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * гүйлгээний дугаар дугаар
         */
        transactionId: string

    }


    /**
     * StatusCode : 200
     */
    interface Response {
        
    }
}