import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor Xero {
  //Types
    type BusinessId = Nat;
    type Business = {
        id: BusinessId;
        name: Text;
        address: Text;
        country: Text;
        logoUrl: Text;
        bannerUrl: Text;
        cuisineType: Text;
        businessType: BusinessType;
    };

    type BusinessType = {
        #SupermarketStore;
        #RestaurantFastFood;
        #CharityNGO;
    };

    private stable var nextBusinessId : Nat = 0;
    private var businesses = HashMap.HashMap<BusinessId, Business>(0, Nat.equal, Nat.hash);
   
   //helper function coz we all need some  help
    private func generateBusinessId() : BusinessId {
        nextBusinessId += 1;
        nextBusinessId
    };   
    public query func getBusiness(id: BusinessId) : async ?Business {
        // Let's go fishing in our business pool!
        businesses.get(id)
    };

    public func createBusiness(name: Text, address: Text, country: Text, logoUrl: Text, bannerUrl: Text, cuisineType: Text, businessType: BusinessType) : async BusinessId {
        let id = generateBusinessId();
        let newBusiness : Business = {
            id;
            name;
            address;
            country;
            logoUrl;
            bannerUrl;
            cuisineType;
            businessType;
        };
        businesses.put(id, newBusiness);
        // huraay i just created a business faster than you can say "blockchain"!
        id
    };  


    public query func getAllBusinesses() : async [Business] {
        // Time for a business parade! 🎉
        Array.tabulate<Business>(businesses.size(), func(i: Nat) : Business {
            switch (businesses.get(Nat.fromNat32(Nat32.fromNat(i)))) {
                case (?business) { business };
                case (null) { 
                    // If we hit this case, someone's been messing with our secret sauce!
                    {
                        id = 0;
                        
                        name = "Mysterious Business";
                        address = "Somewhere Over the Rainbow";
                        country = "Wonderland";
                        logoUrl = "404-logo-not-found.jpg";
                        bannerUrl = "nothing-to-see-here.png";
                        cuisineType = "Imagination";
                        businessType = #SupermarketStore;
                    }
                };
            }
        })
    };   
}