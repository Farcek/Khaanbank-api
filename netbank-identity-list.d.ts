

/**
 * InternetBank Эрхийн жагсаалт
 * 
 * Method : GET
 * path   : /netbank-identity-list
 */
declare module netbankIdentityList {
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

        netbankIdentitys: INetbankIdentity[]

    }
    interface INetbankIdentity {
        /**
         * Эрхийн Id
         */
        netbankIdentityId: string

        /**
         * Эрхийн нэр
         */
        netbankIdentityName: string

        /**
         * Бүртгүүлсэн утасны дугаар 
         * бүтэн харагдах албагүй
         */
        phone: string

        /**
         * Бүртгүүлсэн эмайл хаяг
         * Дугаар бүтэн харагдах албагүй
         */
        email: string

    }


}


