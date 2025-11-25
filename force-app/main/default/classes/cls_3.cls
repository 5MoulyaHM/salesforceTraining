public with sharing class cls_3 { //account fetch
    @AuraEnabled(cacheable=true)
    public static list<Account> srchacc(string srchtxt){

       string  stxt = '%' +srchtxt + '%';
        List<Account> Al = [SELECT Id, Name, Phone, Industry, Rating FROM Account where name like :stxt];
        return Al;
       
            

    }

    @AuraEnabled(cacheable=true)
    public static String SayHi()
    {
        Return 'HI Moulya';

    }

    @AuraEnabled(cacheable=true)
    public static String SayBye(){
        Return 'BYE MOULYA';
    }
    }

