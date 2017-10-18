/**
 * Сонгосон хугацаанд хуулга авах
 * 
 * Method : GET
 * path   : /accountStatement
 */
declare module AccountStatement {
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
        startDate: string
        /**
         * Дуусах огноо
         */
        endDate: string
    }


    /**
     * StatusCode : 200
     */
    interface Response {
        /**
         * эхлэх огноо
         */
        startDate: string
        /**
         * Дуусах огноо
         */
        endDate: string


        /**
         * Харилцагчийн нэр
         */
        customerName: string
        /**
         * Хамтран эзэмшигч
         */
        coOwnerName: string
        /**
         * Дансны төрөл
         */
        productName: string

        /**
         * Дансны дугаар
         */
        accountNumber: string
        /**
         * Валютын төрөл
         */
        currency: string

        /**
         * Салбарын нэр
         */
        brachName: string

        balance: {
            /**
             * Эцсийн үлдэгдэл
             */
            begin: number
            /**
             * Эцсийн үлдэгдэл
             */
            end: number
        }
        /**
         * Нийт дүн
         */
        totalAmounts: {
            /**
             * Орлого
             */
            deposit: number
            /**
             * Зарлага
             */
            withdrawal: number
        }


        tarsactions : IAccountStatementTransaction[]

    }

}


interface IAccountStatementTransaction {
    /**
     * Мөрийн дугаар
     */
    row : number

    /**
     * Гүйлгээний огноо
     */
    postingDate : string

    /**
     * Салбарын код
     */
    branchCode : string

    /**
     * Журнал дугаар
     */
    journalNo : string

    /**
     * Харьцсан данс
     */
    contraAccountNo : string

    /**
     * Цаг
     */
    time : string

    /**
     * Хуулгын агуулга
     */
    statementNurrative : string

    /**
     * Орлого
     */
    deposit : number

    /**
     * Зарлага
     */
    withdrawal : number

    /**
     * Үлдэгдэл
     */
    balance :number

    /**
     * Тооцох огноо
     */
    tnxDate:string

}