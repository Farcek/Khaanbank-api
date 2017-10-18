

/**
 * Mobilebank Эрхийн жагсаалт
 * 
 * Method : GET
 * path   : /mobilebank-identity-list
 */
declare module MobilebankIdentityList {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        
    }


    /**
     * StatusCode : 200
     */
    interface Response {

        mobileIdentitys: IMobileIdentity[]

    }
    interface IMobileIdentity {
        /**
         * Эрхийн Id
         */
        mobileIdentityId: string

        /**
         * Эрхийн нэр
         */
        mobileIdentityName: string

        /**
         * Бүртгүүлсэн утасны дугаар 
         * Дугаар бүтэн харагдах албагүй
         */
        phone : string

    }

    
}


