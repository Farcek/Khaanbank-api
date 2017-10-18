/**
 * Дансны үлдэгдэлтэй тодоройлолт
 * 
 * Method : GET
 * path   : /statement-account-balance
 */
declare module StatementAccountBalance {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         *  Сонгогдсон дансны дугаар
         */
        accountNumber: string
    }


     /**
     * StatusCode : 200
     */
    interface Response {

        /**
         * Тодорхойлолт гаргасан огноо
         */
        date : string 
        /**
         * Хот/аймаг
         */
        city : string

        /**
         * Тодорхойлолтын дугаар
         */
        refId: string

        /**
         * Үнэдсэн эзэмшигч
         */
        principalAccountHolder: {
            /**
             * Эцэг(Эх) -ийн овог
             */
            surename: string
            /**
             * Өөрийн нэр
             */
            givenName: string

            /**
             * Рэгистрийн дугаар
             */
            identificationNumber : string
        }


     
        /**
         * хамтран эзэмшигч
         */
        accountCoHolder: {
            /**
             * Эцэг(Эх) -ийн овог
             */
            surename: string
            /**
             * Өөрийн нэр
             */
            givenName: string

            /**
             * Рэгистрийн дугаар
             */
            identificationNumber : string
        }

        /**
         * Дансны төрөл
         */
        productName : string

        /**
         * Валютын төрөл
         */
        currency : string

        /**
         * Данс нээсэн огноо
         */
        openingDate : string

        /**
         * Данс байршиж буй тооцооны төв
         */
        subBranchName

        /**
         * Дансны дугаар
         */
        accountNumber : string

        /**
         * Дансны үлдэгдэлийн мэдээлэл
         */
        accountBlance : string
    }
    
}


