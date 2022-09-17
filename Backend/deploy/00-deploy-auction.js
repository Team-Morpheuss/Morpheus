module.exports = async ({getNamedAccounts, deployments}) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    const rewardToken = await deploy("RewardToken", {
        from: deployer,
        args: [],
        log: true,
    })
}

module.exports.tags = ["all", "rewardToken"]

// 0x5FbDB2315678afecb367f032d93F642f64180aa3