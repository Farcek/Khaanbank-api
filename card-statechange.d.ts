

/**
 * Карт төлөв өөрчлөх
 * 
 * Method : POST
 * path   : /card-statechange
 */
declare module CardStateChange {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * Сонгосон картын id
         */
        cardNo: string
        /**
         * Card-n төлөв
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


