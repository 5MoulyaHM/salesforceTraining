public with sharing class AccountValidate {
   
    @AuraEnabled
    public static Id insertAccount(Account acc) {
        if (acc == null) {
            throw new AuraHandledException('Account data is required');
        }
        insert acc;
        return acc.Id;
    }
 
    @AuraEnabled
    public static void updateAccount(Account acc) {
        if (acc == null || acc.Id == null) {
            throw new AuraHandledException('Account Id is required for update');
        }
        update acc;
    }
}
 