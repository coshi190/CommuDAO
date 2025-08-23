import React from 'react'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
import { readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAppKit } from '@reown/appkit/react';
const { ethereum } = window
const bstToken = "0xded5c3F32bC01C0F451A4FC79a11619eB78bAF5e"
const trashToken = '0x7AfaA40E9421F69D6F3fb927Cf50fc0Bc6d6AF59'
const bstMachine = '0x5d9FF795Eef8A6b31a4fe634bFf9807CDeb4eb00'
const salmToken = '0xBc57A8D5456c145a09557e0aD0C5959948e0cf7E'
const cmmToken = '0x9B005000A10Ac871947D99001345b01C1cEf2790'
const salmMachine = '0x43e4550A5c8E690511A5503eE030B552C582B74F'
const tierToken = '0x6d01445CB38F252516C0F0cFf43F2bF490ccD702'
const aguaToken = '0x024C5bbF60b3d89AB64aC49936e9FE384f781c4b'
const redeemToken1 = '0x339d46c3D92C974C7C16C50f2fDa46fB5b5812d6'
const redeemToken2 = '0xABaB4f130e282aF569905651d5c997B91E6c3D28'
const redeemMerchant = '0x399FE73Bb0Ee60670430FD92fE25A0Fdd308E142'

const BKCLabs = ({ config, callMode, navigate, setisLoading, setTxupdate, txupdate, setisError, setErrMsg, erc20Abi, stakerMachineABI, redeemTokenABI, cmdaoMerchantABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [bstBalance, setBstBalance] = React.useState(0)
    const [trashBalance, setTrashBalance] = React.useState(0)
    const [tierBalance, setTierBalance] = React.useState(0)
    const [salmBalance, setSalmBalance] = React.useState(0)
    const [cmmBalance, setCmmBalance] = React.useState(0)
    const [aguaBalance, setAguaBalance] = React.useState(0)
    const [bstLabStake, setBstLabStake] = React.useState(0)
    const [bstLabLog, setBstLabLog] = React.useState([0, 0, 0])
    const [salmLabStake, setSalmLabStake] = React.useState(0)
    const [salmLabLog, setSalmLabLog] = React.useState([0, 0, 0])
    const [redeemRemain1, setRedeemRemain1] = React.useState(0)
    const [canRedeem1, setCanRedeem1] = React.useState(0)
    const [redeemRemain2, setRedeemRemain2] = React.useState(0)
    const [canRedeem2, setCanRedeem2] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)

        const thefetch = async () => {
            const data = chain !== undefined && chain.id === 96 && address !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: bstToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: trashToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: bstMachine,
                        abi: stakerMachineABI,
                        functionName: 'staker',
                        args: [address],
                    },
                    {
                        address: bstMachine,
                        abi: stakerMachineABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: tierToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: salmToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: cmmToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: salmMachine,
                        abi: stakerMachineABI,
                        functionName: 'staker',
                        args: [address],
                    },
                    {
                        address: salmMachine,
                        abi: stakerMachineABI,
                        functionName: 'supplier',
                        args: [address],
                    },
                    {
                        address: aguaToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: redeemToken1,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                    {
                        address: redeemToken2,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                    },
                ],
            }) : [
                {result: 0}, {result: 0}, {result: 0}, {result: [0, 0, 0]}, {result: 0}, {result: 0}, {result: 0}, {result: [0, 0, 0]}, {result: 0}, {result: 0},
                {result: [0, 0, 0]}, {result: 0}, {result: 0}, {result: 0}
            ]
            const _bstBal = data[0].result 
            const _trashBal = data[1].result
            const _labBstStaker = data[2].result 
            const _labBstLog = data[3].result 
            const _tierBal = data[4].result 
            const _salmBal = data[5].result 
            const _cmmBal = data[6].result 
            const _labSalmStaker = data[7].result 
            const _labSalmLog = data[8].result 
            const _aguaBal = data[9].result 
            const _redeem1Bal = data[10].result 
            const _redeem2Bal = data[11].result 
            const data2 = chain !== undefined && chain.id === 96 && address !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: redeemMerchant,
                        abi: cmdaoMerchantABI,
                        functionName: 'sellList',
                        args: [1],
                    },
                    {
                        address: redeemMerchant,
                        abi: cmdaoMerchantABI,
                        functionName: 'sellList',
                        args: [2],
                    },
                ],
            }) : [{result: [0, 0, 0, 0]}, {result: [0, 0, 0, 0]}]
            const _redeem1 = data2[0].result
            const _redeem2 = data2[1].result
            const _redeemRemain1 = (111025100000 - (Number(_redeem1[3]) - 9900)) / 100000
            const _redeemRemain2 = (111050100000 - (Number(_redeem2[3]) - 9900)) / 100000

            return [
                _bstBal, _trashBal, _tierBal, _salmBal, _cmmBal, _aguaBal,
                _labBstStaker, _labBstLog, _labSalmStaker, _labSalmLog,
                _redeem1Bal, _redeem2Bal, _redeemRemain1, _redeemRemain2
            ]
        }

        const promise = thefetch()

        const getAsync = () =>
            new Promise((resolve) => 
                setTimeout(
                    () => resolve(promise), 1000
                )
            )

        getAsync().then(result => {
            setBstBalance(ethers.utils.formatEther(result[0]))
            setTrashBalance(ethers.utils.formatEther(result[1]))
            setTierBalance(result[2])
            setSalmBalance(ethers.utils.formatEther(result[3]))
            setCmmBalance(ethers.utils.formatEther(result[4]))
            setAguaBalance(result[5])
            setBstLabStake(ethers.utils.formatEther(result[6]))
            setBstLabLog(result[7])
            setSalmLabStake(ethers.utils.formatEther(result[8]))
            setSalmLabLog(result[9])
            setCanRedeem1(result[10])
            setCanRedeem2(result[11])
            setRedeemRemain1(result[12])
            setRedeemRemain2(result[13])
        })

    }, [config, address, chain, txupdate, erc20Abi, stakerMachineABI, cmdaoMerchantABI])

    const [inputTrash, setInputTrash] = React.useState('')
    const [inputStakedTrash, setInputStakeTrash] = React.useState('')
    const [inputCMM, setInputCMM] = React.useState('')
    const [inputStakedCMM, setInputStakeCMM] = React.useState('')

    const stakeTrash = async () => {
        setisLoading(true)
        try {
            const allowed = await readContract(config, {
                address: trashToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, bstMachine],
            })
            if (Number(ethers.utils.formatEther(allowed)) > Number(inputTrash)) {
                let { request } = await simulateContract(config, {
                    address: trashToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [bstMachine, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: bstMachine,
                abi: stakerMachineABI,
                functionName: 'stake',
                args: [ethers.utils.parseEther(inputTrash)],
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

    const unstakeTrash = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: bstMachine,
                abi: stakerMachineABI,
                functionName: 'unstake',
                args: [ethers.utils.parseEther(String(inputStakedTrash))],
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

    const craftfromBST = async (_index) => {
        setisLoading(true)
        try {
            const allowed = await readContract(config, {
                address: bstToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, bstMachine],
            })
            if (Number(ethers.utils.formatEther(allowed)) > 10) {
                let { request } = await simulateContract(config, {
                    address: bstToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [bstMachine, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: bstMachine,
                abi: stakerMachineABI,
                functionName: 'craft',
                args: [_index],
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

    const obtainfromBST = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: bstMachine,
                abi: stakerMachineABI,
                functionName: 'obtain',
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

    const stakeCMM = async () => {
        setisLoading(true)
        try {
            const allowed = await readContract(config, {
                address: cmmToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, salmMachine],
            })
            if (Number(ethers.utils.formatEther(allowed)) > Number(inputCMM)) {
                let { request } = await simulateContract(config, {
                    address: cmmToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [salmMachine, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: salmMachine,
                abi: stakerMachineABI,
                functionName: 'stake',
                args: [ethers.utils.parseEther(inputCMM)],
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

    const unstakeCMM = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: salmMachine,
                abi: stakerMachineABI,
                functionName: 'unstake',
                args: [ethers.utils.parseEther(String(inputStakedCMM))],
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

    const craftfromSALM = async (_index) => {
        setisLoading(true)
        try {
            const allowed = await readContract(config, {
                address: salmToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, salmMachine],
            })
            if (Number(ethers.utils.formatEther(allowed)) > 10) {
                let { request } = await simulateContract(config, {
                    address: salmToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [salmMachine, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: salmMachine,
                abi: stakerMachineABI,
                functionName: 'craft',
                args: [_index],
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

    const obtainfromSALM = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: salmMachine,
                abi: stakerMachineABI,
                functionName: 'obtain',
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

    const redeem = async (_index) => {
        setisLoading(true)
        let tokenA = '0x0000000000000000000000000000000000000000'
        let tokenB = '0x8b062b96bb689833d7870a0133650fa22302496d'
        let redeem = '0x0000000000000000000000000000000000000000'
        let redeemAmount = 0
        if (_index === 1) {
            tokenA = '0x6d01445cb38f252516c0f0cff43f2bf490ccd702'
            redeem = redeemToken1
            redeemAmount = canRedeem1
        } else if (_index === 2) {
            tokenA = '0x024c5bbf60b3d89ab64ac49936e9fe384f781c4b'
            redeem = redeemToken2
            redeemAmount = canRedeem2
        }
        try {
            if (redeemAmount < 1) {
                const tokenAAllow = await readContract(config, {
                    address: tokenA,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, redeem],
                })
                if (Number(tokenAAllow) < 700000) {
                    let { request } = await simulateContract(config, {
                        address: tokenA,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [redeem, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const tokenBAllow = await readContract(config, {
                    address: tokenB,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, redeem],
                })
                if (Number(ethers.utils.parseEther(tokenBAllow)) < 7000) {
                    let { request } = await simulateContract(config, {
                        address: tokenB,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [redeem, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                let { request: request2 } = await simulateContract(config, {
                    address: redeem,
                    abi: redeemTokenABI,
                    functionName: 'buyRedeem',
                })
                let h2 = await writeContract(config, request2)
                await waitForTransactionReceipt(config, { hash: h2 })
            }
            const redeemAllow = await readContract(config, {
                address: redeem,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, redeemMerchant],
            })
            if (Number(redeemAllow) < 1) {
                let { request } = await simulateContract(config, {
                    address: redeem,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [redeemMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request: request3 } = await simulateContract(config, {
                address: redeemMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [_index]
            })
            let h3 = await writeContract(config, request3)
            await waitForTransactionReceipt(config, { hash: h3 })
            setTxupdate(h3)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    return (
        <>
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", overflow: "scroll"}}>
                <div className="SubfieldBanner pixel" style={{flexDirection: "column"}}>
                    <div style={{fontSize: "75px", width: "fit-content"}}>Labs</div>
                    <div style={{fontSize: "17px", width: "fit-content", marginTop: "30px", letterSpacing: "1px"}}>Craft, Await and Obtain!</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="../background/labslogo.png" width="150" alt="Labs_Logo" />
                </div>
            </div>

            {address !== null && chain !== undefined && chain.id !== 96 ?
                <div style={{zIndex: "999"}} className="centermodal">
                    <div className="wrapper">
                        <div className="pixel" style={{border: "1px solid rgb(70, 55, 169)", boxShadow: "6px 6px 0 #00000040", width: "500px", height: "fit-content", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", fontSize: "40px", letterSpacing: "3px"}}>
                        <div style={{width: "90%", textAlign: "left", fontSize: "36px"}} className="emp">MISMATCH CHAIN!</div>
                        <div style={{marginTop: "20px", width: "90%", textAlign: "left", fontSize: "14px"}}>Please switch your network to Bitkub Chain.</div>
                        <div className="button" style={{marginTop: "40px", width: "50%"}} onClick={() => open({ view: 'Networks' })}>SWITCH NETWORK</div>
                        <div className="button" style={{marginTop: "10px", width: "50%", background: "gray"}} onClick={() => {callMode(0); navigate('/');}}>BACK TO HOME</div>
                        </div>
                    </div>
                </div> :
                <div className="collection">
                    <div style={{textAlign: "left", height: "fit-content", width: "90%", display: "flex", flexDirection: "column", justifyContent: "flex-start"}} className="pixel">
                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", marginTop: "20px", letterSpacing: "1px"}} className="bold">Resources</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreidfaoq6ewqfoipdm66wapq4kijjhxdueztpo6tvdhayprueihefrm.png"
                                    width="20"
                                    alt="$BST"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: bstToken,
                                                    symbol: 'BST',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreidfaoq6ewqfoipdm66wapq4kijjhxdueztpo6tvdhayprueihefrm.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(bstBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreicj63qksujn46s6skyyvqeny2fmptp2eu5u6hcicawalqjhtopm34.png"
                                    width="20"
                                    alt="$SALM"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: salmToken,
                                                    symbol: 'SALM',
                                                    decimals: 18,
                                                    image: '/tokens/bafkreicj63qksujn46s6skyyvqeny2fmptp2eu5u6hcicawalqjhtopm34.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(salmBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreih75ehweqjdk6u6xowwdxs5hmdohib7sen2vlnuekzttzo2jk64iy.png"
                                    width="20"
                                    alt="$TIER"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: tierToken,
                                                    symbol: 'TIER',
                                                    decimals: 0,
                                                    image: '/tokens/bafkreih75ehweqjdk6u6xowwdxs5hmdohib7sen2vlnuekzttzo2jk64iy.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(tierBalance) + ' Wei'}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="/tokens/bafkreibueyqenddliwzqeoafwtlktmnm33xqhfkxknucigj7ovpr7y5qeq.png"
                                    width="20"
                                    alt="$AGUA"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: aguaToken,
                                                    symbol: 'AGUA',
                                                    decimals: 0,
                                                    image: '/tokens/bafkreibueyqenddliwzqeoafwtlktmnm33xqhfkxknucigj7ovpr7y5qeq.png',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(aguaBalance) + ' Wei'}</div>
                            </div>
                        </div>
                        
                        <div style={{marginTop: "40px", width: "97.5%", borderBottom: "1px solid #dddade"}}></div>
                        <div style={{marginTop: "20px", width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Labs & Factories</div>
                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "space-around", margin: "10px", paddingTop: "60px"}}>
                                <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                                    <div>Total Staking Power:</div>
                                    <div className="bold">{Number(bstLabStake).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                                </div>
                                <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "60px", border: "1px solid #dddade", boxShadow: "inset -2px -2px 0px 0.25px #00000040", padding: "15px"}}>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px", textAlign: "left", fontSize: "14px"}}>
                                        <div>$TRASH STAKED</div>
                                        <div className="bold">{Number(bstLabStake).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                                    </div>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px"}}>
                                        {address !== null &&
                                            <>
                                                <input
                                                    placeholder="0.0"
                                                    style={{width: "150px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                    value={inputStakedTrash}
                                                    onChange={(event) => setInputStakeTrash(event.target.value)}
                                                />
                                                <div
                                                    style={{padding: "10px 10px", border: "1px solid #dddade", cursor: "pointer"}}
                                                    className="bold"
                                                    onClick={() => setInputStakeTrash(bstLabStake)}
                                                >
                                                    Max
                                                </div>
                                                <div style={{letterSpacing: "1px", width: "70px", padding: "10px", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff"}} className="bold" onClick={unstakeTrash}>Unstake</div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "60px", border: "1px solid #dddade", boxShadow: "inset -2px -2px 0px 0.25px #00000040", padding: "15px"}}>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px", textAlign: "left", fontSize: "14px"}}>
                                        <div>$TRASH BALANCE</div>
                                        <div className="bold">{Number(trashBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                                    </div>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px"}}>
                                        {address !== null &&
                                            <>
                                                <input
                                                    placeholder="0.0"
                                                    style={{width: "150px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                    value={inputTrash}
                                                    onChange={(event) => setInputTrash(event.target.value)}
                                                />
                                                <div
                                                    style={{padding: "10px 10px", border: "1px solid #dddade", cursor: "pointer"}}
                                                    className="bold"
                                                    onClick={() => setInputTrash(trashBalance)}
                                                >
                                                    Max
                                                </div>
                                                <div style={{letterSpacing: "1px", width: "50px", padding: "10px", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff"}} className="bold" onClick={stakeTrash}>Stake</div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div style={{marginTop: "5px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreidfaoq6ewqfoipdm66wapq4kijjhxdueztpo6tvdhayprueihefrm.png" height="18" alt="$BST"/>
                                        <div style={{margin: "0 5px"}}>10</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreih75ehweqjdk6u6xowwdxs5hmdohib7sen2vlnuekzttzo2jk64iy.png" height="18" alt="$TIER"/>
                                        <div style={{margin: "0 5px"}}>{Number(bstLabStake).toLocaleString('en-US', {maximumFractionDigits:0}) + ' Wei'}</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "5px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>1 hour</div>
                                </div>
                                <div style={{marginTop: "5px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    {Number(bstLabLog[1]) !== 0 ?
                                        <>
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{Date.now() - (Number(bstLabLog[2]) * 1000) > (3600 * 1000) ? "now" : (new Date((Number(bstLabLog[2]) + 3600) * 1000).toLocaleString('es-CL'))}</div>
                                        </> :
                                        <div style={{height: "20.5px"}}></div>
                                    }
                                </div>
                                {address !== null ?
                                    <div style={{width: "100%", marginTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        {Number(bstLabLog[1]) === 0 && 
                                            <>
                                                {Number(bstLabStake) > 0 && Number(bstBalance) > 10 ?
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px", marginTop: "20px"}} className="pixel button" onClick={() => craftfromBST(1)}>Craft TIERRA</div> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px", marginTop: "20px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft TIERRA</div>
                                                }
                                            </>
                                        }
                                        {Number(bstLabLog[1]) !== 0 && 
                                            <>
                                                {Date.now() - (Number(bstLabLog[2]) * 1000) > (3600 * 1000) ?
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px", marginTop: "20px"}} className="pixel button" onClick={obtainfromBST}>Obtain TIERRA</div> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px", marginTop: "20px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain TIERRA</div>
                                                }
                                            </>
                                        }
                                    </div> :
                                    <div style={{borderRadius: "12px", padding: "15px", marginTop: "20px", width: "340px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                            <div className="nftCard" style={{position: "relative", justifyContent: "space-around", margin: "10px 10px 80px 10px", paddingTop: "60px"}}>
                                <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                                    <div>Total Staking Power:</div>
                                    <div className="bold">{Number(salmLabStake).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                                </div>
                                <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "60px", border: "1px solid #dddade", boxShadow: "inset -2px -2px 0px 0.25px #00000040", padding: "15px"}}>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px", textAlign: "left", fontSize: "14px"}}>
                                        <div>$CMM STAKED</div>
                                        <div className="bold">{Number(salmLabStake).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                                    </div>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px"}}>
                                        {address !== null &&
                                            <>
                                                <input
                                                    placeholder="0.0"
                                                    style={{width: "150px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                    value={inputStakedCMM}
                                                    onChange={(event) => setInputStakeCMM(event.target.value)}
                                                />
                                                <div
                                                    style={{padding: "10px 10px", border: "1px solid #dddade", cursor: "pointer"}}
                                                    className="bold"
                                                    onClick={() => setInputStakeCMM(salmLabStake)}
                                                >
                                                    Max
                                                </div>
                                                <div style={{letterSpacing: "1px", width: "70px", padding: "10px", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff"}} className="bold" onClick={unstakeCMM}>Unstake</div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "60px", border: "1px solid #dddade", boxShadow: "inset -2px -2px 0px 0.25px #00000040", padding: "15px"}}>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px", textAlign: "left", fontSize: "14px"}}>
                                        <div>$CMM BALANCE</div>
                                        <div className="bold">{Number(cmmBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                                    </div>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "7.5px"}}>
                                        {address !== null &&
                                            <>
                                                <input
                                                    placeholder="0.0"
                                                    style={{width: "150px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                    value={inputCMM}
                                                    onChange={(event) => setInputCMM(event.target.value)}
                                                />
                                                <div
                                                    style={{padding: "10px 10px", border: "1px solid #dddade", cursor: "pointer"}}
                                                    className="bold"
                                                    onClick={() => setInputCMM(cmmBalance)}
                                                >
                                                    Max
                                                </div>
                                                <div style={{letterSpacing: "1px", width: "50px", padding: "10px", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff"}} className="bold" onClick={stakeCMM}>Stake</div>
                                            </>
                                        }
                                    </div>
                                </div>
                                <div style={{marginTop: "5px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i></div>
                                    <div style={{display: "flex", flexDirection: "row", fontSize: "15px"}}>
                                        <img src="/tokens/bafkreicj63qksujn46s6skyyvqeny2fmptp2eu5u6hcicawalqjhtopm34.png" height="18" alt="$SALM"/>
                                        <div style={{margin: "0 5px"}}>10</div>
                                        <i style={{fontSize: "16px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                        <img src="/tokens/bafkreibueyqenddliwzqeoafwtlktmnm33xqhfkxknucigj7ovpr7y5qeq.png" height="18" alt="$AGUA"/>
                                        <div style={{margin: "0 5px"}}>{Number(salmLabStake).toLocaleString('en-US', {maximumFractionDigits:0}) + ' Wei'}</div>
                                    </div>
                                </div>
                                <div style={{marginTop: "5px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-clock-o"></i></div>
                                    <div>1 hour</div>
                                </div>
                                <div style={{marginTop: "5px", width: "320px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "15px", borderBottom: "1px solid #d9d8df"}} className="pixel">
                                    {Number(salmLabLog[1]) !== 0 ?
                                        <>
                                            <div><i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-hourglass"></i></div>
                                            <div>{Date.now() - (Number(salmLabLog[2]) * 1000) > (3600 * 1000) ? "now" : (new Date((Number(salmLabLog[2]) + 3600) * 1000).toLocaleString('es-CL'))}</div>
                                        </> :
                                        <div style={{height: "20.5px"}}></div>
                                    }
                                </div>
                                {address !== null ?
                                    <div style={{width: "100%", marginTop: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        {Number(salmLabLog[1]) === 0 && 
                                            <>
                                                {Number(salmLabStake) > 0 && Number(salmBalance) > 10 ?
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px"}} className="pixel button" onClick={() => craftfromSALM(1)}>Craft AGUA</div> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Craft AGUA</div>
                                                }
                                            </>
                                        }
                                        {Number(salmLabLog[1]) !== 0 && 
                                            <>
                                                {Date.now() - (Number(salmLabLog[2]) * 1000) > (3600 * 1000) ?
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px"}} className="pixel button" onClick={obtainfromSALM}>Obtain AGUA</div> :
                                                    <div style={{display: "flex", justifyContent: "center", width: "340px", borderRadius: "12px", padding: "15px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Obtain AGUA</div>
                                                }
                                            </>
                                        }
                                    </div> :
                                    <div style={{borderRadius: "12px", padding: "15px", marginTop: "20px", width: "340px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{marginTop: "0px", width: "97.5%", borderBottom: "1px solid #dddade"}}></div>
                        <div style={{marginTop: "20px", width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">NFT Crafting</div>
                        <div style={{width: "95%", minHeight: "0", justifyContent: "flex-start", flexWrap: "nowrap", overflow: "scroll"}} className="collection noscroll">
                            <div className="nftCard" style={{justifyContent: "flex-start", height: "460px", margin: "10px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">TONO from Bitkub Chain</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreigifnk2mvo75xqrds4c3zbc4odgo2og2jidat46vr55xx4ug7rtqu" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className="emp">{redeemRemain1}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>9900 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="/tokens/bafkreih75ehweqjdk6u6xowwdxs5hmdohib7sen2vlnuekzttzo2jk64iy.png" height="18" alt="$TIER"/>
                                            <div style={{marginLeft: "7.5px"}}>700,000 WEI +</div>
                                            &nbsp;<img src="/tokens/bafkreidcxukia62wzaaes6wpsdgpw3yjshrjm7nwijwldxdthkepsebumq.png" height="18" alt="$CMOS"/>
                                            <div style={{marginLeft: "7.5px"}}>7,000</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {redeemRemain1 > 0 ?
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => redeem(1)}>BUY</div> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                            <div className="nftCard" style={{justifyContent: "flex-start", height: "460px", margin: "10px 10px 80px 10px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">KAI of Bitkub Chain</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreibxqb6evipcsgrb5cddgd7hyi73cgjj3mxkxt3dvcmrxkvqllxftq" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className="emp">{redeemRemain2}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>9900 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="/tokens/bafkreibueyqenddliwzqeoafwtlktmnm33xqhfkxknucigj7ovpr7y5qeq.png" height="18" alt="$AGUA"/>
                                            <div style={{marginLeft: "7.5px"}}>700,000 WEI + </div>
                                            &nbsp;<img src="/tokens/bafkreidcxukia62wzaaes6wpsdgpw3yjshrjm7nwijwldxdthkepsebumq.png" height="18" alt="$CMOS"/>
                                            <div style={{marginLeft: "7.5px"}}>7,000</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {redeemRemain2 > 0 ?
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => redeem(2)}>BUY</div> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default BKCLabs
