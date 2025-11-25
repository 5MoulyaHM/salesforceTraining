public with sharing class cls_1 {

        @AuraEnabled
        public static string createacc(string accname , string accphn , string accind , string accrat){
            string msg;

            try {
                account a = new account ();
                a.Name = accname;
                a.Phone = accphn;
                a.Industry = accind;
                a.Rating = accrat;
                INSERT a;
                MSG = 'ACCOUNT CREATED SUCCESSFULLY WITH ACCOUNT ID' + a.id;
                
                
            } catch (Exception e) {
             msg = ' Account cannot be created due to ' + e.getMessage() + 'AT line no ' + e.getLineNumber() + ' and the cause is'+ e.getcause(); 
            }
            return msg;
        }

    }

    


