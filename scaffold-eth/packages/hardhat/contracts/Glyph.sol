contract Glyph {

string  public  _title;
 string[] public _authors;
 string   public _URI;
uint256 private  _date;
string[] public splitstreamcite; 
uint[] private splitstreamweight;


constructor () public ERC1155(_URI) {
    _setURI(_URI);
Counters.counter private _tokenIds; 

}




}