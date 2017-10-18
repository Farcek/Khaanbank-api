

/**
 * "Ухаалаг мэдээ" үйлчилгээний төлөв өөрчлөх
 * 
 * Method : POST
 * path   : /smsalert-statechange
 */
declare module CardStateChange {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         *  дансны дугаар
         */
        accountNumber: string
        /**
         *  true  - идэвхитэй болгох
         *  false - идавхигүй болгох
         */
        flag : boolean

    }

   
    /**
     * StatusCode : 200
     */
    interface Response {

        

    }
}


