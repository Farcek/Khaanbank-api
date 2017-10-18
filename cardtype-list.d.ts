

/**
 * картын төрлүүдын жагсаалт
 * 
 * Method : GET
 * path   : /cardtype-list
 */
declare module CardTypeList {
    /**
     * headers 
     * Authorization : userToken
     */
    interface Request {
        /**
         * Дансны дугаар
         */
        accountNumber: string
    }


    /**
     * StatusCode : 200
     */
    interface Response {

        cardtypes: ICardtype[]

    }
    interface ICardtype {
        /**
         * Картын төрлийн дугаар
         */
        cardtypeId: string

        /**
         * Картын төрлийн нэр
         */
        cardtypeName: string
        /**
         * 
         */
        cardtypeImage: string

        /**
         * картны боломжит загварууд
         */
        templates: ICardtypeTemplate[]
    }

    /**
     * Тухайн картны боломжит загварууд
     */
    interface ICardtypeTemplate {
        /**
         *  дугаар
         */
        templateId: string

        /**
         *  нэр
         */
        templateName: string

        /**
         * 
         */
        templateImage: string

    }
}


