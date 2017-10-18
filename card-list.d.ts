

/**
 * Картын жагсаалт авах
 * 
 * Method : GET
 * path   : /card-list
 */
declare module CardList {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         *  1 : Хаалттай картууд
         *  2 : Нээлттэй картууд
         *  
         */
        type: number

    }

   
    /**
     * StatusCode : 200
     */
    interface Response {

        cards: ICard[]

    }
    interface ICard {
        /**
         * картын дугаар
         */
        cardNo: string

        /**
         * Картын нэр
         */
        cardName: string


        
        
    }
}


