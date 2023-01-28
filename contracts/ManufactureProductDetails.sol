pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;
contract ManufactureProductDetails{
    
    event ProductFirstPoint(string serialID, string serialID1, string serialID2,string sourceManufacture,string destinationManufacture,string sourceDistributor,string destinationDistributor);
    struct ManufactureDetails{
        string serialID1;
        string sourceManufacture;
        string destinationManufacture;
    }
      struct DistributorDetails{
          string serialID2;
        string sourceDistributor;
        string destinationDistributor;
    }
mapping(string=>ManufactureDetails) public dataOfProduct;
mapping(string=>DistributorDetails) public dataOfProduct2;
 address public authority;
    constructor() public{
        authority=msg.sender;
    }
    function addProductFirstPointDetails(string memory serialID,string memory serialID1,string memory sourceManufacture,string memory destinationManufacture)public{
dataOfProduct[serialID].serialID1=serialID1;
dataOfProduct[serialID].sourceManufacture=sourceManufacture;
dataOfProduct[serialID].destinationManufacture=destinationManufacture;
    }
     function addProductSecondPointDetails(string memory serialID,string memory serialID2,string memory sourceDistributor,string memory destinationDistributor)public{
dataOfProduct2[serialID].serialID2=serialID2;
dataOfProduct2[serialID].sourceDistributor=sourceDistributor;
dataOfProduct2[serialID].destinationDistributor=destinationDistributor;
    }
function getManufactureDetials(string memory serialID) external view returns(ManufactureDetails memory){
return dataOfProduct[serialID];
}
function getDistributorDetials(string memory serialID) external view returns(DistributorDetails memory){
return dataOfProduct2[serialID];
}
}