/// @title Glyph contract 
/// @author Dhruv Malik 
/// @notice it defines the contract to mint ERC1155 for specific imprint and detailed  scientific citation. working as the ""
/// credits to https://github.com/ProjectOpenSea/opensea-erc1155/ for the  template .
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./interfaces/IImprint.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
contract ImprintContract is  IImprint , Ownable , ReentrancyGuard  {

mapping (address => uint256 ) _imprintAddrtoTokenId;
mapping (address => uint256 ) _manuscriptAddrtoTokenId;

// for allowing any third party to call the contract and  insuring the modularity of the contracts .
address public  proxyRegistryAddress;
address public nftAddress;

// TODO:  create an script on setting this value  with the web3.storage .
string constant internal baseMetadataURI;

using Counters for Counters.Counter;
using SafeMath for uint256;


/**

manuscript address: <contract address, uint256 tokenId)>
plain text name: <string>
plain text authors: <string>
content address: <ipfs/Arweave> 
authors: <list of addresses> %external accounts of authors
original date: <datetime> %for use with old pubs
split address: <contract address> %

 */

// defining the NFT parameters 

mapping(address=>uint256) _manuscriptAddrtoTokenId ;
string public onlyOwner name;
string[] public _authors;
address[] public _authorsAddress;
string internal _DataAccess; // IPFS/arweave accessing address , will be added to baseURI to get the actual path .


// just an simple check  ( as was mentioned in the reference implementation in opensea) , might be useful for adding details related to the status of citation.

enum Status {
    HAS_APPROVED ,
    HAS_NOT_BEING_APPROVED
 }

uint256 constant NUM_OPTIONS = 2;
mapping(uint256 => uint256) optionToTokenId;


constructor (address  _proxyRegistryAddress , address _nftAddress) public {
    proxyRegistryAddress = _proxyRegistryAddress;
    nftAddress = _nftAddress;
}

// defining the main details of the  imprint data types .









}