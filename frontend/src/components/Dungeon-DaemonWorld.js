import React from 'react'
import { ethers } from 'ethers'
import { readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react';
import { ThreeDots } from 'react-loading-icons'

const angelplus = '0x853beB37aBAfA021818B9f66e5333E657Ceb29d0'
const swarLab = '0x5e18a8B78d5395371308C54719fead810Ce2aCd2'
const uswar = '0x04Aa6Bd718c64E5253968c6C5DAc0Bce3a10424c'
const dunANGB = '0x59c1C2f5FA76DB933B97b7c54223129e2A398534'
const providerJBC = new ethers.getDefaultProvider('https://rpc-l1.jibchain.net/')

const Daemonworld = ({ config, intrasubModetext, navigate, callMode, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, erc721Abi, erc20Abi, dunAngbABI, uswarABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [addr, setAddr] = React.useState(address)
    const [isTransferModal, setIsTransferModal] = React.useState(false)
    const [transferNftCol, setTransferNftCol] = React.useState(null)
    const [transferNftid, setTransferNftid] = React.useState(null)
    const [transferName, setTransferName] = React.useState("")
    const [transferTo, setTransferTo] = React.useState(null)
    const [isSpecialModal, setIsSpecialModal] = React.useState(false)
    const [specialModal, setSpecialModal] = React.useState(0)
    const [nft, setNft] = React.useState([])
    const [characterSlot, setCharacterSlot] = React.useState(null)
    const [characterSlotLevel, setCharacterSlotLevel] = React.useState(null)
    const [helmetSlot, setHelmetSlot] = React.useState(null)
    const [helmetSlotLevel, setHelmetSlotLevel] = React.useState(null)
    const [armorSlot, setArmorSlot] = React.useState(null)
    const [armorSlotLevel, setArmorSlotLevel] = React.useState(null)
    const [ringSlot, setRingSlot] = React.useState(null)
    const [ringSlotLevel, setRingSlotLevel] = React.useState(null)
    const [shieldSlot, setShieldSlot] = React.useState(null)
    const [shieldSlotLevel, setShieldSlotLevel] = React.useState(null)
    const [bootsSlot, setBootsSlot] = React.useState(null)
    const [bootsSlotLevel, setBootsSlotLevel] = React.useState(null)
    const [swordSlot, setSwordSlot] = React.useState(null)
    const [swordSlotLevel, setSwordSlotLevel] = React.useState(null)
    const [fairySlot, setFairySlot] = React.useState(null)
    const [fairySlotLevel, setFairySlotLevel] = React.useState(null)
    const [allPower, setAllPower] = React.useState(0)
    const [isStakeNow, setIsStakeNow] = React.useState(null)
    const [timeToRunout, setTimeToRunout] = React.useState(null)
    const [isRunout, setIsRunout] = React.useState(false)
    const [gasselected, setGasselected] = React.useState("SWAR")
    const [angbPending, setAngbPending] = React.useState(0)
    const [swarBalance, setSwarBalance] = React.useState(0)
    const [uswarBalance, setUSWARBalance] = React.useState(0)
    const [angbBalance, setAngbBalance] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)
        if (intrasubModetext === undefined) {
            navigate('/dungeon/daemon-world/' + address)
        } else if (intrasubModetext.length === 42) {
            setAddr(intrasubModetext)
        } else if (address === undefined) {
            navigate('/dungeon/daemon-world/null')
        } else {
            navigate('/dungeon/daemon-world/' + address)
        }
        const apnftSC = new ethers.Contract(angelplus, erc721Abi, providerJBC)
        setNft([])
        
        const thefetch = async () => {
            const nftEQ = addr !== null ? await readContract(config, {
                address: dunANGB,
                abi: dunAngbABI,
                functionName: 'nftEquip',
                args: [addr],
                chainId: 8899
            }) : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null]

            const data = addr !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[0])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[3])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[4])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[5])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[6])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[2])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[1])],
                        chainId: 8899
                    },
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[7])],
                        chainId: 8899
                    },
                    {
                        address: swarLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: dunANGB,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: dunANGB,
                        abi: dunAngbABI,
                        functionName: 'calculateRewards',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: uswar,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                ],
            }) : [{result: ''}, {result: ''}, {result: ''}, {result: ''}, {result: ''}, {result: ''}, {result: ''}, {result: ''}, {result: 0}, {result: 0}, {result: 0}, {result: 0}]

            let nfts = []
            let response1 = null
            try {
                response1 = data[0].status === 'success' ? await fetch(data[0].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft1 = response1 !== null ? await response1.json() : {image: null, name: null}
            const nftEQ_1 = nft1.image !== null ? nft1.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_1_Name = nft1.name
            if (response1 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[0]),
                    Name: nftEQ_1_Name,
                    Image: nftEQ_1,
                    Description: nft1.description,
                    Attribute: nft1.attributes,
                    RewardPerSec: Number(nftEQ[0]) % 100000,
                    isStaked: true
                })
            }
            let response2 = null
            try {
                response2 = data[1].status === 'success' ? await fetch(data[1].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft2 = response2 !== null ? await response2.json() : {image: null, name: null}
            const nftEQ_2_Img = nft2.image !== null ? nft2.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_2_Name = nft2.name
            if (response2 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[3]),
                    Name: nftEQ_2_Name,
                    Image: nftEQ_2_Img,
                    Description: nft2.description,
                    Attribute: nft2.attributes,
                    RewardPerSec: Number(nftEQ[3]) % 100000,
                    isStaked: true
                })
            }
            let response3 = null
            try {
                response3 = data[2].status === 'success' ? await fetch(data[2].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft3 = response3 !== null ? await response3.json() : {image: null, name: null}
            const nftEQ_3 = nft3.image !== null ? nft3.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_3_Name = nft3.name
            if (response3 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[4]),
                    Name: nftEQ_3_Name,
                    Image: nftEQ_3,
                    Description: nft3.description,
                    Attribute: nft3.attributes,
                    RewardPerSec: Number(nftEQ[4]) % 100000,
                    isStaked: true
                })
            }
            let response4 = null
            try {
                response4 = data[3].status === 'success' ? await fetch(data[3].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft4 = response4 !== null ? await response4.json() : {image: null, name: null}
            const nftEQ_4 = nft4.image !== null ? nft4.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_4_Name = nft4.name
            if (response4 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[5]),
                    Name: nftEQ_4_Name,
                    Image: nftEQ_4,
                    Description: nft4.description,
                    Attribute: nft4.attributes,
                    RewardPerSec: Number(nftEQ[5]) % 100000,
                    isStaked: true
                })
            }
            let response5 = null
            try {
                response5 = data[4].status === 'success' ? await fetch(data[4].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft5 = response5 !== null ? await response5.json() : {image: null, name: null}
            const nftEQ_5 = nft5.image !== null ? nft5.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_5_Name = nft5.name
            if (response5 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[6]),
                    Name: nftEQ_5_Name,
                    Image: nftEQ_5,
                    Description: nft5.description,
                    Attribute: nft5.attributes,
                    RewardPerSec: Number(nftEQ[6]) % 100000,
                    isStaked: true
                })
            }
            let response6 = null
            try {
                response6 = data[5].status === 'success' ? await fetch(data[5].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft6 = response6 !== null ? await response6.json() : {image: null, name: null}
            const nftEQ_6 = nft6.image !== null ? nft6.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_6_Name = nft6.name
            if (response6 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[2]),
                    Name: nftEQ_6_Name,
                    Image: nftEQ_6,
                    Description: nft6.description,
                    Attribute: nft6.attributes,
                    RewardPerSec: Number(nftEQ[2]) % 100000,
                    isStaked: true
                })
            }
            let response7 = null
            try {
                response7 = data[6].status === 'success' ? await fetch(data[6].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft7 = response7 !== null ? await response7.json() : {image: null, name: null}
            const nftEQ_7 = nft7.image !== null ? nft7.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_7_Name = nft7.name
            if (response7 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[1]),
                    Name: nftEQ_7_Name,
                    Image: nftEQ_7,
                    Description: nft7.description,
                    Attribute: nft7.attributes,
                    RewardPerSec: Number(nftEQ[1]) % 100000,
                    isStaked: true
                })
            }
            let response8 = null
            try {
                response8 = data[7].status === 'success' ? await fetch(data[7].result.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")) : null
            } catch {}
            const nft8 = response8 !== null ? await response8.json() : {image: null, name: null}
            const nftEQ_8 = nft8.image !== null ? nft8.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/") : null
            const nftEQ_8_Name = nft8.name
            if (response8 !== null) {
                nfts.push({
                    Col: 1,
                    Id: Number(nftEQ[7]),
                    Name: nftEQ_8_Name,
                    Image: nftEQ_8,
                    Description: nft8.description,
                    Attribute: nft8.attributes,
                    RewardPerSec: Number(nftEQ[7]) % 100000,
                    isStaked: true
                })
            }
            const allPow = Number(nftEQ[8])
            const isStaked = nftEQ[10]
            const refuelAt = Number(nftEQ[9])
            const swarBal = data[8].result
            const angbBal = data[9].result
            const rewardPending = isStaked ? data[10].result : 0
            const uswarBal = data[11].result

            let walletRemoveDup = []
            if (chain !== undefined && chain.id === 8899 && addr !== null) {
                const walletFilter = await apnftSC.filters.Transfer(null, addr, null)
                const walletEvent = await apnftSC.queryFilter(walletFilter, 2768102, "latest")
                const walletMap = await Promise.all(walletEvent.map(async (obj) => String(obj.args.tokenId)))
                walletRemoveDup = walletMap.filter((obj, index) => walletMap.indexOf(obj) === index)
            }
            const data2 = addr !== null ? await readContracts(config, {
                contracts: walletRemoveDup.map((item) => (
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'ownerOf',
                        args: [String(item)],
                    }
                ))
            }) : null
            let yournftwallet = []
            for (let i = 0; i <= walletRemoveDup.length - 1 && addr !== null; i++) {
                if (data2[i].result.toUpperCase() === addr.toUpperCase()) {
                    yournftwallet.push({Id: String(walletRemoveDup[i])})
                }
            }
            const data3 = addr !== null ? await readContracts(config, {
                contracts: yournftwallet.map((item) => (
                    {
                        address: angelplus,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [String(item.Id)],
                    }
                ))
            }) : null
            for (let i = 0; i <= yournftwallet.length - 1; i++) {
                const nftipfs = data3[i].result
                let nft = {name: "", image: "", description: "", attributes: ""}
                try {
                    const response = await fetch(nftipfs.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"))
                    nft = await response.json()
                } catch {}
                nfts.push({
                    Col: 1,
                    Id: yournftwallet[i].Id,
                    Name: nft.name,
                    Image: nft.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
                    Description: nft.description,
                    Attribute: nft.attributes,
                    RewardPerSec: Number(yournftwallet[i].Id.slice(-5)),
                    isStaked: false
                })
            }
            if (nfts.length === 0) { nfts.push(null) }
            
            return [
                nfts, nftEQ_1, nftEQ_1_Name, nftEQ_2_Img, nftEQ_2_Name, nftEQ_3, nftEQ_3_Name, nftEQ_4, nftEQ_4_Name, nftEQ_5, nftEQ_5_Name, nftEQ_6, nftEQ_6_Name, nftEQ_7, nftEQ_7_Name, nftEQ_8, nftEQ_8_Name,
                allPow, isStaked, refuelAt, rewardPending, swarBal, angbBal, uswarBal,
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
            setNft(result[0])
            setCharacterSlot(result[1])
            result[2] !== null && result[2].slice(-2, -1) === "+" ? setCharacterSlotLevel(result[2].slice(-1)) : setCharacterSlotLevel(null)
            setRingSlot(result[3])
            result[4] !== null && result[4].slice(-2, -1) === "+" ? setRingSlotLevel(result[4].slice(-1)) : setRingSlotLevel(null)
            setShieldSlot(result[5])
            result[6] !== null && result[6].slice(-2, -1) === "+" ? setShieldSlotLevel(result[6].slice(-1)) : setShieldSlotLevel(null)
            setBootsSlot(result[7])
            result[8] !== null && result[8].slice(-2, -1) === "+" ? setBootsSlotLevel(result[8].slice(-1)) : setBootsSlotLevel(null)
            setSwordSlot(result[9])
            result[10] !== null && result[10].slice(-2, -1) === "+" ? setSwordSlotLevel(result[10].slice(-1)) : setSwordSlotLevel(null)
            setArmorSlot(result[11])
            result[12] !== null && result[12].slice(-2, -1) === "+" ? setArmorSlotLevel(result[12].slice(-1)) : setArmorSlotLevel(null)
            setHelmetSlot(result[13])
            result[14] !== null && result[14].slice(-2, -1) === "+" ? setHelmetSlotLevel(result[14].slice(-1)) : setHelmetSlotLevel(null)
            setFairySlot(result[15])
            result[16] !== null && result[16].slice(-2, -1) === "+" ? setFairySlotLevel(result[16].slice(-1)) : setFairySlotLevel(null)
            setAllPower(result[17])
            setIsStakeNow(result[18])
            const gasOut = new Date((Number(result[19]) * 1000) + (86400 * 1000))
            result[19] !== 0 ?
                setTimeToRunout(gasOut.toLocaleString('es-CL')) :
                setTimeToRunout(null)
            result[19] !== 0 && Date.now() - (Number(result[19]) * 1000) > (86400 * 1000) ? setIsRunout(true) : setIsRunout(false)
            setAngbPending(ethers.utils.formatEther(String(result[20])))
            setSwarBalance(ethers.utils.formatEther(String(result[21])))
            setAngbBalance(ethers.utils.formatEther(String(result[22])))
            setUSWARBalance(ethers.utils.formatEther(String(result[23])))
        })

    }, [config, address, addr, intrasubModetext, navigate, chain, txupdate, erc721Abi, erc20Abi, dunAngbABI])

    const transferToHandle = (event) => { setTransferTo(event.target.value) }
    const transferNFT = (_col, _nftid) => {
        setIsTransferModal(true)
        setTransferNftCol(_col)
        setTransferNftid(_nftid)
        for (let i = 0; i <= nft.length - 1; i++) {
            if (nft[i].Id === Number(_nftid)) {
                setTransferName(nft[i].Name)
            }
        }
    }
    const transferNFTConfirm = async () => {
        setisLoading(true)
        let addr = ''
        if (transferNftCol === 1) {
            addr = angelplus
        }
        try {
            let { request } = await simulateContract(config, {
                address: addr,
                abi: erc721Abi,
                functionName: 'transferFrom',
                args: [address, transferTo, transferNftid],
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

    const equipNft = async (_nftid) => {
        setisLoading(true)
        if (Number(_nftid.slice(0, 7)) >= 8010001 && Number(_nftid.slice(0, 7)) <= 8010050) {
            setSpecialModal(1)
        } else if (Number(_nftid.slice(0, 7)) >= 8010051 && Number(_nftid.slice(0, 7)) <= 8010120) {
            setSpecialModal(2)
        } else if (Number(_nftid.slice(0, 7)) >= 8010121 && Number(_nftid.slice(0, 7)) <= 8010200) {
            setSpecialModal(3)
        }
        setIsSpecialModal(true)
        try {
            const nftAllow = await readContract(config, {
                address: angelplus,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== dunANGB.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: angelplus,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [dunANGB, _nftid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: dunANGB,
                abi: dunAngbABI,
                functionName: 'equip',
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

    const unstakeNft = async (_slot) => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: dunANGB,
                abi: dunAngbABI,
                functionName: 'unstake',
                args: [_slot],
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

    const refuelStake = async () => {
        setisLoading(true)
        let gasAddr = ''
        let gasIndex = 0
        let swarUsage = 0
        let craftIndex = null
        let uAddr = ''
        if (gasselected === "SWAR") {
            gasAddr = swarLab
            uAddr = uswar
            gasIndex = 2
            swarUsage = 0.2
            craftIndex = 1
        }
        try {
            if (Number(uswarBalance) === 0) {
                const gasAllow0 = await readContract(config, {
                    address: gasAddr,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, uAddr],
                })
                if (Number(ethers.utils.formatEther(gasAllow0)) < swarUsage) {
                    let { request } = await simulateContract(config, {
                        address: gasAddr,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [uAddr, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                let { request } = await simulateContract(config, {
                    address: uAddr,
                    abi: uswarABI,
                    functionName: 'craft',
                    args: [craftIndex]
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const gasAllow = await readContract(config, {
                address: uAddr,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, dunANGB],
            })
            if (Number(ethers.utils.formatEther(gasAllow)) < 1) {
                let { request } = await simulateContract(config, {
                    address: uAddr,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [dunANGB, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: dunANGB,
                abi: dunAngbABI,
                functionName: 'refuel',
                args: [gasIndex]
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

    return (
        <>
            {isTransferModal &&
                <div className="centermodal">
                    <div className="wrapper">
                        <div className="bold" style={{width: "500px", height: "250px", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", fontSize: "40px", letterSpacing: "3px"}}>
                            <div style={{fontSize: "20px"}}>{transferName}</div>
                            <input style={{width: "80%", padding: "10px", fontSize: "20px"}} value={transferTo} onChange={transferToHandle} placeholder="Enter 0x..."></input>
                            <div className="button" style={{width: "50%"}} onClick={transferNFTConfirm}>TRANSFER</div>
                            <div className="button" style={{width: "50%", background: "gray"}} onClick={() => setIsTransferModal(false)}>CLOSE</div>
                        </div>
                    </div>
                </div>
            }
            {isSpecialModal &&
                <div style={{zIndex: "1000"}} className="centermodal">
                    <div className="wrapper">
                        <div className="bold" style={{width: "500px", height: "700px", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", fontSize: "40px", letterSpacing: "3px"}}>
                            <video autoPlay loop width="400">
                                {specialModal === 1 && <source src="https://gateway.pinata.cloud/ipfs/bafybeie2iuhr7m6sd6knivqxev6bzhfbujfnbxtcudgb3jcy3jogjhztfu" type="video/mp4" />}
                                {specialModal === 2 && <source src="https://gateway.pinata.cloud/ipfs/bafybeibu3cbsmupwfxxni2k525h3gavrjyvtyk6i5xa3wx6k4t4gzk3bae" type="video/mp4" />}
                                {specialModal === 3 && <source src="https://gateway.pinata.cloud/ipfs/bafybeiawnfpq4e6nxowydbmchi3kx6aq3d7wj76yx35dvz7hbbd3ij67pa" type="video/mp4" />}
                            </video>
                            <div className="button" style={{width: "50%", background: "gray"}} onClick={() => setIsSpecialModal(false)}>CLOSE</div>
                        </div>
                    </div>
                </div>
            }
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", backgroundImage: "url('https://gateway.pinata.cloud/ipfs/bafybeicatk66gnfauhbytqbqbxlbu47hg2j3wzxiatzfs4xjwfhaozvpne')", overflow: "scroll"}}>
                <div className="SubfieldBanner">
                    <div className="pixel" style={{fontSize: "75px", color: "#fff", width: "fit-content"}}>Daemon World</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="https://gateway.pinata.cloud/ipfs/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m" width="150" alt="$ANGB" />
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
                <div style={{margin: "0", minHeight: "inherit", alignItems: "flex-start"}} className="collection">
                    <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", overflow: "scroll"}} className="pixel mainprofile">
                        <div style={{backdropFilter: "blur(14px)", border: "none", justifyContent: "space-around", padding: "30px", width: "1560px", height: "fit-content", marginBottom: "10px", display: "flex", flexDirection: "row", textAlign: "left", flexWrap: "wrap"}} className="nftCard">
                            <div style={{background: "#FFFFFF99", position: "relative", width: "370px", height: "360px", margin: "5px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around", boxShadow: "3px 3px 0 #0d0a1f"}}>
                                <div style={{position: "absolute", top: -15, right: -15, padding: "7.5px 20px", width: "100px", background: "#000", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <div className='light' style={{color: "#fff"}}>Reward x10</div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px", borderBottom: "1px solid"}}>
                                <div style={{fontSize: "22px", lineHeight: "15px"}}>NFT STAKING</div>
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                        {isStakeNow ?
                                            <>
                                                {isRunout ?
                                                    <>
                                                        <div style={{backgroundColor: "red", width: 16, height: 16, border: "3px solid #ddffdb", borderRadius: "50%", marginRight: 7}}></div>
                                                        <div>Run Out of Gas</div>
                                                    </> :
                                                    <>
                                                        <div style={{background: "rgb(239, 194, 35)", width: 16, height: 16, border: "3px solid #ddffdb", borderRadius: "50%", marginRight: 7}}></div>
                                                        <div>On Staking</div>
                                                    </>
                                                }
                                            </> :
                                            <>
                                                {!isStakeNow &&
                                                    <>
                                                        <div style={{background: "rgb(29, 176, 35)", width: 16, height: 16, border: "3px solid #ddffdb", borderRadius: "50%", marginRight: 7}}></div>
                                                        <div>Available for stake</div>
                                                    </>
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                    {intrasubModetext !== null && intrasubModetext !== undefined && intrasubModetext.length === 42 ?
                                        <><div>ADDRESS</div><div>{intrasubModetext.slice(0, 4) + "..." + intrasubModetext.slice(-4)}</div></> :
                                        <><div>ADDRESS</div><div>-</div></>
                                    }
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                    TOTAL POWER PER SEC
                                    <div>{Number(allPower).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                    ANGB BALANCE
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m" height="20" alt="$ANGB"/>
                                        <div style={{marginLeft: "5px"}}>{Number(angbBalance).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                                    </div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                    ANGB PENDING
                                    <div style={{display: "flex", flexDirection: "row", color: timeToRunout !== 0 && timeToRunout !== null  ? "#ff007a" : "#5f6476"}}>
                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m" height="20" alt="$ANGB"/>
                                        <div style={{marginLeft: "5px"}}>{Number(angbPending).toLocaleString('en-US', {maximumFractionDigits:3})}</div>
                                    </div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                    GAS USAGE
                                    <select style={{padding: "2.5px 5px", fontSize: "16px", background: "transparent"}} className="pixel" value={gasselected} onChange={(event) => {setGasselected(event.target.value)}}>
                                        <option value="SWAR">$SWAR</option>
                                    </select>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        {gasselected === "SWAR" &&
                                            <>
                                                <img src="https://gateway.pinata.cloud/ipfs/bafkreib4zlmwnydgolgzkfldaz2zsxh6pg3k4wemiigura7gbnj7i36ygi" height="20" alt="$SWAR"/>
                                                <div style={{marginLeft: "5px"}}>{Number(swarBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                                            </>
                                        }
                                        <div style={{marginLeft: "5px"}}>/0.2</div>
                                    </div>
                                </div>
                                {isStakeNow ?
                                    <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>GAS RUN OUT AT <div>{timeToRunout}</div></div>
                                    : <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>GAS RUN OUT IN <div>1 day</div></div>
                                }
                                {address !== null && intrasubModetext !== undefined ?
                                    <>
                                        {address.toUpperCase() === intrasubModetext.toUpperCase() ?
                                            <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                {isStakeNow ?
                                                    <>
                                                        <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">REFUEL GAS</div>
                                                        <div style={{alignSelf: "center", background: isRunout ? "#67BAA7" : "#ff007a"}} className="button" onClick={() => unstakeNft(0)}>HARVEST & UNSTAKE</div>
                                                    </> :
                                                    <>
                                                        {isStakeNow !== null && ((gasselected === "SWAR" && (Number(swarBalance) >= 0.2 || Number(uswarBalance) >= 1))) ?
                                                            <>
                                                                {allPower !== 0 ?
                                                                    <div style={{alignSelf: "center"}} className="button" onClick={refuelStake}>REFUEL GAS</div> :
                                                                    <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">REFUEL GAS</div>
                                                                }
                                                            </> :
                                                            <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">REFUEL GAS</div>
                                                        }
                                                        <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="button">HARVEST & UNSTAKE</div>
                                                    </>
                                                }
                                            </div> :
                                            <div style={{height: "41px"}}></div>
                                        }
                                    </> :
                                    <div style={{height: "41px"}}></div>
                                }
                            </div>
                            <div className='slotbox noscroll'>
                                <div style={{position: "relative", width: "150px", height: "400px", padding: "20px 20px 20px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
                                    {helmetSlot !== null ?
                                        <img src={helmetSlot} width="100px" alt="Can not load metadata." /> :
                                        <div style={{borderRadius: "16px", border: "1px solid gray", width: "100px", height: "100px"}}></div>
                                    }
                                    {helmetSlotLevel !== null && <div className="slotlevel2" style={{position: "absolute", top: "85px", fontSize: "25px"}}>+{helmetSlotLevel}</div>}
                                    {armorSlot !== null ?
                                        <img src={armorSlot} width="100px" alt="Can not load metadata." /> :
                                        <div style={{borderRadius: "16px", border: "1px solid gray", width: "100px", height: "100px"}}></div>
                                    }
                                    {armorSlotLevel !== null && <div className="slotlevel2" style={{position: "absolute", top: "237.5px", fontSize: "25px"}}>+{armorSlotLevel}</div>}
                                    {bootsSlot !== null ?
                                        <img src={bootsSlot} width="100px" alt="Can not load metadata." /> :
                                        <div style={{borderRadius: "16px", border: "1px solid gray", width: "100px", height: "100px"}}></div>
                                    }
                                    {bootsSlotLevel !== null && <div className="slotlevel2" style={{position: "absolute", top: "385px", fontSize: "25px"}}>+{bootsSlotLevel}</div>}
                                </div>
                                <div style={{position: "relative", width: "300px", height: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>
                                    <div style={{width: "300px", marginBottom: "20px", height: "25px"}}></div>
                                    {nft.length > 0 ?
                                        <>
                                            {characterSlot !== null ?
                                                <img src={characterSlot} width="300px" alt="Can not load metadata." /> :
                                                <div style={{width: "300px", height: "300px", borderRadius: "16px", border: "1px solid gray"}}></div>
                                            }
                                        </> :
                                        <div style={{width: "300px", height: "300px", borderRadius: "16px", border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <ThreeDots fill="#5f6476" />
                                        </div>
                                    }
                                    {characterSlotLevel !== null && <div style={{position: "absolute", top: "305px", right: "10px", fontSize: "25px"}}>Lv.{characterSlotLevel}</div>}
                                </div>
                                <div style={{position: "relative", width: "300px", height: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>
                                    <div style={{width: "300px", marginBottom: "20px", height: "25px"}}></div>
                                    {nft.length > 0 ?
                                        <>
                                            {fairySlot !== null ?
                                                <img src={fairySlot} width="250px" alt="Can not load metadata." /> :
                                                <div style={{width: "250px", height: "375px", borderRadius: "16px", border: "1px solid gray"}}></div>
                                            }
                                        </> :
                                        <div style={{width: "250px", height: "375px", borderRadius: "16px", border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <ThreeDots fill="#5f6476" />
                                        </div>
                                    }
                                    {fairySlotLevel !== null && <div style={{position: "absolute", top: "360px", right: "35px", fontSize: "25px"}}>Lv.{fairySlotLevel}</div>}
                                </div>
                                <div style={{position: "relative", width: "150px", height: "400px", padding: "20px 0 20px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
                                    {ringSlot !== null ?
                                        <img src={ringSlot} width="100px" alt="Can not load metadata." /> :
                                        <div style={{borderRadius: "16px", border: "1px solid gray", width: "100px", height: "100px"}}></div>
                                    }
                                    {ringSlotLevel !== null && <div className="slotlevel" style={{position: "absolute", top: "85px", fontSize: "25px"}}>+{ringSlotLevel}</div>}
                                    {shieldSlot !== null ?
                                        <img src={shieldSlot} width="100px" alt="Can not load metadata." /> :
                                        <div style={{borderRadius: "16px", border: "1px solid gray", width: "100px", height: "100px"}}></div>
                                    }
                                    {shieldSlotLevel !== null && <div className="slotlevel" style={{position: "absolute", top: "237.5px", fontSize: "25px"}}>+{shieldSlotLevel}</div>}
                                    {swordSlot !== null ?
                                        <img src={swordSlot} width="100px" alt="Can not load metadata." /> :
                                        <div style={{borderRadius: "16px", border: "1px solid gray", width: "100px", height: "100px"}}></div>
                                    }
                                    {swordSlotLevel !== null && <div className="slotlevel" style={{position: "absolute", top: "385px", fontSize: "25px"}}>+{swordSlotLevel}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {nft.length > 0 ?
                        <div style={{width: "1650px", margin: "40px 0 80px 0", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", flexWrap: "wrap"}}>
                            {nft[0] !== null ?
                                <>
                                    {nft.map((item, index) => (
                                        <div style={{backdropFilter: "blur(14px)", border: 0, justifyContent: "space-around", padding: "20px", margin: "10px"}} className="nftCard" key={index}>
                                            <div style={{width: "150px", height: "150px", display: "flex", justifyContent: "center", overflow: "hidden"}}>
                                                <img src={item.Image} height="100%" alt="Can not load metadata." />
                                            </div>
                                            <div className="emp bold">{item.Name}</div>
                                            <div className="bold">{item.RewardPerSec} power</div>
                                            <div style={{fontSize: "12px", textAlign: "left", wordBreak: "break-word"}} className="light">{item.Description}</div>
                                            {address !== null && intrasubModetext !== undefined ?
                                                <>
                                                    {address.toUpperCase() === intrasubModetext.toUpperCase() ?
                                                        <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                                            {item.isStaked ?
                                                                <div style={{background: "gray"}} className="pixel button" onClick={() => unstakeNft((item.Id / 100000000000) | 0)}>UNEQUIP</div> :
                                                                <>
                                                                    {!isStakeNow &&
                                                                        <div style={{alignSelf: "center"}} className="pixel button" onClick={() => equipNft(item.Id)}>EQUIP</div>
                                                                    }
                                                                    <div style={{alignSelf: "center", background: "gray"}} className="pixel button" onClick={() => transferNFT(item.Col, item.Id)}>TRANSFER</div>
                                                                </>
                                                            }
                                                        </div> :
                                                        <div style={{height: "41px"}}></div>
                                                    }
                                                </> :
                                                <div style={{height: "41px"}}></div>
                                            }
                                        </div>
                                    ))}
                                </> :
                                <div style={{backdropFilter: "blur(14px)", border: 0, justifyContent: "center", padding: "20px", margin: "10px"}} className="nftCard">
                                    {address !== null ?
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
                        </div> :
                        <div style={{width: "1650px", margin: "40px 0 80px 0", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}> 
                            <div className="nftCard" style={{backdropFilter: "blur(14px)", boxShadow: "none", border: 0, justifyContent: "center"}}>
                                <ThreeDots fill="#5f6476" />
                                <div className="bold" style={{marginTop: "80px"}}>Loading NFTs...</div>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Daemonworld