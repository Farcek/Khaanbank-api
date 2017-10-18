

/**
 * Mobilebank төлөв өөрчлөх
 * 
 * Method : POST
 * path   : /mobilebank-identity-statechange
 */
declare module MobilebankIdentityStatechange {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * Эрхийн Id
         */
        mobileIdentityId: string
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


