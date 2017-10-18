

/**
 * Дансны жагсаалт
 * 
 * Method : GET
 * path   : /account-list
 */
declare module AccountList {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         *  1 : Дансны үлдэгдэлтэй тодоройлолт
         *  2 : Төлбөр төлөх боломжт дансны жагсаалт 
         *  3 : Данс эзэмшигчийн тодоройлолт
         *  4 : Дансны хуулга
         *  5 : Карт захиалах
         *  6 : Ухаалаг мэдээ
         */
        type: number

    }

   
    /**
     * StatusCode : 200
     */
    interface Response {

        accounts: IAccount[]

    }
    interface IAccount {
        /**
         * Дансны дугаар
         */
        accountNumber: string

        /**
         * Дансны нэр
         */
        accountName: string

        /**
         * Ухаалаг мэдээ төлөв
         * 
         * !!! Ухаалаг мэдээний жагсаал бол заавар утгатай байна
         */
        smsAlert? : string
    }
}


