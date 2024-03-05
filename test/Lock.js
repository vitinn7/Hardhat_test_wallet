const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("Simple_Token contract", function () {
  let SimpleToken;
  let simpleToken;
  let owner;

  beforeEach(async function () {
    SimpleToken = await ethers.getContractFactory("Simple_Token");
    [owner] = await hre.ethers.getSigners();  // Obter o dono (owner) da lista de signatários
    simpleToken = await SimpleToken.deploy(1000000);
  });

  it("should have the correct name", async function () {
    const tokenName = await simpleToken.name();
    expect(tokenName).to.equal("CARCARA");
  });

  it("should have the correct initial supply", async function () {
    const initialSupply = 1000000;
    const ownerBalance = await simpleToken.balanceOf(owner.address);
    expect(ownerBalance).to.equal(initialSupply);
  });
});
