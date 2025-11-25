public with sharing class AccountFormController {
    @AuraEnabled
    public static Account insertOrUpdateAccount(Account accRecord) {
        if (accRecord == null) {
            throw new AuraHandledException('Account record is required.');
        }

        if (String.isBlank(accRecord.Name) || accRecord.Name.length() < 4 || accRecord.Name.length() > 15) {
            throw new AuraHandledException('Account Name must be between 4 and 15 characters.');
        }

        if (accRecord.AccountNumber != null && accRecord.AccountNumber.length() > 5) {
            throw new AuraHandledException('Account Number cannot exceed 5 digits.');
        }

        if (accRecord.Id != null) {
            update accRecord;
        } else {
            insert accRecord;
        }
        return accRecord;
    }
}
