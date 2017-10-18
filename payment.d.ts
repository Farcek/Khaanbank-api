/**
 * Данснаас төлбөр авах
 * 
 * Method : POST
 * path   : /payment
 */
declare module Payment {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {

        /**
         * Төлбөрийг суутган авах дансны дугаар
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
        /**
         * Гүйлгээш төлөөлөх id
         * ex: jurnalId
         */
        transactionId : string
    }
}