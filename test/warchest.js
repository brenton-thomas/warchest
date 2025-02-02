
const {expect}  = require("chai");
const {hre} = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  

const DEBUG_TRACE=true;

function debug_location(location){
    //convenience function to help know where I am 
    const dashes = "----------"
    if(DEBUG_TRACE){
        console.log("\n",dashes,location,dashes,"\n")
    } 
}

function debug_trace(...args){
    //convenience function to help know where I am 
    if(DEBUG_TRACE){
        console.log("DEBUG_TRACE",...args)
    } 
}

describe("TEST>> Warchest", function () {

    async function deployInitialTestFixture(){
        debug_location("deployInitialTestFixture");
        
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const Warchest = await ethers.getContractFactory("Warchest");
        const warchest = await Warchest.deploy();

        return { warchest, owner, otherAccount };
    }


    describe("TEST>> Deployment", function () {
        debug_location("Deployment");

        it("the token owner should exist as the owner assigned", async function () {

            //shouldn't get messed up along the way.....
            const { warchest, owner } = await loadFixture(deployInitialTestFixture);
            const [tst_owner] = await ethers.getSigners();

            expect(tst_owner.address).to.equal(owner.address);

            debug_trace("Deployment: tst_owner.address", tst_owner.address )
            debug_trace("Deployment: owner.address", owner.address );
        })

        it("the correct initial value should be assigned", async function () {

            //care here the number of tokens is in GWEI_MULT units
            const { warchest, owner } = await loadFixture(deployInitialTestFixture);
            const ownerBalance = await warchest.balanceOf(owner.address);

            x=await warchest.totalSupply();
            expect(x).to.equal(ownerBalance);
      
            debug_trace("Deployment: owner.address", owner.address);
            debug_trace("Deployment: warchest.totalSupply()", x); 
            debug_trace("Deployment: ownerBalance", ownerBalance);
        })

        it("its name should be WARCHEST", async function () {

            const { warchest, owner } = await loadFixture(deployInitialTestFixture);
            
            x=await warchest.name();
            expect(x).to.equal("WARCHEST");
      
            debug_trace("Deployment: warchest.name()", x );
        })

        it("its symbol should be WAR", async function () {

            const { warchest, owner } = await loadFixture(deployInitialTestFixture);
            
            x=await warchest.symbol();
            expect(x).to.equal("WAR");
      
            debug_trace("Deployment: warchest.symbol()", x);
        })

        it("its decimals should be 18", async function () {

            //care here the number of tokens is in GWEI_MULT units
            const { warchest, owner } = await loadFixture(deployInitialTestFixture);
            
            x=await warchest.decimals();
            expect(x).to.equal(18);
      
            debug_trace("Deployment: warchest.decimals()", x );
        })
    })    
})