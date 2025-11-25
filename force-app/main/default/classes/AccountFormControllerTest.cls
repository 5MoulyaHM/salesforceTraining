@IsTest
private class AccountFormControllerTest {

    @IsTest
    static void testInsertAccount() {
        Account acc = new Account(
            Name = 'TestAcc',
            AccountNumber = '12345',
            BillingStreet = '123 Main St',
            Description = 'Test account insert'
        );

        Test.startTest();
        Account result = AccountFormController.insertOrUpdateAccount(acc);
        Test.stopTest();

        System.assertNotEquals(null, result.Id, 'Account should be inserted');
        System.assertEquals('TestAcc', result.Name);
    }

    @IsTest
    static void testUpdateAccount() {
        Account acc = new Account(Name = 'TestAcc2', AccountNumber = '11111');
        insert acc;

        acc.Description = 'Updated Description';
        Test.startTest();
        Account updatedAcc = AccountFormController.insertOrUpdateAccount(acc);
        Test.stopTest();

        System.assertEquals('Updated Description', updatedAcc.Description);
    }

    @IsTest
    static void testValidationError_NameTooShort() {
        Account acc = new Account(Name = 'Abc');
        try {
            Test.startTest();
            AccountFormController.insertOrUpdateAccount(acc);
            Test.stopTest();
            System.assert(false, 'Expected validation exception for short name');
        } catch (AuraHandledException e) {
            System.assert(e.getMessage().contains('between 4 and 15'));
        }
    }

    @IsTest
    static void testValidationError_AccountNumberTooLong() {
        Account acc = new Account(Name = 'ValidName', AccountNumber = '123456');
        try {
            Test.startTest();
            AccountFormController.insertOrUpdateAccount(acc);
            Test.stopTest();
            System.assert(false, 'Expected validation exception for account number');
        } catch (AuraHandledException e) {
            System.assert(e.getMessage().contains('cannot exceed 5 digits'));
        }
    }
}
