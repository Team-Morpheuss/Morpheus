const { ethers } = require("hardhat")

module.exports = async ({getNamedAccounts, deployments}) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    const rewardToken = await ethers.getContract("RewardToken") 

    const stakingDeployment = await deploy("Staking", {
        from: deployer,
        args: [rewardToken.address, rewardToken.address],
        log: true,
    })
     
}

module.exports.tags = ["all", "staking"]

//  0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 