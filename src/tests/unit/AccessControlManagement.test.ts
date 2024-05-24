import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("AccessControlManagement", function () {
  let AccessControlManagement: any;
  let accessControl: any;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const AccessControlManagementFactory = await ethers.getContractFactory("AccessControlManagement");
    accessControl = await AccessControlManagementFactory.deploy();
    await accessControl.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right admin role to the deployer", async function () {
      expect(await accessControl.hasRole(await accessControl.DEFAULT_ADMIN_ROLE(), owner.address)).to.be.true;
    });

    it("Should set the right CEO role to the deployer", async function () {
      expect(await accessControl.hasRole(await accessControl.CEO(), owner.address)).to.be.true;
    });
  });

  describe("Role Management", function () {
    it("Should allow admin to assign roles", async function () {
      await accessControl.assignRole(await accessControl.CEO(), addr1.address);
      expect(await accessControl.hasRole(await accessControl.CEO(), addr1.address)).to.be.true;
    });

    it("Should allow admin to revoke roles", async function () {
      await accessControl.assignRole(await accessControl.CEO(), addr1.address);
      await accessControl.revokeRole(await accessControl.CEO(), addr1.address);
      expect(await accessControl.hasRole(await accessControl.CEO(), addr1.address)).to.be.false;
    });
  });

  describe("Access Control", function () {
    it("Should revert if a non-admin tries to assign roles", async function () {
      await expect(
        accessControl.connect(addr1).assignRole(await accessControl.CEO(), addr2.address)
      ).to.be.revertedWith("AccessControl: account does not have required role");
    });

    it("Should revert if a non-admin tries to revoke roles", async function () {
      await accessControl.assignRole(await accessControl.CEO(), addr1.address);
      await expect(
        accessControl.connect(addr1).revokeRole(await accessControl.CEO(), owner.address)
      ).to.be.revertedWith("AccessControl: account does not have required role");
    });
  });
});
