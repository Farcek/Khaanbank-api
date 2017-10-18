/**
 * Сонгосон хугацаанд хуулга авч болох эсэх-г шалгах
 * 
 * Method : GET
 * path   : /accountStatement-check
 */
declare module AccountStatementCheck {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {

        /**
         *  Сонгогдсон дансны дугаар
         */
        accountNumber: string

        /**
         * эхлэх огноо
         */
        startDate : string 
        /**
         * Дуусах огноо
         */
        endDate : string 
    }


    /**
     * StatusCode : 200
     */
    interface Response {        

        /**
         * Нийт мөрийн тоо
         */
        totalRows:number
        /**
         * нийт хуудасны тоо
         */
        totalPages:number
    }

}


