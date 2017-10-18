

/**
 * Карт захиалах
 * 
 * Method : POST
 * path   : /card-invitation
 */
declare module CardInvitation {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {

        /**
         *  карт захиалах дансны дугаар
         */
        accountNumber: string

        /**
         * Картын төрлийн дугаар
         */
        cardtypeId: string

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


