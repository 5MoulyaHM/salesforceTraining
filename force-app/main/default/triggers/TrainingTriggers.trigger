trigger TrainingTriggers on Contact (after insert) {
 
    List<Case> casesToCreate = new List<Case>();
 
    for (Contact con : Trigger.new) {
        Case newCase = new Case();
        newCase.ContactId = con.Id;
        newCase.AccountId = con.AccountId;
        newCase.Subject = 'New Case for ' + con.FirstName + ' ' + con.LastName;
        newCase.Origin = 'Auto Created';  
        newCase.Status = 'New';          
 
        casesToCreate.add(newCase);
    }
    if (!casesToCreate.isEmpty()) {
        insert casesToCreate;
    }
}