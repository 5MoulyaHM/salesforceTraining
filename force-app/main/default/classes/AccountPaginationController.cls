public with sharing class AccountPaginationController {

    @AuraEnabled(cacheable=false)
    public static List<Account> getRecords(Integer limitSize, Integer offsetSize) {
        return [
            SELECT Id, Name, Industry, Phone
            FROM Account
            ORDER BY Name
            LIMIT :limitSize
            OFFSET :offsetSize
        ];
    }

    @AuraEnabled(cacheable=false)
    public static Integer getTotalRecords() {
        return [SELECT COUNT() FROM Account];
    }
}
