public with sharing class Apiclass1 {
    public static Map<String,Object> getJoke() {
        try{
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint('https://official-joke-api.appspot.com/random_joke');
            request.setMethod('GET');

            HttpResponse response = http.send(request);
            
            if(response.getStatusCode()==200){
            Map<String,Object> res = (Map<String,Object>)JSON.deserializeUntyped(response.getBody());
            return result;

        }
        else{
            throw new calloutexception('Error during API Call: ' + response.getStatusCode());
        }


        }
        catch(Exception e){
            throw new CallException('Error during API Call:'+e.getMessage());

    }
}
}