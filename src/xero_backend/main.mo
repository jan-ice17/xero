import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";
import Nat32 "mo:base/Nat32";
import Hash "mo:base/Hash"; // Added import for Hash

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

    //community for engagement 
    type CommunityId = Nat;
    type Community = {
        id: CommunityId;
        name: Text;
        description: Text;
        members: [BusinessId];
    };

    type BusinessType = {
        #SupermarketStore;
        #RestaurantFastFood;
        #CharityNGO;
    };

    private stable var nextBusinessId : Nat = 0;
    // Changed to use Hash.hash
    private var businesses = HashMap.HashMap<BusinessId, Business>(0, Nat.equal, Hash.hash);
   
    //helper function coz we all need some help
    private func generateBusinessId() : BusinessId {
        nextBusinessId += 1;
        nextBusinessId
    };   

    public func getBusiness(id: BusinessId) : async ?Business {
        // Let's go fishing in our business pool!
        businesses.get(id)
    };

    private stable var nextCommunityId : Nat = 0;
    // Changed to use Hash.hash
    private var communities = HashMap.HashMap<CommunityId, Community>(0, Nat.equal, Hash.hash);

    private func generateCommunityId() : CommunityId {
        nextCommunityId += 1;
        nextCommunityId
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

    public func updateBusiness(id: BusinessId, name: Text, address: Text, country: Text, logoUrl: Text, bannerUrl: Text, cuisineType: Text) : async Bool {
        switch (businesses.get(id)) {
            case (null) { 
                // Oops! This business is playing hide and seek, and winning!
                false 
            };
            case (?business) {
                let updatedBusiness : Business = {
                    id;
                    name;
                    address;
                    country;
                    logoUrl;
                    bannerUrl;
                    cuisineType;
                    businessType = business.businessType;
                };
                businesses.put(id, updatedBusiness);
                // Business updated faster than a chef flipping pancakes!
                true
            };
        }
    };

    public func getAllBusinesses() : async [Business] {
        // Time for a business parade! 🎉
        Array.tabulate<Business>(businesses.size(), func(i: Nat) : Business {
            // Changed Nat.fromNat32 to Nat32.toNat
            switch (businesses.get(Nat32.toNat(Nat32.fromNat(i)))) {
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

    public func createCommunity(name: Text, description: Text) : async CommunityId {
        let id = generateCommunityId();
        let newCommunity : Community = {
            id;
            name;
            description;
            members = [];
        };
        communities.put(id, newCommunity);
        // Congratulations! You've just created a community faster than you can say "food waste"!
        id
    };

    public func joinCommunity(communityId: CommunityId, businessId: BusinessId) : async Bool {
        switch (communities.get(communityId)) {
            case (null) { 
                // This community is playing hard to get!
                false 
            };
            case (?community) {
                let updatedMembers = Array.append(community.members, [businessId]);
                let updatedCommunity : Community = {
                    id = community.id;
                    name = community.name;
                    description = community.description;
                    members = updatedMembers;
                };
                communities.put(communityId, updatedCommunity);
                // Welcome aboard! Don't forget to bring snacks to the next meeting!
                true
            };
        }
    };

    // public func searchCommunities(query: Text) : async [Community] {
    //     // Time to play detective and find those sneaky communities!
    //     let matchingCommunities = Buffer.Buffer<Community>(0);
    //     for ((_, community) in communities.entries()) {
    //         if (Text.contains(community.name, #text query) or Text.contains(community.description, #text query)) {
    //             matchingCommunities.add(community);
    //         }
    //     };
    //     Buffer.toArray(matchingCommunities)
    // };
    // Remember, in Xero, we don't just reduce food waste, we make it disappear like a magician with a rabbit!
}