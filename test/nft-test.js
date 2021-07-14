const { use, expect } = require("chai");
//needs to be fixed
use(solidity);

  describe("SimpleNFT", function (){   

    it("Should mint ERC721 Token", async function () {
      const SimpleNFT = await ethers.getContractFactory("SimpleNFT");
      const SimpleNFT = await ethers.deploy(addressTo, tokenURI);
      await SimpleNFT.deployed();

      await SimpleNFT.wait();

      expect(await SimpleNFT.mintToken().to.equal(newId));
      
    
      });
  });

