import React from 'react'
import { ethers } from 'ethers'
import { readContract, readContracts, prepareWriteContract, waitForTransaction, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { ThreeDots } from 'react-loading-icons'

const jibjib = '0xb6aaD2B2f9fD5eA0356F49c60Ee599De56206251'
const tunaField = '0x09676315DC0c85F6bd5e866C5f1363A00Eec4381'

const FishingField = ({ intrasubModetext, navigate, setisLoading, txupdate, setTxupdate, aurora721ABI, tunaFieldABI }) => {
    let { address } = useAccount()
    const youraddr = address
    if (intrasubModetext === undefined || intrasubModetext.toUpperCase() === "YOURBAG") {
        navigate('/fields/tuna-lake/' + address)
    } else if (intrasubModetext.length === 42) {
        address = intrasubModetext
    } else if (address === undefined) {
    } else {
        navigate('/fields/tuna-lake/' + address)
    }

    const [nft, setNft] = React.useState([])
    const [nftStaked, setNftStaked] = React.useState([])
    const [allDaily, setAllDaily] = React.useState(0)
    const [allReward, setAllReward] = React.useState(0)
    const [tunaBalance, setTunaBalance] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)
        setNft([])
        
        const thefetch = async () => {
            const balanceofstake = await readContract({
                address: jibjib,
                abi: aurora721ABI,
                functionName: 'walletOfOwner',
                args: [tunaField],
            })
            const data = address !== null && address !== undefined ? await readContracts({
                contracts: balanceofstake.map((item) => (
                    {
                        address: tunaField,
                        abi: tunaFieldABI,
                        functionName: 'nftStake',
                        args: [String(item)],
                    }
                ))
            }) : [Array(balanceofstake.length).fill('')]

            let nfts = []
            let nftstaked = []
            let yournftstake = []

            for (let i = 0; i <= balanceofstake.length - 1; i++) {
                if (data[i].result[0].toUpperCase() === address.toUpperCase()) {
                    yournftstake.push({Id: String(balanceofstake[i])})
                }
            }

            const data2 = address !== null && address !== undefined ? await readContracts({
                contracts: yournftstake.map((item) => (
                    {
                        address: tunaField,
                        abi: tunaFieldABI,
                        functionName: 'calculateRewards',
                        args: [String(item.Id)],
                    }
                ))
            }) : [Array(yournftstake.length).fill(0)]

            let _allDaily = 0
            let _allReward = 0
            for (let i = 0; i <= yournftstake.length - 1; i++) {
                const response = await fetch("https://gateway.pinata.cloud/ipfs/bafybeih4u5b5kkmc2mms5z3frywy77c4jr45u5wu67h22cdz45vlvaoqiy/" + yournftstake[i].Id + ".json")
                const _nft = await response.json()

                let bonus;
                if (Number(yournftstake[i].Id) >= 61) {
                    bonus = 2;
                } else if (Number(yournftstake[i].Id) >= 31 && Number(yournftstake[i].Id) <= 59) {
                    bonus = 5;
                } else if (Number(yournftstake[i].Id) >= 11 && Number(yournftstake[i].Id) <= 29) {
                    bonus = 10;
                } else if (Number(yournftstake[i].Id) <= 10) {
                    bonus = 25;
                }
                _allDaily += Number(ethers.utils.formatEther(String(bonus * 10**14)))
                _allReward += Number(ethers.utils.formatEther(String(data2[i].result)))

                nfts.push({
                    Id: Number(yournftstake[i].Id),
                    Name: _nft.name,
                    Image: "https://gateway.pinata.cloud/ipfs/bafybeidmedlvbae3t7gffvgakbulid4zpr7eqenx2rdsbbvkb6ol3xplpq/" + yournftstake[i].Id + ".png",
                    Attribute: _nft.attributes,
                    RewardPerSec: bonus,
                    isStaked: true,
                    Reward: String(data2[i].result)
                })
                nftstaked.push({Id: Number(yournftstake[i].Id)})
            }

            const balanceofyou = address !== null && address !== undefined ? await readContract({
                address: jibjib,
                abi: aurora721ABI,
                functionName: 'walletOfOwner',
                args: [address],
            }) : []
            for (let i = 0; i <= balanceofyou.length - 1; i++) {
                const response = await fetch("https://gateway.pinata.cloud/ipfs/bafybeih4u5b5kkmc2mms5z3frywy77c4jr45u5wu67h22cdz45vlvaoqiy/" + balanceofyou[i] + ".json")
                const _nft = await response.json()

                let bonus;
                if (Number(balanceofyou[i]) >= 61) {
                    bonus = 2;
                } else if (Number(balanceofyou[i]) >= 31 && Number(balanceofyou[i]) <= 59) {
                    bonus = 5;
                } else if (Number(balanceofyou[i]) >= 11 && Number(balanceofyou[i]) <= 29) {
                    bonus = 10;
                } else if (Number(balanceofyou[i]) <= 10) {
                    bonus = 25;
                }

                nfts.push({
                    Id: Number(balanceofyou[i]),
                    Name: _nft.name,
                    Image: "https://gateway.pinata.cloud/ipfs/bafybeidmedlvbae3t7gffvgakbulid4zpr7eqenx2rdsbbvkb6ol3xplpq/" + balanceofyou[i] + ".png",
                    Attribute: _nft.attributes,
                    RewardPerSec: bonus,
                    isStaked: false,
                    Reward: 0
                })
            }

            const tunaBal = address !== null && address !== undefined ? await readContract({
                address: tunaField,
                abi: tunaFieldABI,
                functionName: 'balanceOf',
                args: [address],
            }) : 0

            return [nfts, balanceofstake.length, nftstaked, _allReward, _allDaily, tunaBal, ]
        }

        const promise = thefetch()

        const getAsync = () =>
            new Promise((resolve) => 
                setTimeout(
                    () => resolve(promise), 1000
                )
            )

        getAsync().then(result => {
            result[1] > 0 && result[0].length > 0 && address !== undefined ? setNft(result[0]) : setNft([null])
            setNftStaked(result[2])
            setAllReward(result[3])
            setAllDaily(result[4] * 86400)
            setTunaBalance(ethers.utils.formatEther(String(result[5])))
        })

    }, [address, txupdate, aurora721ABI, tunaFieldABI])

    const stakeNft = async (_nftid) => {
        setisLoading(true)
        try {
            const nftAllow = await readContract({
                address: jibjib,
                abi: aurora721ABI,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== tunaField.toUpperCase()) {
                const config = await prepareWriteContract({
                    address: jibjib,
                    abi: aurora721ABI,
                    functionName: 'approve',
                    args: [tunaField, _nftid],
                })
                const { hash: hash0 } = await writeContract(config)
                await waitForTransaction({ hash: hash0 })
            }        
            const config2 = await prepareWriteContract({
                address: tunaField,
                abi: tunaFieldABI,
                functionName: 'stake',
                args: [_nftid],
            })
            const { hash: hash1 } = await writeContract(config2)
            await waitForTransaction({ hash: hash1 })
            setTxupdate(hash1)
        } catch {}
        setisLoading(false)
    }

    const unstakeNft = async (_nftid, _unstake) => {
        setisLoading(true)
        try {
            const config = await prepareWriteContract({
                address: tunaField,
                abi: tunaFieldABI,
                functionName: 'unstake',
                args: [_nftid, _unstake],
            })
            const { hash: hash1 } = await writeContract(config)
            await waitForTransaction({ hash: hash1 })
            setTxupdate(hash1)
        } catch {}
        setisLoading(false)
    }

    const unstakeNftAll = async () => {
        setisLoading(true)
        try {
            for (let i = 0; i <= nftStaked.length - 1; i++) {
                const config = await prepareWriteContract({
                    address: tunaField,
                    abi: tunaFieldABI,
                    functionName: 'unstake',
                    args: [nftStaked[i].Id, false],
                })
                if (i === nftStaked.length - 1) {
                    const { hash: hash1 } = await writeContract(config)
                    await waitForTransaction({ hash: hash1 })
                    setTxupdate(hash1)
                } else {
                    writeContract(config)
                }
            }
        } catch {}
        setisLoading(false)
    }


    return (
    <>
        <div className="fieldBanner" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", textAlign: "left", backgroundImage: "url('https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreib4lsq5nxdq2srf3rb6n7ksm4ykkz2twldneu6k46fimij3iq4zye')", overflow: "scroll"}}>
            <div style={{flexDirection: "column", margin: "30px 100px"}}>
                <div className="pixel" style={{fontSize: "75px", color: "#fff", width: "fit-content", padding: "0 10px"}}>Tuna Lake</div>
                <div style={{fontSize: "17px", color: "#fff", width: "fit-content", marginTop: "15px", padding: "0 10px"}} className="pixel">Stake Cat Meaw JIB JIB to earn $TUNA.</div>
            </div>
            <div style={{margin: "30px 100px"}}>
                <img src="https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe" width="150" alt="$TUNA" />
            </div>
        </div>

        <div style={{margin: "0", paddingTop: "30px", minHeight: "fit-content", alignItems: "flex-start", justifyContent: "flex-start", fontSize: "14px"}} className="collection pixel">
            <div style={{width: "95%", minHeight: "120px", height: "fit-content", margin: "10px", padding: "20px", fontSize: "10px", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}} className="nftCard">
                <div style={{height: "90%", display: "flex", flexDirection: "column", justifyContent: "space-around"}} className="bold">
                    <div style={{marginBottom: "20px"}}>JIBJIB ON WALLET</div>
                    <div style={{fontSize: "24px"}} className="emp">{nft.length > 0 && nft[0] !== null ? nft.length : 0}</div>
                </div>
                <div style={{height: "90%", display: "flex", flexDirection: "column", justifyContent: "space-around"}} className="bold">
                    <div style={{marginBottom: "20px"}}>TOTAL DAILY REWARD</div>
                    <div style={{fontSize: "24px"}} className="emp">
                        {nft.length > 0 && nft[0] !== null ? allDaily.toFixed(2) : 0}
                        <img style={{marginLeft: "10px"}} src="https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe" width="24" alt="$TUNA"/>
                    </div>
                </div>
                <div style={{height: "90%", display: "flex", flexDirection: "column", justifyContent: "space-around"}} className="bold">
                    <div style={{marginBottom: "20px"}}>TOTAL PENDING REWARD</div>
                    <div style={{fontSize: "24px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                        {nft.length > 0 && nft[0] !== null ? allReward.toFixed(3) : 0}
                        <img style={{margin: "0 10px"}} src="https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe" width="24" alt="$TUNA"/>
                        <>
                            {address !== undefined && address === youraddr && allReward > 0 ?
                                <div style={{lineHeight: 2}} className="button" onClick={unstakeNftAll}>HARVEST ALL</div> :
                                <div style={{lineHeight: 2, background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST ALL</div>
                            }
                        </>
                    </div>
                </div>
                <div style={{height: "90%", display: "flex", flexDirection: "column", justifyContent: "space-around"}} className="bold">
                    <div style={{marginBottom: "20px"}}>TUNA BALANCE</div>
                    <div style={{fontSize: "24px"}}>
                        {nft.length > 0 ? Number(tunaBalance).toFixed(3) : 0}
                        <img style={{marginLeft: "10px"}} src="https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe" width="24" alt="$TUNA"/>
                    </div>
                </div>
            </div>
            <div style={{margin: "40px 0 80px 0", width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap"}}>
                {nft.length > 0 ?
                    <>
                    {nft[0] !== null ?
                        <>
                        {nft.map((item, index) => (
                            <div style={{margin: "10px", padding: "30px 20px", justifyContent: "space-around", fontSize: "14px"}} className="nftCard pixel" key={index}>
                                <img
                                    src={item.Image}
                                    width="150"
                                    alt="nftpic"
                                />
                                <div>{item.Name}</div>
                                <div style={{width: 300, display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    {item.isStaked ?
                                        <>
                                            <div style={{background: "rgb(239, 194, 35)", width: 16, height: 16, borderRadius: "50%", marginRight: 7}}></div>
                                            <div style={{color: "black"}}>On Staking</div>
                                        </> :
                                        <>
                                            <div style={{background: "rgb(29, 176, 35)", width: 16, height: 16, borderRadius: "50%", marginRight: 7}}></div>
                                            <div style={{color: "black"}}>Available for stake</div>
                                        </>
                                    }
                                </div>
                                <div>
                                    Earn: {ethers.utils.formatEther(String(item.RewardPerSec * 86400 * 10**14))}
                                    &nbsp;
                                    <img src="https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe" width="12" alt="$TUNA"/>
                                    TUNA/DAY
                                </div>
                                <div style={{width: 300, padding: 20, border: "1px solid #dddade", borderRadius: 12, display: "flex", flexDirection: "row", alignItem: "center", justifyContent: "space-between"}}>
                                    <div style={{lineHeight: 2, fontSize: "12px", textAlign: "left"}}>
                                        Pending Rewards<br></br>
                                        <img src="https://apricot-secure-ferret-190.mypinata.cloud/ipfs/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe" width="12" alt="$TUNA"/>
                                        {ethers.utils.formatEther(String(item.Reward))}
                                    </div>
                                    {item.Reward > 0 ?
                                        <div style={{lineHeight: 2}} className="button" onClick={() => {unstakeNft(item.Id, false)}}>HARVEST</div> :
                                        <div style={{lineHeight: 2, background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST</div>
                                    }
                                </div>
                                {item.isStaked ?
                                    <div style={{background: "gray"}} className="button" onClick={() => {unstakeNft(item.Id, true)}}>UNSTAKE</div> :
                                    <div className="button" onClick={() => {stakeNft(item.Id)}}>STAKE</div>
                                }
                            </div>
                        ))}
                        </> :
                        <div className="nftCard" style={{margin: "10px", padding: "30px 20px", justifyContent: "center"}}>
                            {address !== undefined ?
                                <>
                                    <img src="https://l3img.b-cdn.net/ipfs/QmUmf3MEZg99qqLJ6GsewESVum8sm72gfH3wyiVPZGH6HA" width="150" alt="No_NFTs" />
                                    <div style={{marginTop: "30px"}} className="bold">This wallet doesn't have NFTs.</div>
                                </> :
                                <>
                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fa fa-sign-in"></i>
                                    <div className="bold">Please connect wallet to view your NFTs.</div>
                                </>
                            }
                        </div>
                    }
                    </> :
                    <div className="nftCard" style={{margin: "10px", padding: "30px 20px", justifyContent: "center"}}>
                        <ThreeDots fill="#5f6476" />
                        <div className="bold" style={{marginTop: "80px"}}>Loading NFTs...</div>
                    </div>
                }
            </div>
        </div>
    </>
    )
}

export default FishingField