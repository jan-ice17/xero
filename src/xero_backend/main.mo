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
}