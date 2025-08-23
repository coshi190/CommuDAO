import React from 'react'
import Select from 'react-select'
import { getBalance, readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react';
import { ethers } from 'ethers'
import Swap from './GameSwap-Swap'
import GameSwapFarm from './GameSwap-Farm.tsx'

const cmjToken = "0xE67E280f5a354B4AcA15fA7f0ccbF667CF74F97b"
const jusdtToken = "0x24599b658b57f91E7643f4F154B16bcd2884f9ac"
const jcExchange = "0x472d0e2E9839c140786D38110b3251d5ED08DF41"
const juExchange = "0x280608DD7712a5675041b95d0000B9089903B569"
const jcSwap = "0xFF19990569739e79aFF8549d8dE087Ab79De8dc7"
const juSwap = "0x7417b256b306578b627797f7b002363397772603"
const providerJBC = new ethers.getDefaultProvider('https://rpc-l1.jibchain.net/')
const providerBKC = new ethers.getDefaultProvider('https://rpc.bitkubchain.io')

const options = [{value: 0, label: 'JBC'}, {value: 1, label: 'CMJ'}, {value: 2, label: 'JUSDT'}]
const inputStyle = {
    control: (styles, state) => ({ ...styles, width: 95, background: 'transparent', borderColor: state.isFocused ? 'transparent' : 'transparent', fontSize: 16, }),
    option: (styles) => ({ ...styles, height: '100%', fontSize: 12, }),
    indicatorSeparator: (styles) => ({ ...styles, width: 0, }),
    placeholder: (styles) => ({ ...styles, }),
    noOptionsMessage: (styles) => ({ ...styles, fontSize: 12, }),
    input: (styles) => ({ ...styles, width: 55, height: 25, }),
    valueContainer: (styles) => ({ ...styles, display: 'block', overflow: 'visible', width: '50%', height: 25, }),
    singleValue: (styles) => ({ ...styles, overflow: 'visible', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 800, }),
    menu: (styles) => ({ ...styles, border: 'rgb(0 0 0 / 4%) 0px 0px 10px, rgb(46 44 53) 0px 0px 0px 1px', }),
}
   
const GameSwap = ({ config, setisLoading, callMode, navigate, txupdate, setTxupdate, setisError, setErrMsg, erc20Abi, exchangeABI, exchangeJulpABI, farmJdaoABI, swapABI, swapJulpABI, bkcOracleABI, cmdaoAmmNpcABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [mode, setMode] = React.useState(0)
    const [swapvol24USDT, setSwapvol24USDT] = React.useState("")
    const [swapvol24CMJ, setSwapvol24CMJ] = React.useState("")
    /*
    const [tswapvol24USDT, setTSwapvol24USDT] = React.useState("")
    const [tswapvol24CMJ, setTSwapvol24CMJ] = React.useState("")
    */
    const [jbcBalance, setJbcBalance] = React.useState(<>0.000</>)
    const [cmjBalance, setCmjBalance] = React.useState(<>0.000</>)
    const [cmjBalanceFull, setCmjBalanceFull] = React.useState(null)
    const [jusdtBalance, setJusdtBalance] = React.useState(<>0.000</>)
    const [jusdtBalanceFull, setJusdtBalanceFull] = React.useState(null)
    const [jbcReserv, setJbcReserv] = React.useState(0)
    const [cmjReserv, setCmjReserv] = React.useState(0)
    const [jbcJuReserv, setJbcJuReserv] = React.useState(0)
    const [jusdtJuReserv, setJusdtJuReserv] = React.useState(0)
    const [liquidMode, setLiquidMode] = React.useState(0)
    const liquidModeSelect = async (option) => {
        if (liquidMode === 0 && option.value === 1) { setLiquidMode(0) }
        if (liquidMode === 0 && option.value === 2) { setLiquidMode(1) }
        if (liquidMode === 1 && option.value === 1) { setLiquidMode(0) }
        if (liquidMode === 1 && option.value === 2) { setLiquidMode(1) }
    }
    const [jbcAdd, setJbcAdd] = React.useState("")
    const [cmjAdd, setCmjAdd] = React.useState("")
    const [jbcJuAdd, setJbcJuAdd] = React.useState("")
    const [jusdtJuAdd, setJusdtJuAdd] = React.useState("")
    const [lpSell, setLpSell] = React.useState("")
    const [julpSell, setJulpSell] = React.useState("")
    const [lpBalance, setLpBalance] = React.useState(null)
    const [lpShare, setLpShare] = React.useState(0)
    const [jbcPooled, setJbcPooled] = React.useState(null)
    const [cmjPooled, setCmjPooled] = React.useState(null)
    const [julpBalance, setJulpBalance] = React.useState(null)
    const [julpShare, setJulpShare] = React.useState(0)
    const [jbcjuPooled, setJbcjuPooled] = React.useState(null)
    const [jusdtjuPooled, setJusdtjuPooled] = React.useState(null)
    const [priceTHB, setPriceTHB] = React.useState(0)

    const handleAdd = async (event) => {
        try {
            setJbcAdd(event.target.value)
            const _value = event.target.value !== "" ? ethers.utils.parseEther(event.target.value) : 0
            const bigValue = ethers.BigNumber.from(_value)
            const _reserveJbc = await getBalance(config, { address: jcExchange, })
            const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
            const _reserveCmj = await readContract(config, {
                address: jcExchange,
                abi: exchangeABI,
                functionName: 'getReserve',
            })
            const bigCmjReserv = ethers.BigNumber.from(_reserveCmj)
            event.target.value !== "" ? setCmjAdd(ethers.utils.formatEther(((bigValue.mul(bigCmjReserv)).div(bigJbcReserv)))) : setCmjAdd("")
        } catch {
            setJbcAdd(jbcAdd)
        }
    }
    const maxLiqHandle1 = async () => {
        const _max = address !== null ? await getBalance(config, { address: address, }) : {formatted: 0}
        const maxSubGas = Number(_max.formatted) - 0.009
        setJbcAdd(String(maxSubGas))
        const _value = maxSubGas >= 0 ? ethers.utils.parseEther(String(maxSubGas)) : 0
        const bigValue = ethers.BigNumber.from(_value)
        const _reserveJbc = await getBalance(config, { address: jcExchange, })
        const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
        const _reserveCmj = await readContract(config, {
            address: jcExchange,
            abi: exchangeABI,
            functionName: 'getReserve',
        })
        const bigCmjReserv = ethers.BigNumber.from(_reserveCmj)
        maxSubGas >= 0 ? setCmjAdd(ethers.utils.formatEther(((bigValue.mul(bigCmjReserv)).div(bigJbcReserv)))) : setCmjAdd("")
    }
    const handleAdd2 = async (event) => {
        try {
            setCmjAdd(event.target.value)
            const _value = event.target.value !== "" ? ethers.utils.parseEther(event.target.value) : 0
            const bigValue = ethers.BigNumber.from(_value)
            const _reserveJbc = await getBalance(config, { address: jcExchange, })
            const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
            const _reserveCmj = await readContract(config, {
                address: jcExchange,
                abi: exchangeABI,
                functionName: 'getReserve',
            })
            const bigCmjReserv = ethers.BigNumber.from(_reserveCmj)
            event.target.value !== "" ? setJbcAdd(ethers.utils.formatEther(((bigValue.mul(bigJbcReserv)).div(bigCmjReserv)))) : setJbcAdd("")
        } catch {
            setCmjAdd(cmjAdd)
        }
    }
    const maxLiqHandle2 = async () => {
        const _max = address !== null ? await readContract(config, {
            address: cmjToken,
            abi: erc20Abi,
            functionName: 'balanceOf',
            args: [address],
        }) : 0
        setCmjAdd(ethers.utils.formatEther(_max))
        const _value = _max >= 0 ? _max : 0
        const bigValue = ethers.BigNumber.from(_value)
        const _reserveJbc = await getBalance(config, { address: jcExchange, })
        const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
        const _reserveCmj = await readContract(config, {
            address: jcExchange,
            abi: exchangeABI,
            functionName: 'getReserve',
        })
        const bigCmjReserv = ethers.BigNumber.from(_reserveCmj)
        _max >= 0 ? setJbcAdd(ethers.utils.formatEther(((bigValue.mul(bigJbcReserv)).div(bigCmjReserv)))) : setJbcAdd("")
    }
    const handleAdd3 = async (event) => {
        try {
            setJbcJuAdd(event.target.value)
            const _value = event.target.value !== "" ? ethers.utils.parseEther(event.target.value) : 0
            const bigValue = ethers.BigNumber.from(_value)
            const _reserveJbc = await getBalance(config, { address: juExchange, })
            const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
            const _reserveJusdt = await readContract(config, {
                address: juExchange,
                abi: exchangeJulpABI,
                functionName: 'getReserve',
            })
            const bigJusdtReserv = ethers.BigNumber.from(_reserveJusdt)
            event.target.value !== "" ? setJusdtJuAdd(ethers.utils.formatEther(((bigValue.mul(bigJusdtReserv)).div(bigJbcReserv)))) : setJusdtJuAdd("")
        } catch {
            setJbcJuAdd(jbcJuAdd)
        }
    }
    const maxLiqHandle3 = async () => {
        const _max = address !== null ? await getBalance(config, { address: address, }) : {formatted: 0}
        const maxSubGas = Number(_max.formatted) - 0.009
        setJbcJuAdd(String(maxSubGas))
        const _value = maxSubGas >= 0 ? ethers.utils.parseEther(String(maxSubGas)) : 0
        const bigValue = ethers.BigNumber.from(_value)
        const _reserveJbc = await getBalance(config, { address: juExchange, })
        const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
        const _reserveJusdt = await readContract(config, {
            address: juExchange,
            abi: exchangeJulpABI,
            functionName: 'getReserve',
        })
        const bigJusdtReserv = ethers.BigNumber.from(_reserveJusdt)
        _value >= 0 ? setJusdtJuAdd(ethers.utils.formatEther(((bigValue.mul(bigJusdtReserv)).div(bigJbcReserv)))) : setJusdtJuAdd("")
    }
    const handleAdd4 = async (event) => {
        try {
            setJusdtJuAdd(event.target.value)
            const _value = event.target.value !== "" ? ethers.utils.parseEther(event.target.value) : 0
            const bigValue = ethers.BigNumber.from(_value)
            const _reserveJbc = await getBalance(config, { address: juExchange, })
            const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
            const _reserveJusdt = await readContract(config, {
                address: juExchange,
                abi: exchangeJulpABI,
                functionName: 'getReserve',
            })
            const bigJusdtReserv = ethers.BigNumber.from(_reserveJusdt)
            event.target.value !== "" ? setJbcJuAdd(ethers.utils.formatEther(((bigValue.mul(bigJbcReserv)).div(bigJusdtReserv)))) : setJbcJuAdd("")
        } catch {
            setJusdtJuAdd(jusdtJuAdd)
        }
    }
    const maxLiqHandle4 = async () => {
        const _max = address !== null ? await readContract(config, {
            address: jusdtToken,
            abi: erc20Abi,
            functionName: 'balanceOf',
            args: [address],
        }) : 0
        setJusdtJuAdd(ethers.utils.formatEther(_max))
        const _value = _max >= 0 ? _max : 0
        const bigValue = ethers.BigNumber.from(_value)
        const _reserveJbc = await getBalance(config, { address: juExchange, })
        const bigJbcReserv = ethers.BigNumber.from(_reserveJbc.value)
        const _reserveJusdt = await readContract(config, {
            address: juExchange,
            abi: exchangeJulpABI,
            functionName: 'getReserve',
        })
        const bigJusdtReserv = ethers.BigNumber.from(_reserveJusdt)
        _max >= 0 ? setJbcJuAdd(ethers.utils.formatEther(((bigValue.mul(bigJbcReserv)).div(bigJusdtReserv)))) : setJbcJuAdd("")
    }

    const addliqHandle = async () => {
        setisLoading(true)
        try {
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, jcExchange],
            })
            if (Number(ethers.utils.formatEther(String(cmjAllow))) < Number(cmjAdd)) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [jcExchange, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: jcExchange,
                abi: exchangeABI,
                functionName: 'addLiquidity',
                args: [ethers.utils.parseEther(cmjAdd)],
                value: ethers.utils.parseEther(jbcAdd),
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
    const addliqHandle2 = async () => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, juExchange],
            })
            if (Number(ethers.utils.formatEther(String(jusdtAllow))) < Number(jusdtJuAdd)) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [juExchange, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: juExchange,
                abi: exchangeJulpABI,
                functionName: 'addLiquidity',
                args: [ethers.utils.parseEther(jusdtJuAdd)],
                value: ethers.utils.parseEther(jbcJuAdd),
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

    const handleSell = (event) => { setLpSell(event.target.value) }
    const maxRemLiqHandle1 = async () => {
        const jclpBal = address !== null ? await readContract(config, {
            address: jcExchange,
            abi: exchangeABI,
            functionName: 'balanceOf',
            args: [address],
        }) : 0
        setLpSell(ethers.utils.formatEther(jclpBal))
    }
    const removeliqHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: jcExchange,
                abi: exchangeABI,
                functionName: 'removeLiquidity',
                args: [ethers.utils.parseEther(lpSell)],
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
    const handleSell2 = (event) => { setJulpSell(event.target.value) }
    const maxRemLiqHandle2 = async () => {
        const julpBal = address !== null ? await readContract(config, {
            address: juExchange,
            abi: exchangeJulpABI,
            functionName: 'balanceOf',
            args: [address],
        }) : 0
        setJulpSell(ethers.utils.formatEther(julpBal))
    }
    const removeliqHandle2 = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: juExchange,
                abi: exchangeJulpABI,
                functionName: 'removeLiquidity',
                args: [ethers.utils.parseEther(julpSell)],
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

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)

        const bigfetch = () => {
            const thefetch = async () => {
                const jbcBal = address !== null ?
                    await getBalance(config, { address: address, }) :
                    {formatted: 0}
                const data = address !== null ? await readContracts(config, {
                    contracts: [
                        {
                            address: cmjToken,
                            abi: erc20Abi,
                            functionName: 'balanceOf',
                            args: [address],
                            chainId: 8899
                        },
                        {
                            address: jusdtToken,
                            abi: erc20Abi,
                            functionName: 'balanceOf',
                            args: [address],
                            chainId: 8899
                        },
                        {
                            address: jcExchange,
                            abi: erc20Abi,
                            functionName: 'balanceOf',
                            args: [address],
                            chainId: 8899
                        },
                        {
                            address: juExchange,
                            abi: erc20Abi,
                            functionName: 'balanceOf',
                            args: [address],
                            chainId: 8899
                        },
                    ],
                }) : [{result: 0}, {result: 0}, {result: 0}, {result: 0}, ]
                const cmjBal = data[0]
                const jusdtBal = data[1]
                const jclpBal = data[2]
                const julpBal = data[3]

                const data2 = await readContracts(config, {
                    contracts: [
                        {
                            address: jcExchange,
                            abi: exchangeABI,
                            functionName: 'getReserve',
                            chainId: 8899
                        },
                        {
                            address: juExchange,
                            abi: exchangeJulpABI,
                            functionName: 'getReserve',
                            chainId: 8899
                        },
                        {
                            address: jcExchange,
                            abi: erc20Abi,
                            functionName: 'totalSupply',
                            chainId: 8899
                        },
                        {
                            address: juExchange,
                            abi: erc20Abi,
                            functionName: 'totalSupply',
                            chainId: 8899
                        },
                    ],
                })
                const CmjJcReserv = data2[0]
                const JusdtJuReserv = data2[1]
                const jclpTotalSup = data2[2]
                const julpTotalSup = data2[3]
                const JbcJcReserv = await getBalance(config, {
                    address: jcExchange,
                })
                const JbcJuReserv = await getBalance(config, {
                    address: juExchange,
                })
                const oracleTHB = new ethers.Contract("0x4A6947323A1c14Cf69Dd128A2cf854364239d044", bkcOracleABI, providerBKC)
                const usdtToTHB = await oracleTHB.latestAnswer()
                
                return [
                    jbcBal, cmjBal, jusdtBal,
                    JbcJcReserv, CmjJcReserv, JbcJuReserv, JusdtJuReserv,
                    jclpBal, jclpTotalSup, julpBal, julpTotalSup,
                    usdtToTHB,
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
                setJbcBalance(Number(Math.floor((result[0].formatted) * 1000) / 1000).toLocaleString('en-US', {minimumFractionDigits:3}))
                const _cmjbalance = ethers.utils.formatEther(result[1].result)
                setCmjBalanceFull(Number(_cmjbalance))
                setCmjBalance(Number(Math.floor(_cmjbalance * 1000) / 1000).toLocaleString('en-US', {minimumFractionDigits:3}))
                const _jusdtbalance = ethers.utils.formatEther(result[2].result)
                setJusdtBalanceFull(Number(_jusdtbalance))
                setJusdtBalance(Number(Math.floor(_jusdtbalance * 1000) / 1000).toLocaleString('en-US', {minimumFractionDigits:3}))
                const _jbcreserve = ethers.utils.formatEther(result[3].value)
                setJbcReserv(_jbcreserve)
                const _cmjreserve = ethers.utils.formatEther(result[4].result)
                setCmjReserv(_cmjreserve)
                const _jbcjureserve = ethers.utils.formatEther(result[5].value)
                setJbcJuReserv(_jbcjureserve)
                const _jusdtjureserve = ethers.utils.formatEther(result[6].result)
                setJusdtJuReserv(_jusdtjureserve)
                const _lpbalance = ethers.utils.formatEther(result[7].result)
                setLpBalance(Math.floor(_lpbalance * 1000) / 1000)
                const _lptotalsupply = ethers.utils.formatEther(result[8].result)
                setLpShare(Number((_lpbalance / _lptotalsupply) * 100).toFixed(4))
                setJbcPooled((Number(_jbcreserve) * Number(_lpbalance)) / Number(_lptotalsupply))
                setCmjPooled((Number(_cmjreserve) * Number(_lpbalance)) / Number(_lptotalsupply))
                const _julpbalance = ethers.utils.formatEther(result[9].result)
                setJulpBalance(Math.floor(_julpbalance * 1000) / 1000)
                const _julptotalsupply = ethers.utils.formatEther(result[10].result)
                setJulpShare(Number((_julpbalance / _julptotalsupply) * 100).toFixed(4))
                setJbcjuPooled((Number(_jbcjureserve) * Number(_julpbalance)) / Number(_julptotalsupply))
                setJusdtjuPooled((Number(_jusdtjureserve) * Number(_julpbalance)) / Number(_julptotalsupply))
                setPriceTHB(ethers.utils.formatEther(result[11]) * (10**10))
            })
        }

        bigfetch()
        const interval = setInterval(bigfetch, 12000);
        return () => clearInterval(interval)
    }, [config, address, txupdate, exchangeABI, exchangeJulpABI, erc20Abi, bkcOracleABI])

    React.useEffect(() => {
        const jusdtSC = new ethers.Contract(jusdtToken, erc20Abi, providerJBC)
        const cmjSC = new ethers.Contract(cmjToken, erc20Abi, providerJBC)

        const thefetch = async () => {
            const blockNumber = await providerJBC.getBlockNumber();
            const vol1Filter = await jusdtSC.filters.Transfer(null, "0x280608DD7712a5675041b95d0000B9089903B569", null)
            const vol1Event = await jusdtSC.queryFilter(vol1Filter, blockNumber - 7200, 'latest')
            const vol1Map = await Promise.all(vol1Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const vol2Filter = await jusdtSC.filters.Transfer("0x280608DD7712a5675041b95d0000B9089903B569", null, null)
            const vol2Event = await jusdtSC.queryFilter(vol2Filter, blockNumber - 7200, 'latest')
            const vol2Map = await Promise.all(vol2Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const vol3Filter = await cmjSC.filters.Transfer(null, "0x472d0e2E9839c140786D38110b3251d5ED08DF41", null)
            const vol3Event = await cmjSC.queryFilter(vol3Filter, blockNumber - 7200, 'latest')
            const vol3Map = await Promise.all(vol3Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const vol4Filter = await cmjSC.filters.Transfer("0x472d0e2E9839c140786D38110b3251d5ED08DF41", null, null)
            const vol4Event = await cmjSC.queryFilter(vol4Filter, blockNumber - 7200, 'latest')
            const vol4Map = await Promise.all(vol4Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const sumVolUsdt = vol1Map.concat(vol2Map).reduce((partialSum, a) => partialSum + a, 0);
            const sumVolCmj = vol3Map.concat(vol4Map).reduce((partialSum, a) => partialSum + a, 0);
            /*
            const tvol1Event = await jusdtSC.queryFilter(vol1Filter, 143068, 'latest')
            const tvol1Map = await Promise.all(tvol1Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const tvol2Event = await jusdtSC.queryFilter(vol2Filter, 143068, 'latest')
            const tvol2Map = await Promise.all(tvol2Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const tvol3Event = await cmjSC.queryFilter(vol3Filter, 98302, 'latest')
            const tvol3Map = await Promise.all(tvol3Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const tvol4Event = await cmjSC.queryFilter(vol4Filter, 98302, 'latest')
            const tvol4Map = await Promise.all(tvol4Event.map(async (obj) => {return Number(ethers.utils.formatEther(obj.args.value))}))
            const tsumVolUsdt = tvol1Map.concat(tvol2Map).reduce((partialSum, a) => partialSum + a, 0);
            const tsumVolCmj = tvol3Map.concat(tvol4Map).reduce((partialSum, a) => partialSum + a, 0);
            */
            
            return [
                sumVolUsdt, sumVolCmj, /*tsumVolUsdt, tsumVolCmj,*/
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
            setSwapvol24USDT((Number(result[0]).toFixed(0)))
            setSwapvol24CMJ(Number(result[1]).toFixed(0))
            /*
            setTSwapvol24USDT((Number(result[2]).toFixed(0)))
            setTSwapvol24CMJ(Number(result[3]).toFixed(0))
            */
        })
    }, [])

    return (
        <>
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
                <div style={{flexDirection: "column", alignItems: "center", justifyContent: "flex-start", background: "#e6e4f6"}} className="collection">
                    <div style={{marginTop: "80px", height: "25px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", background: "#fff", padding: "7.5px 10px", border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}}>
                        {mode === 0 ? 
                            <div style={{margin: "0 10px", width: "fit-content", border: "transparent", background: "transparent", fontSize: "20px", borderBottom: "5px solid #61dafb", cursor: "pointer"}} className="bold">Swap</div> :
                            <div style={{margin: "0 10px", width: "fit-content", border: "transparent", background: "transparent", fontSize: "20px", color: "#b8add2", borderBottom: "5px solid transparent", cursor: "pointer"}} className="bold" onClick={() => {setMode(0)}}>Swap</div>
                        }
                        {mode === 1 ?
                            <div style={{margin: "0 10px", width: "fit-content", border: "transparent", background: "transparent", fontSize: "20px", borderBottom: "5px solid #61dafb", cursor: "pointer"}} className="bold">Liquidity</div> :
                            <div style={{margin: "0 10px", width: "fit-content", border: "transparent", background: "transparent", fontSize: "20px", color: "#b8add2", borderBottom: "5px solid transparent", cursor: "pointer"}} className="bold" onClick={() => {setMode(1)}}>Liquidity</div>
                        }
                        {mode === 2 ?
                            <div style={{margin: "0 10px", width: "fit-content", border: "transparent", background: "transparent", fontSize: "20px", borderBottom: "5px solid #61dafb", cursor: "pointer"}} className="bold">Farms</div> :
                            <div style={{margin: "0 10px", width: "fit-content", border: "transparent", background: "transparent", fontSize: "20px", color: "#b8add2", borderBottom: "5px solid transparent", cursor: "pointer"}} className="bold" onClick={() => {setMode(2)}}>Farms</div>
                        }
                    </div>
                    {mode === 0 && 
                        <>
                            <Swap config={config} address={address} setisLoading={setisLoading} setTxupdate={setTxupdate} setisError={setisError} setErrMsg={setErrMsg} options={options} inputStyle={inputStyle} jcExchange={jcExchange} exchangeABI={exchangeABI} juExchange={juExchange} exchangeJulpABI={exchangeJulpABI} jcSwap={jcSwap} swapABI={swapABI} juSwap={juSwap} swapJulpABI={swapJulpABI} cmjToken={cmjToken} jusdtToken={jusdtToken} erc20Abi={erc20Abi} jbcBalance={jbcBalance} cmjBalance={cmjBalance} cmjBalanceFull={cmjBalanceFull} jusdtBalance={jusdtBalance} jusdtBalanceFull={jusdtBalanceFull} jbcReserv={jbcReserv} cmjReserv={cmjReserv} jbcJuReserv={jbcJuReserv} jusdtJuReserv={jusdtJuReserv} priceTHB={priceTHB} />
                            <div style={{marginBottom: "80px", width: "750px", maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                                <div style={{width: "300px", color: "black", background: "silver", border: "6px double #fff", padding: "15px 10px", boxShadow: "0 0 0 3px silver, 1em 1em 3px 0 rgba(0,0,0,.1)", textAlign: "left", fontSize: "12px", letterSpacing: "0.5px"}}>
                                    <div>Daily volume: {jbcReserv !== 0 ? <>฿{(Number(Math.floor(swapvol24USDT * priceTHB)) + Number(Math.floor(swapvol24CMJ * (jbcReserv/cmjReserv) * (jusdtJuReserv/jbcJuReserv) * priceTHB * 1) / 1)).toLocaleString('en-US', {minimumFractionDigits:0})}</> : <>฿0</>}</div>
                                    <div style={{marginTop: "10px"}}>Total volume: {'฿31,000,000+'/*jbcReserv !== 0 ? <>  ฿{(Number(Math.floor(tswapvol24USDT * priceTHB)) + Number(Math.floor(tswapvol24CMJ * (jbcReserv/cmjReserv) * (jusdtJuReserv/jbcJuReserv) * priceTHB * 1) / 1)).toLocaleString('en-US', {minimumFractionDigits:0})}</> : <>฿0</>*/}</div>
                                    <div style={{marginTop: "10px"}}>{'//'}</div>
                                    <div style={{marginTop: "10px"}}>Daily LP revenue: {jbcReserv !== 0 ? <>฿{((Number(Math.floor(swapvol24USDT * priceTHB)) + Number(Math.floor(swapvol24CMJ * (jbcReserv/cmjReserv) * (jusdtJuReserv/jbcJuReserv) * priceTHB * 1) / 1)) * 0.01).toLocaleString('en-US', {maximumFractionDigits:0})}</> : <>฿0</>}</div>
                                    <div style={{marginTop: "10px"}}>Total LP revenue: {'฿310,000+'/*jbcReserv !== 0 ? <>฿{((Number(Math.floor(tswapvol24USDT * priceTHB)) + Number(Math.floor(tswapvol24CMJ * (jbcReserv/cmjReserv) * (jusdtJuReserv/jbcJuReserv) * priceTHB * 1) / 1)) * 0.01).toLocaleString('en-US', {maximumFractionDigits:0})}</> : <>฿0</>*/}</div>
                                </div>
                            </div>
                        </>
                    }
                    {mode === 1 &&
                        <div style={{margin: "20px 0", width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
                            <div style={{margin: "20px", padding: "20px 0", height: "450px", boxShadow: "6px 6px 0 #00000040"}} className="nftCard">
                                <div style={{width: "85%", textAlign: "left", fontSize: "20px"}} className="bold">Add LP</div>
                                <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                    <div style={{display: "flex"}}>
                                        <img style={{width: "38px", height: "38px", marginRight: "2.5px"}} src="/tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" alt="$JBC" />
                                        <Select
                                            options={[]}
                                            value={options[0]}
                                            styles={inputStyle}
                                            isSearchable={false}
                                        />
                                    </div>
                                    <div style={{height: "38px", lineHeight: 3, fontSize: "12px"}}>Balance: {jbcBalance}</div>
                                </div>
                                {liquidMode === 0 &&
                                    <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                        <input
                                            placeholder="0.0"
                                            style={{alignSelf: "flex-start", marginTop: 0, width: "190px", height: "40px", padding: "5px 20px", border: "1px solid #dddade"}}
                                            onChange={handleAdd}
                                            value={jbcAdd}
                                        />
                                        <div style={{padding: "15px 10px", border: "1px solid #dddade", cursor: "pointer"}} className="bold" onClick={maxLiqHandle1}>Max</div>
                                    </div>
                                }
                                {liquidMode === 1 &&
                                    <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                        <input
                                            placeholder="0.0"
                                            style={{alignSelf: "flex-start", marginTop: 0, width: "190px", height: "40px", padding: "5px 20px", border: "1px solid #dddade"}}
                                            onChange={handleAdd3}
                                            value={jbcJuAdd}
                                        /> 
                                        <div style={{padding: "15px 10px", border: "1px solid #dddade", cursor: "pointer"}} className="bold" onClick={maxLiqHandle3}>Max</div>
                                    </div>
                                }
                                <div className="fa fa-plus"></div>
                                <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                    <div style={{display: "flex"}}>
                                        {liquidMode === 0 && <img style={{width: "38px", height: "38px", marginRight: "2.5px"}} src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" alt="$CMJ" />}
                                        {liquidMode === 1 && <img style={{width: "38px", height: "38px", marginRight: "2.5px"}} src="/tokens/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi.png" alt="$JUSDT" />}
                                        {liquidMode === 0 &&
                                            <Select
                                                onChange={liquidModeSelect}
                                                options={options.filter(option => option.value !== 0)}
                                                value={options[1]}
                                                styles={inputStyle}
                                                isSearchable={false}
                                            />
                                        }
                                        {liquidMode === 1 &&
                                            <Select
                                                onChange={liquidModeSelect}
                                                options={options.filter(option => option.value !== 0)}
                                                value={options[2]}
                                                styles={inputStyle}
                                                isSearchable={false}
                                            />
                                        }
                                    </div>
                                    {liquidMode === 0 && <div style={{height: "38px", lineHeight: 3, fontSize: "12px"}}>Balance: {cmjBalance}</div>}
                                    {liquidMode === 1 && <div style={{height: "38px", lineHeight: 3, fontSize: "12px"}}>Balance: {jusdtBalance}</div>}
                                </div>
                                {liquidMode === 0 &&
                                    <>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <input
                                                placeholder="0.0"
                                                style={{alignSelf: "flex-start", marginTop: 0, width: "190px", height: "40px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                onChange={handleAdd2}
                                                value={cmjAdd}
                                            />
                                            <div style={{padding: "15px 10px", border: "1px solid #dddade", cursor: "pointer"}} className="bold" onClick={maxLiqHandle2}>Max</div>
                                        </div>
                                        {address !== null ?
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff", fontSize: "18px"}} className="bold" onClick={addliqHandle}>Add</div> :
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "not-allowed", boxShadow: "inset -2px -2px 0px 0.25px #00000040", background: "rgb(206, 208, 207)", textShadow: "rgb(255, 255, 255) 1px 1px", color: "rgb(136, 140, 143)", fontSize: "18px"}} className="bold">Add</div>
                                        }
                                    </>
                                }
                                {liquidMode === 1 &&
                                    <>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <input
                                                placeholder="0.0"
                                                style={{alignSelf: "flex-start", marginTop: 0, width: "190px", height: "40px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                onChange={handleAdd4}
                                                value={jusdtJuAdd}
                                            />
                                            <div style={{padding: "15px 10px", border: "1px solid #dddade", cursor: "pointer"}} className="bold" onClick={maxLiqHandle4}>Max</div>
                                        </div>
                                        {address !== null ?
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff", fontSize: "18px"}} className="bold" onClick={addliqHandle2}>Add</div> :
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "not-allowed", boxShadow: "inset -2px -2px 0px 0.25px #00000040", background: "rgb(206, 208, 207)", textShadow: "rgb(255, 255, 255) 1px 1px", color: "rgb(136, 140, 143)", fontSize: "18px"}} className="bold">Add</div>
                                        }
                                    </> 
                                }
                            </div>
                            <div style={{margin: "20px", padding: "20px 0", height: "450px", boxShadow: "6px 6px 0 #00000040", fontSize: "14px"}} className="nftCard">
                                <div style={{width: "85%", textAlign: "left", fontSize: "20px"}} className="bold">Remove LP</div>
                                {liquidMode === 0 &&
                                    <>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                                <div style={{height: "25px", lineHeight: 1.75}}>POOLED</div>
                                                <img style={{width: "28px", height: "28px", marginLeft: "7.5px"}} src="/tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" alt="$JBC" />
                                            </div>
                                            <div style={{marginLeft: "5px", height: "25px", lineHeight: 1.75}} className='bold'>
                                                {jbcPooled !== null ? <>{jbcPooled.toLocaleString('en-US', {minimumFractionDigits:3})}</> : <>0.000</>}
                                            </div>
                                        </div>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                                <div style={{height: "25px", lineHeight: 1.75}}>POOLED</div>
                                                <img style={{width: "28px", height: "28px", marginLeft: "7.5px"}} src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" alt="$CMJ" />
                                            </div>
                                            <div style={{marginLeft: "5px", height: "25px", lineHeight: 1.75}} className='bold'>
                                                {cmjPooled !== null ? <>{cmjPooled.toLocaleString('en-US', {minimumFractionDigits:3})}</> : <>0.000</>}
                                            </div>
                                        </div>
                                    </>
                                }
                                {liquidMode === 1 &&
                                    <>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                                <div style={{height: "25px", lineHeight: 1.75}}>POOLED</div>
                                                <img style={{width: "28px", height: "28px", marginLeft: "7.5px"}} src="/tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" alt="$JBC" />
                                            </div>
                                            <div style={{marginLeft: "5px", height: "25px", lineHeight: 2.5}} className='bold'>
                                                {jbcjuPooled !== null ? <>{jbcjuPooled.toLocaleString('en-US', {minimumFractionDigits:3})}</> : <>0.000</>}
                                            </div>
                                        </div>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                                <div style={{height: "25px", lineHeight: 1.75}}>POOLED</div>
                                                <img style={{width: "28px", height: "28px", marginLeft: "7.5px"}} src="/tokens/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi.png" alt="$JUSDT" />
                                            </div>
                                            <div style={{marginLeft: "5px", height: "25px", lineHeight: 2.5}} className='bold'>
                                                {jusdtjuPooled !== null ? <>{jusdtjuPooled.toLocaleString('en-US', {minimumFractionDigits:3})}</> : <>0.000</>}
                                            </div>
                                        </div>
                                    </>
                                }
                                <div style={{width: "85%", display: "flex", justifyContent: "space-between", fontSize: "14px"}}>
                                    <div style={{height: "25px", lineHeight: 1.75}}>LP VALUE:</div>
                                    <div className="bold" style={{marginLeft: "5px", height: "25px", lineHeight: 1.75}}>
                                        {jbcReserv !== 0 ?
                                            <>
                                                {liquidMode === 0 && <>~{(Math.floor((jbcPooled + (cmjPooled * (jbcReserv/cmjReserv))) * (jusdtJuReserv/jbcJuReserv) * priceTHB * 100) / 100).toLocaleString('en-US', {minimumFractionDigits:2})} THB</>}
                                                {liquidMode === 1 && <>~{(Math.floor((jusdtjuPooled + (jbcjuPooled * (jusdtJuReserv/jbcJuReserv))) * priceTHB * 100) / 100).toLocaleString('en-US', {minimumFractionDigits:2})} THB</>} 
                                            </> :
                                            <>0.000</>
                                        }
                                    </div>
                                </div>
                                <div style={{width: "85%", display: "flex", justifyContent: "space-between", fontSize: "14px"}}>
                                    <div style={{height: "25px", lineHeight: 1.75}}>LP SHARE:</div>
                                    <div className="bold" style={{marginLeft: "5px", height: "25px", lineHeight: 1.75}}>
                                        {lpShare !== 0 && julpShare !== 0 ?
                                            <>
                                                {liquidMode === 0 && <>{lpShare}%</>}
                                                {liquidMode === 1 && <>{julpShare}%</>}
                                            </> :
                                            <>0.000</>
                                        }
                                    </div>
                                </div>
                                {liquidMode === 0 &&
                                    <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                        <div style={{marginLeft: "5px", height: "25px"}}>
                                            <img style={{width: "28px", height: "28px"}} src="/tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" alt="$JBC" />
                                            <img style={{width: "28px", height: "28px", marginLeft: "7.5px"}} src="/tokens/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u.png" alt="$CMJ" />
                                        </div>
                                        <div className='bold' style={{marginLeft: "5px", height: "25px", lineHeight: 2.5}}>
                                            {lpBalance !== null ? <>Balance: {lpBalance.toLocaleString('en-US', {minimumFractionDigits:3})}</> : <>0.000</>}
                                        </div>
                                    </div>
                                }
                                {liquidMode === 1 &&
                                    <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                    <div style={{marginLeft: "5px", height: "25px"}}>
                                            <img style={{width: "28px", height: "28px"}} src="/tokens/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq.png" alt="$JBC" />
                                            <img style={{width: "28px", height: "28px", marginLeft: "7.5px"}} src="/tokens/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi.png" alt="$JUSDT" />
                                        </div>
                                        <div className='bold' style={{marginLeft: "5px", height: "25px", lineHeight: 2.5}}>
                                            {julpBalance !== null ? <>Balance: {julpBalance.toLocaleString('en-US', {minimumFractionDigits:3})}</> : <>0.000</>}
                                        </div>
                                    </div>
                                }
                                {liquidMode === 0 &&
                                    <>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <input
                                                placeholder="0.0"
                                                style={{alignSelf: "flex-start", marginTop: 0, width: "190px", height: "40px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                onChange={handleSell}
                                                value={lpSell}
                                            />
                                            <div style={{padding: "15px 10px", border: "1px solid #dddade", cursor: "pointer"}} className="bold" onClick={maxRemLiqHandle1}>Max</div>
                                        </div>
                                        {address !== null ?
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff", fontSize: "18px"}} className="bold" onClick={removeliqHandle}>Remove</div> :
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "not-allowed", boxShadow: "inset -2px -2px 0px 0.25px #00000040", background: "rgb(206, 208, 207)", textShadow: "rgb(255, 255, 255) 1px 1px", color: "rgb(136, 140, 143)", fontSize: "18px"}} className="bold" >Remove</div>
                                        }
                                    </>
                                }
                                {liquidMode === 1 &&
                                    <>
                                        <div style={{width: "85%", display: "flex", justifyContent: "space-between"}}>
                                            <input
                                                placeholder="0.0"
                                                style={{alignSelf: "flex-start", marginTop: 0, width: "190px", height: "40px", padding: "5px 20px", border: "1px solid #dddade"}}
                                                onChange={handleSell2}
                                                value={julpSell}
                                            />
                                            <div style={{padding: "15px 10px", border: "1px solid #dddade", cursor: "pointer"}} className="bold" onClick={maxRemLiqHandle2}>Max</div>
                                        </div>
                                        {address !== null ?
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "pointer", boxShadow: "inset -2px -2px 0px 0.25px #00000040", backgroundColor: "rgb(97, 218, 251)", color: "#fff", fontSize: "18px"}} className="bold" onClick={removeliqHandle2}>Remove</div> :
                                            <div style={{letterSpacing: "1px", width: "240px", padding: "15px 30px", height: "fit-content", cursor: "not-allowed", boxShadow: "inset -2px -2px 0px 0.25px #00000040", background: "rgb(206, 208, 207)", textShadow: "rgb(255, 255, 255) 1px 1px", color: "rgb(136, 140, 143)", fontSize: "18px"}} className="bold">Remove</div>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    }
                    {mode === 2 && <GameSwapFarm config={config} address={address} setisLoading={setisLoading} setTxupdate={setTxupdate} txupdate={txupdate} setisError={setisError} setErrMsg={setErrMsg} lpBalance={lpBalance} julpBalance={julpBalance} jbcPooled={jbcPooled} cmjPooled={cmjPooled} jbcjuPooled={jbcjuPooled} jusdtjuPooled={jusdtjuPooled} jcExchange={jcExchange} exchangeABI={exchangeABI} juExchange={juExchange} exchangeJulpABI={exchangeJulpABI} cmjToken={cmjToken} erc20Abi={erc20Abi} cmjBalance={cmjBalance} jbcReserv={jbcReserv} cmjReserv={cmjReserv} jbcJuReserv={jbcJuReserv} jusdtJuReserv={jusdtJuReserv} cmjBalanceFull={cmjBalanceFull} farmJdaoABI={farmJdaoABI} priceTHB={priceTHB} cmdaoAmmNpcABI={cmdaoAmmNpcABI} />}
                </div>
            }
        </>
    )
}

export default GameSwap