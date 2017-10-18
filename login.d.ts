

/**
 * Method : POST
 * path   : /login
 */
declare module Login {

    /**
     * headers 
     * Authorization : systemToken
     */
    interface Request {

        type : 'bankcard' | 'idcard'

        /**
         * Банкны картаар нэвтрэх бол
         * кары мэлээллийн base64 байдлаар илгээх
         */
        bankcard? : string 

        /**
         * Иргэний үнэмлэхээр нэвтрэх бол
         * Иргэний Рэгистрийн дугаар илгээх
         */
        rdNumber? : string 
    }
    /**
     * StatusCode : 200
     */
    interface Response {
        /**
         * Харилцагчийн нэр
         */
        name : string


        /**
         * Банкнаас гаргасан үл тайлагдах тэмдэгтүүд
         */
        userToken : string

        
    }
}


