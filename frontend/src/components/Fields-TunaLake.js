import React from 'react'
import { ethers } from 'ethers'
import { readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react';
import { ThreeDots } from 'react-loading-icons'

const jibjib = '0xb6aaD2B2f9fD5eA0356F49c60Ee599De56206251'
const tunaField = '0x09676315DC0c85F6bd5e866C5f1363A00Eec4381'

const TunaLake = ({ config, intrasubModetext, callMode, navigate, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, aurora721ABI, tunaFieldABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [addr, setAddr] = React.useState(address)
    const [nft, setNft] = React.useState([])
    const [nftStaked, setNftStaked] = React.useState([])
    const [allDaily, setAllDaily] = React.useState(0)
    const [allReward, setAllReward] = React.useState(0)
    const [tunaBalance, setTunaBalance] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)
        if (intrasubModetext === undefined) {
            navigate('/fields/tuna-lake/' + address)
        } else if (intrasubModetext.length === 42) {
            setAddr(intrasubModetext)
        } else if (address === undefined) {
            navigate('/fields/tuna-lake/null')
        } else {
            navigate('/fields/tuna-lake/' + address)
        }
        setNft([])
        
        const thefetch = async () => {
            const balanceofstake = addr !== null ? await readContract(config, {
                address: jibjib,
                abi: aurora721ABI,
                functionName: 'walletOfOwner',
                args: [tunaField],
                chainId: 8899
            }) : []
            const data = addr !== null ? await readContracts(config, {
                contracts: balanceofstake.map((item) => (
                    {
                        address: tunaField,
                        abi: tunaFieldABI,
                        functionName: 'nftStake',
                        args: [String(item)],
                        chainId: 8899
                    }
                ))
            }) : null

            let nfts = []
            let nftstaked = []
            let yournftstake = []
            for (let i = 0; i <= balanceofstake.length - 1; i++) {
                if (data[i].result[0].toUpperCase() === addr.toUpperCase()) {
                    yournftstake.push({Id: String(balanceofstake[i])})
                }
            }
            const data2 = addr !== null ? await readContracts(config, {
                contracts: yournftstake.map((item) => (
                    {
                        address: tunaField,
                        abi: tunaFieldABI,
                        functionName: 'calculateRewards',
                        args: [String(item.Id)],
                        chainId: 8899
                    }
                ))
            }) : 0
            let _allDaily = 0
            let _allReward = 0
            for (let i = 0; i <= yournftstake.length - 1; i++) {
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
                    Name: 'CM Hexa Cat Meaw JIB JIB #' + String(yournftstake[i].Id),
                    Image: "https://gateway.pinata.cloud/ipfs/bafybeidmedlvbae3t7gffvgakbulid4zpr7eqenx2rdsbbvkb6ol3xplpq/" + yournftstake[i].Id + ".png",
                    RewardPerSec: bonus,
                    isStaked: true,
                    Reward: String(data2[i].result)
                })
                nftstaked.push({Id: Number(yournftstake[i].Id)})
            }

            const balanceofyou = addr !== null ? await readContract(config, {
                address: jibjib,
                abi: aurora721ABI,
                functionName: 'walletOfOwner',
                args: [addr],
                chainId: 8899
            }) : []
            for (let i = 0; i <= balanceofyou.length - 1; i++) {
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
                    Name: 'CM Hexa Cat Meaw JIB JIB #' + Number(balanceofyou[i]),
                    Image: "https://gateway.pinata.cloud/ipfs/bafybeidmedlvbae3t7gffvgakbulid4zpr7eqenx2rdsbbvkb6ol3xplpq/" + balanceofyou[i] + ".png",
                    RewardPerSec: bonus,
                    isStaked: false,
                    Reward: 0
                })
            }
            if (nfts.length === 0) { nfts.push(null) }

            const tunaBal = addr !== null ? await readContract(config, {
                address: tunaField,
                abi: tunaFieldABI,
                functionName: 'balanceOf',
                args: [addr],
            }) : 0

            return [nfts, nftstaked, _allReward, _allDaily, tunaBal, ]
        }

        const promise = thefetch()

        const getAsync = () =>
            new Promise((resolve) => 
                setTimeout(
                    () => resolve(promise), 1000
                )
            )

        getAsync().then(result => {
            setNft(result[0])
            setNftStaked(result[1])
            setAllReward(result[2])
            setAllDaily(result[3] * 86400)
            setTunaBalance(ethers.utils.formatEther(result[4]))
        })

    }, [config, address, addr, intrasubModetext, navigate, chain, txupdate, aurora721ABI, tunaFieldABI])

    const stakeNft = async (_nftid) => {
        setisLoading(true)
        try {
            const nftAllow = await readContract(config, {
                address: jibjib,
                abi: aurora721ABI,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== tunaField.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: jibjib,
                    abi: aurora721ABI,
                    functionName: 'approve',
                    args: [tunaField, _nftid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }        
            let { request } = await simulateContract(config, {
                address: tunaField,
                abi: tunaFieldABI,
                functionName: 'stake',
                args: [_nftid],
            })
            let h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            setTxupdate(h)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    const unstakeNft = async (_nftid, _unstake) => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: tunaField,
                abi: tunaFieldABI,
                functionName: 'unstake',
                args: [_nftid, _unstake],
            })
            let h = await writeContract(config, request)
            await waitForTransactionReceipt(config, { hash: h })
            setTxupdate(h)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    const unstakeNftAll = async () => {
        setisLoading(true)
        try {
            for (let i = 0; i <= nftStaked.length - 1; i++) {
                let { request } = await simulateContract(config, {
                    address: tunaField,
                    abi: tunaFieldABI,
                    functionName: 'unstake',
                    args: [nftStaked[i].Id, false],
                })
                if (i === nftStaked.length - 1) {
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                    setTxupdate(h)
                } else {
                    await writeContract(config, request)
                }
            }
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    return (
        <>
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", backgroundImage: "url('/maps/bafkreib4lsq5nxdq2srf3rb6n7ksm4ykkz2twldneu6k46fimij3iq4zye.png')", overflow: "scroll"}}>
                <div className="SubfieldBanner">
                    <div className="pixel" style={{padding: "5px", width: "fit-content", color: "#fff", background: "rgb(0, 0, 0, 0.6)", backdropFilter: "blur(10px)"}}>Tuna Lake</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="150" alt="$TUNA" />
                </div>
            </div>

            {address !== null && chain !== undefined && chain.id !== 8899 ?
                <div style={{zIndex: "999"}} className="centermodal">
                    <div className="wrapper">
                        <div className="pixel" style={{border: "1px solid rgb(70, 55, 169)", boxShadow: "6px 6px 0 #00000040", width: "500px", height: "fit-content", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", fontSize: "40px", letterSpacing: "3px"}}>
                        <div style={{width: "90%", textAlign: "left", fontSize: "36px"}} className="emp">MISMATCH CHAIN!</div>
                        <div style={{marginTop: "20px", width: "90%", textAlign: "left", fontSize: "14px"}}>Please switch your network to JIBCHAIN L1.</div>
                        <div className="button" style={{marginTop: "40px", width: "50%"}} onClick={() => open({ view: 'Networks' })}>SWITCH NETWORK</div>
                        <div className="button" style={{marginTop: "10px", width: "50%", background: "gray"}} onClick={() => {callMode(0); navigate('/');}}>BACK TO HOME</div>
                        </div>
                    </div>
                </div> :
                <div style={{margin: "0", paddingTop: "30px", minHeight: "fit-content", alignItems: "flex-start", justifyContent: "flex-start", fontSize: "14px"}} className="collection pixel">
                    <div style={{width: "82%", minHeight: "120px", height: "fit-content", margin: "30px 10px 50px 10px", padding: "20px", fontSize: "10px", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap"}} className="nftCard">
                        <div className="headfield bold">
                            <div style={{marginBottom: "20px"}}>ELIGIBLE NFT IN WALLET</div>
                            <div style={{fontSize: "24px", marginBottom: "20px"}}>{nft.length > 0 && nft[0] !== null ? nft.length : 0}</div>
                        </div>
                        <div className="headfield bold">
                            <div style={{marginBottom: "20px"}}>TOTAL DAILY REWARD</div>
                            <div style={{fontSize: "24px", marginBottom: "20px"}}>
                                {nft.length > 0 && nft[0] !== null ? allDaily.toFixed(2) : 0}
                                <img style={{marginLeft: "10px"}} src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="24" alt="$TUNA"/>
                            </div>
                        </div>
                        <div className="headfield bold">
                            <div style={{marginBottom: "20px"}}>TOTAL PENDING REWARD</div>
                            <div style={{fontSize: "24px", marginBottom: "20px", display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "center"}}>
                                {nft.length > 0 && nft[0] !== null ? allReward.toFixed(3) : 0}
                                <img style={{margin: "0 10px"}} src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="24" alt="$TUNA"/>
                                {address !== null && intrasubModetext !== undefined ?
                                    <>
                                        {address.toUpperCase() === intrasubModetext.toUpperCase() && allReward > 0 ?
                                            <div style={{lineHeight: 2, padding: "2px 20px"}} className="button" onClick={unstakeNftAll}>HARVEST ALL</div> :
                                            <div style={{lineHeight: 2, padding: "2px 20px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST ALL</div>
                                        }
                                    </> :
                                    <div style={{lineHeight: 2, padding: "2px 20px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST ALL</div>
                                }
                            </div>
                        </div>
                        <div className="headfield bold">
                            <div style={{marginBottom: "20px"}}>BALANCE</div>
                            <div style={{fontSize: "24px", marginBottom: "20px"}}>
                                {nft.length > 0 ? Number(tunaBalance).toFixed(3) : 0}
                                <img style={{marginLeft: "10px"}} src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="24" alt="$TUNA"/>
                            </div>
                        </div>
                    </div>
                    <div style={{marginBottom: "80px", width: "100%", display: "flex", flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap"}}>
                        {nft.length > 0 ?
                            <>
                                {nft[0] !== null ?
                                    <>
                                        {nft.map((item, index) => (
                                            <div style={{margin: "10px", padding: "30px 20px", justifyContent: "space-around", fontSize: "14px"}} className="nftCard pixel" key={index}>
                                                <img src={item.Image} width="150" alt="Can not load metadata." />
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
                                                    <img src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="12" alt="$TUNA"/>
                                                    TUNA/DAY
                                                </div>
                                                <div style={{width: 300, padding: 20, border: "1px solid #dddade", borderRadius: 12, display: "flex", flexDirection: "row", alignItem: "center", justifyContent: "space-between"}}>
                                                    <div style={{lineHeight: 2, fontSize: "12px", textAlign: "left"}}>
                                                        Pending Rewards<br></br>
                                                        <img src="/tokens/bafkreifqroahbmxgnmsqdot5bzu3xbsa7y27mnlo6k45efgidmqxqrstbe.png" width="12" alt="$TUNA"/>
                                                        {ethers.utils.formatEther(String(item.Reward))}
                                                    </div>
                                                    {address !== null && intrasubModetext !== undefined ?
                                                        <>
                                                            {address.toUpperCase() === intrasubModetext.toUpperCase() && item.Reward > 0 ?
                                                                <div style={{lineHeight: 2}} className="button" onClick={() => {unstakeNft(item.Id, false)}}>HARVEST</div> :
                                                                <div style={{lineHeight: 2, background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST</div>
                                                            }
                                                        </> :
                                                        <div style={{lineHeight: 2, background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST</div>
                                                    }
                                                </div>
                                                {address !== null && intrasubModetext !== undefined && 
                                                    <>
                                                        {address.toUpperCase() === intrasubModetext.toUpperCase() &&
                                                            <>
                                                                {item.isStaked ?
                                                                    <div style={{background: "gray"}} className="button" onClick={() => {unstakeNft(item.Id, true)}}>UNSTAKE</div> :
                                                                    <div className="button" onClick={() => {stakeNft(item.Id)}}>STAKE</div>
                                                                }
                                                            </>
                                                        }
                                                    </>
                                                }
                                            </div>
                                        ))}
                                    </> :
                                    <div className="nftCard" style={{margin: "10px", padding: "30px 20px", justifyContent: "center"}}>
                                        {address !== null ?
                                            <>
                                                <img src="/background/QmUmf3MEZg99qqLJ6GsewESVum8sm72gfH3wyiVPZGH6HA.svg" width="150" alt="No_NFTs" />
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
            }
        </>
    )
}

export default TunaLake