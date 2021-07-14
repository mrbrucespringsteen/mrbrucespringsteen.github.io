/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = ""

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const yourCollectible = await ethers.getContract("YourCollectible", deployer);

  const sampleNFT = {
    "description": "NFT Description",
    "external_url": "https://austingriffith.com/portfolio/paintings/ || image URL",
    "image": "https://austingriffith.com/images/paintings/buffalo.jpg || exact image URL",
    "name": "sample"
  }
  console.log("Uploading sample...")
  const uploaded = await ipfs.add(JSON.stringify(sampleNFT))

  console.log("Minting sample with IPFS hash ("+uploaded.path+")")
  await yourCollectible.mintItem(toAddress,uploaded.path,{gasLimit:400000})


  await sleep(delayMS)
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
