public with sharing class cls_2 {
    @AuraEnabled
    public static String sendemail(string toadd, string Sub, string emlbod){

        string msg;

        try {
            messaging.SingleEmailMessage SE = nEw Messaging.SingleEmailMessage();
            list<string> toadds = new list<string>{toadd,'moulyahmmohan@gmail.com'};
            SE.setToAddresses(toadds);
            SE.setSubject(Sub);
            SE.setHtmlBody(emlbod);

            list<Messaging.SingleEmailMessage> AAA = new list<Messaging.SingleEmailMessage>{SE};
            Messaging.sendEmail(AAA );
            msg = 'EMAIL SENT SUCCESSFULLY';
            
        } catch (Exception e) {
            msg = 'EMAIL CANNOT BE SENT DUE TO ' + e.getMessage() + 'AT LINE NO ' + e.getLineNumber();
    }

        return msg;
    
}}