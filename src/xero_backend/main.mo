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
}