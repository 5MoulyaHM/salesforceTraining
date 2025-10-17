public class Apitesting {
    public static  void getAddress(String pincode){
        Http h= new Http();
    HttpRequest request = new HttpRequest();
    request.setEndPoint('https://api.postalpincode.in/pincode/'+pincode);
     request.setMethod('GET');
    HttpResponse response = h.send(request);
        List<WapperPlaces> res =(List<WapperPlaces>)JSON.deserialize(response.getBody(),List<WapperPlaces>.class);
       System.debug(res);
        for(WapperPlaces wp:res){
            System.debug('Message:'+wp.Message);
            System.debug('Status:'+wp.Status);
            if(wp.PostOffice!=null){
                for(Address addr :wp.PostOffice){
                    System.debug('Name:'+addr.name);
                    System.debug('description:'+addr.Description);
                    System.debug('BranchType:'+addr.BranchType);
                    System.debug('Branch:'+addr.BranchType);
                    System.debug('pincode:'+addr.Pincode);
                }
            }
        }
    }
    public class WapperPlaces{
        public string Message;
        public string Status;
        public list<Address> PostOffice;
    }
        public class Address{
           public string Name;
                 public string Description;
                public string BranchType;
                public string DeliveryStatus;
                public string Pincode;
}
}