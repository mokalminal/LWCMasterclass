public with sharing class caseController {
    
    @AuraEnabled (cacheable=true)
    public static List<Case> getCasesInSequence(){
        return [SELECT Id, Priority, Status, Origin, Subject FROM Case ORDER BY CreatedDate LIMIT 20];
    }
    

}