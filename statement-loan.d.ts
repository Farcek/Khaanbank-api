/**
 * Зээлтэй эсэх, Зээлийн үлдэгдлийн тодоройлолт
 * 
 * Method : GET
 * path   : /statement-loan
 */
declare module StatementLoan {
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

        /**
         * Тодорхойлолт гаргасан огноо
         */
        date: string
        /**
         * Хот/аймаг
         */
        city: string

        /**
         * Тодорхойлолтын дугаар
         */
        refId: string

        /**
         * Тодорхойлолтын агуулга бүрэн эхээр
         */
        content: string


        /**
         * хугацаа хэтэрсэн үлдэгдэл агуулга бүрэн эхээр
         */
        expiredContent: string


        /**
         * Хадгаламж барицаалсан зээл
         */
        depositsLoan: ILoanItem
        /**
         * Тэтгэвэрийн зээл
         */
        pensionLoan: ILoanItem
        /**
         * Бусад зээл
         */
        otherLoan: ILoanItem

    }

    /**
     * Зээлийн мөрийн мэдээлэл
     */
    interface ILoanItem {
        /**
         * Зээлийн эрх
         */
        total: number
        /**
         * Зээлийн үлдэгдэл
         */
        amount: number
        /**
         * Валют төрөл
         */
        currency: string
    }
}


