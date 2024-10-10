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

   
}