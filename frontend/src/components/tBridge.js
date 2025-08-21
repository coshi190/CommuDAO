import React from 'react'
import { ethers } from 'ethers'
import { readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'

const jusdt = '0x24599b658b57f91E7643f4F154B16bcd2884f9ac'
const kusdt = '0x7d984C24d2499D840eB3b7016077164e15E5faA6'
const usdtBsc = '0x55d398326f99059ff775485246999027b3197955' 

const TBridge = ({ config, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, erc20Abi }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const [mode, setMode] = React.useState(1)
    const [reserve, setReserve] = React.useState(0)
    const [supply, setSupply] = React.useState(0)
    const [reserve2, setReserve2] = React.useState(0)
    const [supply2, setSupply2] = React.useState(0)
    const [kusdtBalance, setKusdtBalance] = React.useState(0)
    const [jusdtBalance, setJusdtBalance] = React.useState(0)
    const [usdtBscBalance, setUsdtBscBalance] = React.useState(0)
    const [depositValue, setDepositValue] = React.useState(null)
    const [depositValueDis, setDepositValueDis] = React.useState('')
    const [withdrawValue, setWithdrawValue] = React.useState(null)
    const [withdrawValueDis, setWithdrawValueDis] = React.useState('')
    const [depositValue2, setDepositValue2] = React.useState('')
    const [withdrawValue2, setWithdrawValue2] = React.useState('')

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)
        
        const fetch = async () => {
            const data1 = await readContracts(config, {
                contracts: [
                    {
                        address: kusdt,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: ['0x8622049edEcC20ADA5aDEeaf2Caa53447e68Ae63'],
                        chainId: 96,
                    },
                    {
                        address: jusdt,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: ['0xBb7A653509CDd8C4Ccd34D5834c817Ed3DFD6Fc7'],
                        chainId: 8899,
                    },
                    {
                        address: usdtBsc,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: ['0x92E2fB6B899E715B6D392B7b1b851a9f7aae2dc3'],
                        chainId: 56,
                    },
                    {
                        address: jusdt,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: ['0x9E1baBFC65DA0eBFE11934b1277755Eb3A7d3063'],
                        chainId: 8899,
                    },
                ],
            })
            const data2 = address !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: kusdt,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 96,
                    },
                    {
                        address: jusdt,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899,
                    },
                    {
                        address: usdtBsc,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 56,
                    },
                ],
            }) : [{result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}]
            const Balance = data1[0]
            const Balance2 = data1[1]
            const Balance_2 = data1[2]
            const Balance2_2 = data1[3]
            const kusdtBal = data2[0]
            const jusdtBal = data2[1]
            const usdtBscBal = data2[2]

            return [
                Balance, Balance2, kusdtBal, jusdtBal, usdtBscBal, usdtBscBal, usdtBscBal, Balance_2, Balance2_2, Balance2_2,
            ]
        }

        const promise = fetch()
    
        const getAsync = () =>
            new Promise((resolve) => 
                setTimeout(
                    () => resolve(promise), 1000
                )
            )

        getAsync().then(result => {
            setReserve(ethers.utils.formatEther(result[0].result))
            setSupply(ethers.utils.formatEther(result[1].result))
            setKusdtBalance(Math.floor((ethers.utils.formatEther(result[2].result)) * 10000) / 10000)
            setJusdtBalance(Math.floor((ethers.utils.formatEther(result[3].result)) * 10000) / 10000)
            setUsdtBscBalance(Math.floor((ethers.utils.formatEther(result[6].result)) * 10000) / 10000)
            setReserve2(ethers.utils.formatEther(result[7].result))
            setSupply2(ethers.utils.formatEther(result[8].result))
        })
    }, [config, address, txupdate, erc20Abi])

    const handleDeposit = (event) => {
        setDepositValueDis(event.target.value)
        const _value  = event.target.value !== "" ? ethers.utils.parseEther(event.target.value) : 0
        const bigDepositValue = ethers.BigNumber.from(_value)
        setDepositValue(bigDepositValue)
    }
    const depositHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: kusdt,
                abi: erc20Abi,
                functionName: 'transfer',
                args: ["0x8622049edEcC20ADA5aDEeaf2Caa53447e68Ae63", depositValue],
                chainId: 96,
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

    const handleWithdraw = (event) => {
        setWithdrawValueDis(event.target.value)
        const _value  = event.target.value !== "" ? ethers.utils.parseEther(event.target.value) : 0
        const bigWithdrawValue = ethers.BigNumber.from(_value)
        setWithdrawValue(bigWithdrawValue)
    }
    const withdrawHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: jusdt,
                abi: erc20Abi,
                functionName: 'transfer',
                args: ["0xBb7A653509CDd8C4Ccd34D5834c817Ed3DFD6Fc7", withdrawValue],
                chainId: 8899,
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

    const depositHandle2 = async () => {
        setisLoading(true)
        if (Number(depositValue2) <= Number(supply2)) {
            try {
                let { request } = await simulateContract(config, {
                    address: usdtBsc,
                    abi: erc20Abi,
                    functionName: 'transfer',
                    args: ["0x92E2fB6B899E715B6D392B7b1b851a9f7aae2dc3", ethers.utils.parseEther(String(depositValue2))],
                    chainId: 56,
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
                setTxupdate(h)
            } catch (e) {
                setisError(true)
                setErrMsg(String(e))
            }
        }
        setisLoading(false)
    }
    const withdrawHandle2 = async () => {
        setisLoading(true)
        if (Number(withdrawValue2) <= Number(reserve2)) {
            try {
                let { request } = await simulateContract(config, {
                    address: jusdt,
                    abi: erc20Abi,
                    functionName: 'transfer',
                    args: ["0x9E1baBFC65DA0eBFE11934b1277755Eb3A7d3063", ethers.utils.parseEther(String(withdrawValue2))],
                    chainId: 8899,
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
                setTxupdate(h)
            } catch (e) {
                setisError(true)
                setErrMsg(String(e))
            }
        }
        setisLoading(false)
    }

    return (
        <div style={{position: "relative", background: "#3a6ea5", width: "100%", height: "100%", minHeight: "100vh"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexWrap: "wrap", color: "#fff", overflow: "scroll"}} className="noscroll pixel">
                <div style={{marginTop: "120px", width: "70%", display: "flex", flexDirection: "column", textAlign: "left"}}>
                    {(mode === 1 || mode === 12) &&
                        <>
                            <div style={{width: "100%", marginTop: "30px", fontSize: "40px", letterSpacing: "2.5px", display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <img style={{marginRight: "20px"}} height="40px" src="/tokens/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi.png" alt="$JUSDT" />
                                JUSDT
                            </div>
                            <div style={{width: "100%", padding: "20px 0", display: "flex", flexFlow: "row wrap", fontSize: "16px", borderBottom: "2px solid #fff"}}>
                                <div className='hashtag' style={{padding: "10px", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px"}} onClick={() => setMode(1)}><img src="/chains/bafkreien2xny3ki3a4qqfem74vvucreppp6rpe7biozr4jiaom7shmv47a.png" width="25" alt="BKC" /></div>
                                <div className='hashtag' style={{marginLeft: "10px", padding: "10px", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px"}} onClick={() => setMode(12)}><img src="/chains/bafkreibujxj6b6i3n4xtdywo3dp33hhdf6yilwkx42cmm4goxpduy5mvte.png" width="25" alt="BSC" /></div>
                            </div>
                        </>
                    }
                </div>
                {mode === 1 &&
                    <>
                        <div style={{width: "70%", padding: "40px 45px 40px 0", margin: "10px 0", background: "transparent", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "scroll", fontSize: "16px"}} className='noscroll'>
                            <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                                <div style={{width: "300px", marginBottom: "15px", textAlign: "initial", color: "#bdc2c4"}}>
                                    JBC Bridge Contract
                                    <a style={{textDecoration: "none", color: "#fff", marginLeft: "10px"}} href="https://exp-l1.jibchain.net/address/0xBb7A653509CDd8C4Ccd34D5834c817Ed3DFD6Fc7" target="_blank" rel="noreferrer"><div className="fa fa-external-link"></div></a>
                                </div>
                                <div style={{fontSize: "30px"}}>{Number(supply).toLocaleString('en-US', {maximumFractionDigits:2})} JUSDT</div>
                            </div>
                            <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                                <div style={{width: "300px", marginBottom: "20px", textAlign: "initial", color: "#bdc2c4"}}>
                                    BKC Bridge Contract
                                    <a style={{textDecoration: "none", color: "#fff", marginLeft: "10px"}} href="https://www.bkcscan.com/address/0x8622049edEcC20ADA5aDEeaf2Caa53447e68Ae63" target="_blank" rel="noreferrer"><div className="fa fa-external-link"></div></a>
                                </div>
                                <div style={{fontSize: "30px"}}>{Number(reserve).toLocaleString('en-US', {maximumFractionDigits:2})} KUSDT</div>
                            </div>
                            <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                                <div style={{width: "300px", marginBottom: "20px", textAlign: "initial", color: "#bdc2c4"}}>Bridging Fee</div>
                                <div style={{fontSize: "30px"}}>0.10 USDT/TX</div>
                            </div>
                        </div>
                        <div style={{height: "290px", width: "1200px", maxWidth: "90%", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", overflow: "scroll", fontSize: "16px"}} className='noscroll'>
                            <div style={{minWidth: "500px", maxWidth: "500px", padding: "40px 10px", background: "rgb(206, 208, 207)", boxShadow: "rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(255, 255, 255) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"}}>
                                <input
                                    style={{width: "250px", maxWidth: "70%", padding: "10px", margin: "10px 0", backgroundColor: "#fff", color: "#000", border: "2px solid", borderColor: "rgb(136, 140, 143) rgb(255, 255, 255) rgb(255, 255, 255) rgb(136, 140, 143)"}}
                                    type="number"
                                    step="1"
                                    min="1"
                                    placeholder="0.0 KUSDT"
                                    onChange={handleDeposit}
                                    value={depositValueDis}
                                ></input>
                                {(chain !== undefined && address !== null) ? 
                                    <>
                                        {chain.id === 96 ?
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", borderRadius: "0"}} className="button" onClick={depositHandle}>BRIDGE TO JBC</div> : 
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO JBC</div>
                                        }
                                    </> :
                                    <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO JBC</div>
                                }
                                <div style={{width: "92%", margin: "20px 0", textAlign: "left", color: "#000", cursor: "pointer"}} onClick={() => {const bal = {target: {value: String(kusdtBalance)}}; handleDeposit(bal);}}>Balance: {Number(kusdtBalance).toFixed(4)} KUSDT</div>
                            </div>
                            <div style={{minWidth: "500px", maxWidth: "500px", padding: "40px 10px", background: "rgb(206, 208, 207)", boxShadow: "rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(255, 255, 255) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"}}>
                                <input
                                    style={{width: "250px", maxWidth: "70%", padding: "10px", margin: "10px 0", backgroundColor: "#fff", color: "#000", border: "2px solid", borderColor: "rgb(136, 140, 143) rgb(255, 255, 255) rgb(255, 255, 255) rgb(136, 140, 143)"}}
                                    type="number"
                                    step="1"
                                    min="1"
                                    placeholder="0.0 JUSDT"
                                    onChange={handleWithdraw}
                                    value={withdrawValueDis}
                                ></input>
                                {(chain !== undefined && address !== null) ? 
                                    <>
                                        {chain.id === 8899 ?
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", borderRadius: "0"}} className="button" onClick={withdrawHandle}>BRIDGE TO BKC</div> :
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO BKC</div>
                                        }
                                    </> :
                                    <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO BKC</div>
                                }
                                <div style={{width: "92%", margin: "20px 0", textAlign: "left", color: "#000", cursor: "pointer"}} onClick={() => {const bal = {target: {value: String(jusdtBalance)}}; handleWithdraw(bal);}}>Balance: {Number(jusdtBalance).toFixed(4)} JUSDT</div>
                            </div>
                        </div>
                    </>
                }
                {mode === 12 &&
                    <>
                        <div style={{width: "70%", padding: "40px 45px 40px 0", margin: "10px 0", background: "transparent", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", overflow: "scroll", fontSize: "16px"}} className='noscroll'>
                            <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                                <div style={{width: "300px", marginBottom: "15px", textAlign: "initial", color: "#bdc2c4"}}>
                                    JBC Bridge Contract
                                    <a style={{textDecoration: "none", color: "#fff", marginLeft: "10px"}} href="https://exp-l1.jibchain.net/address/0x9E1baBFC65DA0eBFE11934b1277755Eb3A7d3063" target="_blank" rel="noreferrer"><div className="fa fa-external-link"></div></a>
                                </div>
                                <div style={{fontSize: "30px"}}>{Number(supply2).toLocaleString('en-US', {maximumFractionDigits:2})} JUSDT</div>
                            </div>
                            <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                                <div style={{width: "300px", marginBottom: "20px", textAlign: "initial", color: "#bdc2c4"}}>
                                    BSC Bridge Contract
                                    <a style={{textDecoration: "none", color: "#fff", marginLeft: "10px"}} href="https://bscscan.com/address/0x92e2fb6b899e715b6d392b7b1b851a9f7aae2dc3" target="_blank" rel="noreferrer"><div className="fa fa-external-link"></div></a>
                                </div>
                                <div style={{fontSize: "30px"}}>{Number(reserve2).toLocaleString('en-US', {maximumFractionDigits:2})} USDT</div>
                            </div>
                            <div style={{height: "80%", padding: "40px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
                                <div style={{width: "300px", marginBottom: "20px", textAlign: "initial", color: "#bdc2c4"}}>Bridging Fee</div>
                                <div style={{fontSize: "30px"}}>0.50 USDT/TX</div>
                            </div>
                        </div>
                        <div style={{height: "290px", width: "1200px", maxWidth: "90%", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", overflow: "scroll", fontSize: "16px"}} className='noscroll'>
                            <div style={{minWidth: "500px", maxWidth: "500px", padding: "40px 10px", background: "rgb(206, 208, 207)", boxShadow: "rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(255, 255, 255) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"}}>
                                <input
                                    style={{width: "250px", maxWidth: "70%", padding: "10px", margin: "10px 0", backgroundColor: "#fff", color: "#000", border: "2px solid", borderColor: "rgb(136, 140, 143) rgb(255, 255, 255) rgb(255, 255, 255) rgb(136, 140, 143)"}}
                                    type="number"
                                    step="1"
                                    min="1"
                                    placeholder="0.0 USDT [BSC]"
                                    value={depositValue2}
                                    onChange={(event) => setDepositValue2(event.target.value)}
                                ></input>
                                {(chain !== undefined && address !== null) ? 
                                    <>
                                        {chain.id === 56 ? 
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", borderRadius: "0"}} className="button" onClick={depositHandle2}>BRIDGE TO JBC</div> : 
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO JBC</div>
                                        }
                                    </> :
                                    <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO JBC</div>
                                }
                                <div style={{width: "92%", margin: "20px 0", color: "#000", textAlign: "left", cursor: "pointer"}} onClick={() => setDepositValue2(usdtBscBalance)}>Balance: {Number(usdtBscBalance).toFixed(4)} USDT [BSC]</div>
                            </div>
                            <div style={{minWidth: "500px", maxWidth: "500px", padding: "40px 10px", background: "rgb(206, 208, 207)", boxShadow: "rgba(0, 0, 0, 0.35) 4px 4px 10px 0px, rgb(255, 255, 255) 1px 1px 0px 1px inset, rgb(136, 140, 143) -1px -1px 0px 1px inset", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap"}}>
                                <input
                                    style={{width: "250px", maxWidth: "70%", padding: "10px", margin: "10px 0", backgroundColor: "#fff", color: "#000", border: "2px solid", borderColor: "rgb(136, 140, 143) rgb(255, 255, 255) rgb(255, 255, 255) rgb(136, 140, 143)"}}
                                    type="number"
                                    step="1"
                                    min="1"
                                    placeholder="0.0 JUSDT"
                                    value={withdrawValue2}
                                    onChange={(event) => setWithdrawValue2(event.target.value)}
                                ></input>
                                {(chain !== undefined && address !== null) ? 
                                    <>
                                        {chain.id === 8899 ?
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", borderRadius: "0"}} className="button" onClick={withdrawHandle2}>BRIDGE TO BSC</div> :
                                            <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO BSC</div>
                                        }
                                    </> :
                                    <div style={{maxHeight: "47px", maxWidth: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", background: "rgb(206, 208, 207)", border: "2px solid", borderColor: "rgb(255, 255, 255) rgb(5, 6, 8) rgb(5, 6, 8) rgb(255, 255, 255)", textShadow: "rgb(255, 255, 255) 1px 1px", borderRadius: "0", color: "rgb(136, 140, 143)", cursor: "not-allowed"}} className="button">BRIDGE TO BSC</div>
                                }
                                <div style={{width: "92%", margin: "20px 0", color: "#000", textAlign: "left", cursor: "pointer"}} onClick={() => setWithdrawValue2(jusdtBalance)}>Balance: {Number(jusdtBalance).toFixed(4)} JUSDT</div>
                            </div>
                        </div>
                    </>
                }
                <div style={{width: "1200px", maxWidth: "90%", textAlign: "left", fontSize: "18px", letterSpacing: "1px", marginBottom: "200px"}}>🛟 <a style={{textDecoration: "underline", color: "#fff"}} href="https://discord.com/invite/k92ReT5EYy" target="_blank" rel="noreferrer">Get Help in CommuDAO Discord</a></div>
            </div>
        </div>
    )
}
    
export default TBridge