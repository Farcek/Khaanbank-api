

/**
 * Карт сунгах
 * 
 * Method : POST
 * path   : /card-renew
 */
declare module CardRenew {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * 
         * 1 : карт сунгах
         * 2 : карт нөхөж авах
         */

        type : number
      

      
        /**
         *  загварын дугаар
         */
        templateId: string

        /**
         * картан дээр бичүүлэх нэр. хэрэглэгч өөрөө бичиж оруулах
         */
        customText : string

        /**
         * Хүргүүлэх хаяг
         */
        contactAddr : IAddr
        /**
         * Хүргүүлэх утас
         */
        contactPhone : string

        /**
         * 
         */
        w3w : string
    }

   
    /**
     * StatusCode : 200
     */
    interface Response {

        

    }
}


