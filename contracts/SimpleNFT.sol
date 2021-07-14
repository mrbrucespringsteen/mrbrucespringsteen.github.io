//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SimpleNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("SimpleNFT", "PLK") {}

    function mintToken(address to, string memory tokenURI)
        public returns (uint256)
    {
        _tokenIds.increment();

        uint256 newId = _tokenIds.current();
        _safeMint(to, newId);
        _setTokenURI(newId, tokenURI);

        return newId;
    }
}
