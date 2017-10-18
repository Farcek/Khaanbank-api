

/**
 * InternetBank төлөв өөрчлөх
 * 
 * Method : POST
 * path   : /netbank-identity-statechange
 */
declare module netbankIdentityStatechange {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * Эрхийн Id
         */
        netbankIdentityId: string
        /**
         *  true  - идэвхитэй болгох
         *  false - идавхигүй болгох
         */
        flag: boolean
    }


    /**
     * StatusCode : 200
     */
    interface Response {


    }

}


