import React from 'react'
import { ethers } from 'ethers'
import { readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react';
import { ThreeDots } from 'react-loading-icons'

const hexajibjib = '0x20724DC1D37E67B7B69B52300fDbA85E558d8F9A'
const ctunaLab = '0xD9Be0e64053c8E0A0F868577F379C0ced5A28aF0'
const sx31Lab = '0xd431d826d7a4380b9259612176f00528b88840a7'
const pzaLab = '0x09DcdCFc6C48803681a3422997c679E773656763'
const upzaToken = '0x44AE653D73cad7e8989C607959f8F64051E3284F'
const dunJasper = '0xe83567Cd0f3Ed2cca21BcE05DBab51707aff2860'
const dunJasperL2 = '0xDe5770c72cEEE0d73503E827973cfD200431ABd4'
const mintStOPT_Router = '0xeFb6F6018F5D6c0D1e58F751a57fa716e72d1182'
const salonRouter = '0x76B6B24BA53042A0e02Cc0e84c875d74EAeFb74a'
const providerJBC = new ethers.getDefaultProvider('https://rpc-l1.jibchain.net/')

const Jaspercave = ({ config, intrasubModetext, navigate, callMode, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, erc721Abi, erc20Abi, dunJasperABI, dunJasperL2ABI, mintStOPTABI, salonABI, ubbqABI }) => {
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
    const [nft, setNft] = React.useState([])
    const [characterSlot, setCharacterSlot] = React.useState(null)
    const [characterSlotLevel, setCharacterSlotLevel] = React.useState(null)
    const [isOp, setIsOp] = React.useState(null)
    const [hatSlot, setHatSlot] = React.useState(null)
    const [hatSlotLevel, setHatSlotLevel] = React.useState(null)
    const [clothSlot, setClothSlot] = React.useState(null)
    const [clothSlotLevel, setClothSlotLevel] = React.useState(null)
    const [accSlot, setAccSlot] = React.useState(null)
    const [accSlotLevel, setAccSlotLevel] = React.useState(null)
    const [backSlot, setBackSlot] = React.useState(null)
    const [backSlotLevel, setBackSlotLevel] = React.useState(null)
    const [shoesSlot, setShoesSlot] = React.useState(null)
    const [shoesSlotLevel, setShoesSlotLevel] = React.useState(null)
    const [weaponSlot, setWeaponSlot] = React.useState(null)
    const [wpSlotLevel, setWpSlotLevel] = React.useState(null)
    const [allPower, setAllPower] = React.useState(0)
    const [isStakeNow, setIsStakeNow] = React.useState(null)
    const [timeToRunout, setTimeToRunout] = React.useState(null)
    const [isRunout, setIsRunout] = React.useState(false)
    const [gasselected, setGasselected] = React.useState("PIZZA")
    const [jasperPending, setJasperPending] = React.useState(0)
    const [lastedSTOPT, setLastedSTOPT] = React.useState(null)
    const [skinSlot1, setSkinSlot1] = React.useState(null)
    const [ctunaBalance, setCTunaBalance] = React.useState(0)
    const [sx31Balance, setSx31Balance] = React.useState(0)
    const [pzaBalance, setPzaBalance] = React.useState(0)
    const [upzaBalance, setUpzaBalance] = React.useState(0)
    const [jaspBalance, setJaspBalance] = React.useState(0)
    const [csIdEquip, setCsIdEquip] = React.useState(null)
    const [csUsage, setCsUsage] = React.useState(null)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (intrasubModetext === undefined) {
            navigate('/dungeon/jasper-cave/' + address)
        } else if (intrasubModetext.length === 42) {
            setAddr(intrasubModetext)
        } else if (address === undefined) {
            navigate('/dungeon/jasper-cave/null')
        } else {
            navigate('/dungeon/jasper-cave/' + address)
        }
        const cmdaonftSC = new ethers.Contract(hexajibjib, erc721Abi, providerJBC)
        setNft([])
        
        const thefetch = async () => {
            const nftEQ = addr !== null ? await readContract(config, {
                address: dunJasper,
                abi: dunJasperABI,
                functionName: 'nftEquip',
                args: [addr],
                chainId: 8899
            }) : [0, 0, 0, 0, 0, 0, 0, 0, 0, null]

            const data = addr !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[0])],
                        chainId: 8899
                    },
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[3])],
                        chainId: 8899
                    },
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[4])],
                        chainId: 8899
                    },
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[5])],
                        chainId: 8899
                    },
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[6])],
                        chainId: 8899
                    },
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[2])],
                        chainId: 8899
                    },
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [Number(nftEQ[1])],
                        chainId: 8899
                    },
                    {
                        address: ctunaLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: sx31Lab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: pzaLab,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: dunJasper,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: mintStOPT_Router,
                        abi: mintStOPTABI,
                        functionName: 'userTimeStamp',
                        args: [addr, 2],
                        chainId: 8899
                    },
                    {
                        address: dunJasperL2,
                        abi: dunJasperL2ABI,
                        functionName: 'userInfo',
                        args: [1, addr],
                        chainId: 8899
                    },
                    {
                        address: dunJasper,
                        abi: dunJasperABI,
                        functionName: 'calculateRewards',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: dunJasperL2,
                        abi: dunJasperL2ABI,
                        functionName: 'pendingReward',
                        args: [1, addr],
                        chainId: 8899
                    }, 
                    {
                        address: salonRouter,
                        abi: salonABI,
                        functionName: 'skin',
                        args: [addr, 1],
                        chainId: 8899
                    },
                    {
                        address: upzaToken,
                        abi: ubbqABI,
                        functionName: 'cs',
                        args: [addr],
                        chainId: 8899
                    },
                    {
                        address: upzaToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [addr],
                        chainId: 8899
                    },
                ],
            }) : [
                {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, 
                {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: 0, status: 'yo'}, {result: [0, 0], status: 'yo'}, {result: 0, status: 'yo'},
            ]

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

            const allPow = Number(nftEQ[7])
            const isStaked = nftEQ[9]
            const refuelAt = Number(nftEQ[8])
            const ctunaBal = data[7].result
            const sx31Bal = data[8].result
            const pzaBal = data[9].result
            const jaspBal = data[10].result
            const stOPTClaim = isStaked ? data[11].result : 0
            // const nftEQ_L2 = data[12].result
            const rewardPending = isStaked ? data[13].result : 0
            
            let walletRemoveDup = []
            if (chain !== undefined && chain.id === 8899 && addr !== null) {
                const walletFilter = await cmdaonftSC.filters.Transfer(null, address, null)
                const walletEvent = await cmdaonftSC.queryFilter(walletFilter, 335000, "latest")
                const walletMap = await Promise.all(walletEvent.map(async (obj) => String(obj.args.tokenId)))
                walletRemoveDup = walletMap.filter((obj, index) => walletMap.indexOf(obj) === index)
            }
            const data2 = addr !== null ? await readContracts(config, {
                contracts: walletRemoveDup.map((item) => (
                    {
                        address: hexajibjib,
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
                        address: hexajibjib,
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

            const skinslot1 = data[15].result
            const csid = data[16].result[0]
            const csusage = data[16].result[1]
            const upzaBal = data[17].result
            
            return [
                nfts, nftEQ_1, nftEQ_1_Name, nftEQ_2_Img, nftEQ_2_Name, nftEQ_3, nftEQ_3_Name, nftEQ_4, nftEQ_4_Name, nftEQ_5, nftEQ_5_Name, nftEQ_6, nftEQ_6_Name, nftEQ_7, nftEQ_7_Name, /*L2_Follower_Id, nftEQ_L2_Follower, L2_Servant_Id, nftEQ_L2_Servant,*/
                allPow, isStaked, refuelAt, rewardPending, stOPTClaim,
                ctunaBal, sx31Bal, pzaBal, jaspBal,
                skinslot1, csid, csusage, upzaBal,
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
            if (result[2] !== null && result[2].slice(-1) === "]" && result[2].slice(-3, -2) === ".") {
                setCharacterSlotLevel(result[2].slice(-2, -1))
            } else if (result[2] !== null && result[2].slice(-1) === "]" && result[2].slice(-4, -3) === ".") {
                setCharacterSlotLevel(result[2].slice(-3, -1))
            } else {
                setCharacterSlotLevel(null)
            }
            result[2] !== null && result[2].slice(0, 7) === "SAPIENS" ? setIsOp(true) : setIsOp(false)
            setAccSlot(result[3])
            result[4] !== null && result[4].slice(-2, -1) === "+" ? setAccSlotLevel(result[4].slice(-1)) : setAccSlotLevel(null)
            setBackSlot(result[5])
            result[6] !== null && result[6].slice(-2, -1) === "+" ? setBackSlotLevel(result[6].slice(-1)) : setBackSlotLevel(null)
            setShoesSlot(result[7])
            result[8] !== null && result[8].slice(-2, -1) === "+" ? setShoesSlotLevel(result[8].slice(-1)) : setShoesSlotLevel(null)
            setWeaponSlot(result[9])
            result[10] !== null && result[10].slice(-2, -1) === "+" ? setWpSlotLevel(result[10].slice(-1)) : setWpSlotLevel(null)
            setClothSlot(result[11])
            result[12] !== null && result[12].slice(-2, -1) === "+" ? setClothSlotLevel(result[12].slice(-1)) : setClothSlotLevel(null)
            setHatSlot(result[13])
            result[14] !== null && result[14].slice(-2, -1) === "+" ? setHatSlotLevel(result[14].slice(-1)) : setHatSlotLevel(null)

            setAllPower(result[15])
            setIsStakeNow(result[16])
            const gasOut = new Date((Number(result[17]) * 1000) + (86400 * 1000))
            result[17] !== 0 ?
                setTimeToRunout(gasOut.toLocaleString('es-CL')) :
                setTimeToRunout(null)
            result[17] !== 0 && Date.now() - (Number(result[17]) * 1000) > (86400 * 1000) ? setIsRunout(true) : setIsRunout(false)
            setJasperPending(ethers.utils.formatUnits(String(result[18]), "gwei"))

            setLastedSTOPT(Number(result[17]) * 1000 === Number(result[19]) * 1000)

            setCTunaBalance(ethers.utils.formatEther(String(result[20])))
            setSx31Balance(ethers.utils.formatEther(String(result[21])))
            setPzaBalance(ethers.utils.formatEther(String(result[22])))
            setJaspBalance(ethers.utils.formatUnits(String(result[23]), "gwei"))
            setSkinSlot1(result[24])
            setCsIdEquip(String(result[25]))
            setCsUsage(Number(result[26]))
            setUpzaBalance(ethers.utils.formatEther(String(result[27])))
        })

    }, [config, address, addr, intrasubModetext, navigate, chain, txupdate, erc721Abi, erc20Abi, dunJasperABI, dunJasperL2ABI, mintStOPTABI, salonABI, ubbqABI])

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
            addr = hexajibjib
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
        try {
            const nftAllow = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== dunJasper.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [dunJasper, _nftid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: dunJasper,
                abi: dunJasperABI,
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
                address: dunJasper,
                abi: dunJasperABI,
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
        let pzaUsage = 0
        let uAddr = ''
        if (gasselected === "CTUNA") {
            gasAddr = ctunaLab
            gasIndex = 1
        } else if (gasselected === "SX31") {
            gasAddr = sx31Lab
            gasIndex = 2
        } else if (gasselected === "PIZZA") {
            gasAddr = pzaLab
            uAddr = upzaToken
            gasIndex = 4
            if (csIdEquip === '0') {
                pzaUsage = 5000
            } else {
                pzaUsage = 0
            }
        }
        try {
            if (Number(upzaBalance) === 0) {
                const gasAllow0 = await readContract(config, {
                    address: gasAddr,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, uAddr],
                })
                if (Number(ethers.utils.formatEther(gasAllow0)) < pzaUsage) {
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
                    abi: ubbqABI,
                    functionName: 'craft',
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const gasAllow = await readContract(config, {
                address: uAddr,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, dunJasper],
            })
            if (Number(ethers.utils.formatEther(gasAllow)) < 500) {
                let { request } = await simulateContract(config, {
                    address: uAddr,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [dunJasper, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: dunJasper,
                abi: dunJasperABI,
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

    const mintStOPT = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: mintStOPT_Router,
                abi: mintStOPTABI,
                functionName: 'mintST',
                args: [2]
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

    const depositcs = async (_csId) => {
        setisLoading(true)
        try {
            const nftAllow = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_csId],
            })
            if (nftAllow.toUpperCase() !== upzaToken.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [upzaToken, _csId],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: upzaToken,
                abi: ubbqABI,
                functionName: 'depositCs',
                args: [1, _csId],
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
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", backgroundImage: "url('/maps/bafkreiaxkxb6ajdih52bwme2q3ikeedjyrgad6p53njchr6dhopnltimre.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow: "scroll"}}>
                <div className="SubfieldBanner">
                    <div className="pixel" style={{fontSize: "75px", color: "#fff", width: "fit-content"}}>Jasper Cave</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="/tokens/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy.png" width="150" alt="$JASP" />
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
                <div style={{background: "rgb(14, 5, 47)", margin: "0", padding: "75px 0", minHeight: "inherit", alignItems: "flex-start"}} className="collection">
                    <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", overflow: "scroll"}} className="pixel mainprofile">
                        <div style={{background: "none rgba(255, 255, 255, 0.1)", backdropFilter: "blur(14px)", boxShadow: "none", border: 0, justifyContent: "space-around", padding: "30px", width: "1140px", maxWidth: "90%", height: "fit-content", marginBottom: "10px", display: "flex", flexDirection: "row", textAlign: "left", flexWrap: "wrap"}} className="nftCard">
                            <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", color: "#fff", width: "370px", height: "360px", margin: "5px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-around", boxShadow: "3px 3px 0 #0d0a1f"}}>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: "20px", borderBottom: "1px solid"}}>
                                <div style={{fontSize: "22px", lineHeight: "15px"}}>L1 STAKING</div>
                                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", color: "rgb(0, 209, 255)"}}>
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
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>
                                    {intrasubModetext !== null && intrasubModetext !== undefined && intrasubModetext.length === 42 ?
                                        <><div>ADDRESS</div><div>{intrasubModetext.slice(0, 4) + "..." + intrasubModetext.slice(-4)}</div></> :
                                        <><div>ADDRESS</div><div>-</div></>
                                    }
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>
                                    TOTAL CMPOW PER SEC 
                                    <div>{Number(allPower).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>
                                    JASP BALANCE (GWEI UNIT)
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy" height="20" alt="$JASP"/>
                                        <div style={{marginLeft: "5px"}}>{Number(jaspBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                                    </div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>
                                    JASP PENDING (GWEI UNIT)
                                    <div style={{display: "flex", flexDirection: "row", color: timeToRunout !== 0 && timeToRunout !== null  ? "#ff007a" : "#5f6476"}}>
                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy" height="20" alt="$JASP"/>
                                        <div style={{marginLeft: "5px"}}>{Number(jasperPending).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                                    </div>
                                </div>
                                <div style={{width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>
                                    GAS
                                    <select style={{padding: "2.5px 5px", fontSize: "16px", background: "transparent", color: "#fff"}} className="pixel" value={gasselected} onChange={(event) => {setGasselected(event.target.value)}}>
                                        <option value="CTUNA">$CTUNA</option>
                                        <option value="SX31">$SX31</option>
                                        <option value="PIZZA">$PZA</option>
                                    </select>
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        {gasselected === "CTUNA" &&
                                            <>
                                                <img src="https://gateway.pinata.cloud/ipfs/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i" height="20" alt="$CTUNA"/>
                                                <div style={{marginLeft: "5px"}}>{Number(ctunaBalance).toLocaleString('en-US', {maximumFractionDigits:1})}</div>
                                                <div style={{marginLeft: "5px"}}>/500</div>
                                            </>
                                        }
                                        {gasselected === "SX31" &&
                                            <>
                                                <img src="https://gateway.pinata.cloud/ipfs/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4" height="20" alt="$SX31"/>
                                                <div style={{marginLeft: "5px"}}>{Number(sx31Balance).toLocaleString('en-US', {maximumFractionDigits:1})}</div>
                                                <div style={{marginLeft: "5px"}}>/500</div>
                                            </>
                                        }
                                        {gasselected === "PIZZA" &&
                                            <>
                                                <img src="https://gateway.pinata.cloud/ipfs/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu" height="20" alt="$PZA"/>
                                                {csIdEquip === '0' ? <><div style={{marginLeft: "5px"}}>{Number(pzaBalance).toLocaleString('en-US', {maximumFractionDigits:1})}</div>/5000</> : <>Free Gas Remain: {100 - csUsage}</>}
                                            </>
                                        }
                                    </div>
                                </div>
                                {isStakeNow ?
                                    <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>GAS RUN OUT AT <div>{timeToRunout}</div></div>
                                    : <div style={{width: "350px", display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}>GAS RUN OUT IN <div>1 day</div></div>
                                }
                                {address !== null && intrasubModetext !== undefined ?
                                    <>
                                        {address.toUpperCase() === intrasubModetext.toUpperCase() ?
                                            <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                                {isStakeNow ?
                                                    <>
                                                        <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed", padding: "10px 15px"}} className="button">REFUEL GAS</div>
                                                        <div style={{alignSelf: "center", background: isRunout ? "#67BAA7" : "#ff007a", padding: "10px 15px"}} className="button" onClick={() => unstakeNft(0)}>HARVEST & UNSTAKE</div>
                                                    </> :
                                                    <>
                                                        {isStakeNow !== null && ((gasselected === "CTUNA" && Number(ctunaBalance) >= 500) || (gasselected === "SX31" && Number(sx31Balance) >= 500) || (gasselected === "PIZZA" && (Number(pzaBalance) >= 5000 || Number(upzaBalance) >= 500 || csIdEquip !== "0"))) ?
                                                            <>
                                                                {allPower !== 0 ?
                                                                    <div style={{alignSelf: "center", padding: "10px 15px"}} className="button" onClick={refuelStake}>REFUEL GAS</div> :
                                                                    <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed", padding: "10px 15px"}} className="button">REFUEL GAS</div>
                                                                }
                                                            </> :
                                                            <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed", padding: "10px 15px"}} className="button">REFUEL GAS</div>
                                                        }
                                                        <div style={{alignSelf: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed", padding: "10px 15px"}} className="button">HARVEST & UNSTAKE</div>
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
                                <div style={{position: "relative", width: "150px", height: "400px", margin: "20px 20px 20px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
                                    {hatSlot !== null ?
                                        <img src={hatSlot} width="100px" alt="Can not load metadata." /> :
                                        <img src="https://gateway.pinata.cloud/ipfs/QmZvuiGgx38WFMGFtcrfU4NHf17Sg5nHRZRDoVsWufZjC9" width="100px" alt="Can not load metadata." />
                                    }
                                    {hatSlotLevel !== null &&
                                        <div className="slotlevel" style={{position: "absolute", top: "65px", padding: "2px", fontSize: "25px"}}>+{hatSlotLevel}</div>
                                    }
                                    {clothSlot !== null ?
                                        <img src={clothSlot} width="100px" alt="Can not load metadata." /> :
                                        <img src="https://gateway.pinata.cloud/ipfs/QmPiUeAzB1tbMCY4eYJ1EFNJfq8NxtgNFMidFi9RymiEjh" width="100px" alt="Can not load metadata." />
                                    }
                                    {clothSlotLevel !== null &&
                                        <div className="slotlevel"  style={{position: "absolute", top: "215px", padding: "2px", fontSize: "25px"}}>+{clothSlotLevel}</div>
                                    }
                                    {shoesSlot !== null ?
                                        <img src={shoesSlot} width="100px" alt="Can not load metadata." /> :
                                        <img src="https://gateway.pinata.cloud/ipfs/QmeLCpgvRG5AejKn6W1ZtHSMdGmJX14xrpnNYjns1kqQbS" width="100px" alt="Can not load metadata." />
                                    }
                                    {shoesSlotLevel !== null &&
                                        <div className="slotlevel" style={{position: "absolute", top: "365px", padding: "2px", fontSize: "25px"}}>+{shoesSlotLevel}</div>
                                    }
                                </div>
                                <div style={{position: "relative", width: "300px", height: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>
                                    <div style={{width: "300px", marginBottom: "20px", height: "25px"}}></div>
                                    {nft.length > 0 ?
                                        <>
                                            {characterSlot !== null ?
                                                <>
                                                    {(Number(skinSlot1) === 0 || (characterSlot !== "https://gateway.pinata.cloud/ipfs/bafkreia4kwbvcyynfxu77fpguwoogfqqe45kktalxylnad4wivnhqjtt2m" && characterSlot !== "https://gateway.pinata.cloud/ipfs/bafkreidr4uq5voosuz6v4hqhiempf4a36x5aq6i4uceym2xbje65o5mwia")) &&
                                                        <img src={characterSlot} width="300px" alt="Can not load metadata." />
                                                    }
                                                    {(characterSlot === "https://gateway.pinata.cloud/ipfs/bafkreia4kwbvcyynfxu77fpguwoogfqqe45kktalxylnad4wivnhqjtt2m" && Number(String(skinSlot1).slice(0, 1)) === 1) &&
                                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreibynd6gqsb7idmhy7xk5qx5cdzmayvns7gfj7dsvpfymg2kjjajtm" width="300px" alt="Can not load metadata." />
                                                    }
                                                    {(characterSlot === "https://gateway.pinata.cloud/ipfs/bafkreidr4uq5voosuz6v4hqhiempf4a36x5aq6i4uceym2xbje65o5mwia" && Number(String(skinSlot1).slice(0, 1)) === 1) &&
                                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreif5fecf5rqrlixcxtpzplo7frtftt3yh2cmx6oca4l2jxuryjju2m" width="300px" alt="Can not load metadata." />
                                                    }
                                                </> :
                                                <img src="https://gateway.pinata.cloud/ipfs/Qmdm1Eg3n9aEbJuuYqsMoFex3WUMpHMxnnKmjwjpErCDMC" width="300px" alt="Can not load metadata." />
                                            }
                                        </> :
                                        <div style={{width: "300px", height: "300px", borderRadius: "16px", border: "1px solid gray", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <ThreeDots fill="#5f6476" />
                                        </div>
                                    }
                                    {characterSlotLevel !== null &&
                                        <div style={{position: "absolute", top: "300px", right: "20px", padding: "2px", fontSize: "25px", color: "#000"}}>Lv.{characterSlotLevel}</div>
                                    }
                                    {(isOp && isStakeNow && !lastedSTOPT && isRunout) &&
                                        <div style={{position: "absolute", top: "300px", left: 0, border: "1px solid rgb(70, 55, 169)", boxShadow: "6px 6px 0 #00000040", borderRadius: 0, background: "rgb(103, 186, 167)"}} className="button" onClick={mintStOPT}>Obtain stOPT <img src="https://gateway.pinata.cloud/ipfs/bafkreibtp4almzmdovhvygxeyykw5fa6pqe76cbdum4quispehlddqgp2e" height="18" alt="$stOPT"/></div>
                                    }
                                </div>
                                <div style={{position: "relative", width: "150px", height: "400px", margin: "20px 0 20px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
                                    {accSlot !== null ?
                                        <img src={accSlot} width="100px" alt="Can not load metadata." /> :
                                        <img src="https://gateway.pinata.cloud/ipfs/QmUCug7hrWCYwLfboWhtNvNAXmrzVfPaptBt2B8htcM7mt" width="100px" alt="Can not load metadata." />
                                    }
                                    {accSlotLevel !== null &&
                                        <div className="slotlevel"  style={{position: "absolute", top: "65px", padding: "2px", fontSize: "25px"}}>+{accSlotLevel}</div>
                                    }
                                    {backSlot !== null ?
                                        <img src={backSlot} width="100px" alt="Can not load metadata." /> :
                                        <img src="https://gateway.pinata.cloud/ipfs/QmeJWEps9kHZbcU3bYqbyUfyc8kWYXS5xBi1dnr8Basvk9" width="100px" alt="Can not load metadata." />
                                    }
                                    {backSlotLevel !== null &&
                                        <div className="slotlevel" style={{position: "absolute", top: "215px", padding: "2px", fontSize: "25px"}}>+{backSlotLevel}</div>
                                    }
                                    {weaponSlot !== null ?
                                        <img src={weaponSlot} width="100px" alt="Can not load metadata." /> :
                                        <img src="https://gateway.pinata.cloud/ipfs/QmWYEwdpNYHCp4EZEJATQue72ndN162VTze9WDxzaLEqk9" width="100px" alt="Can not load metadata." />
                                    }
                                    {wpSlotLevel !== null &&
                                        <div className="slotlevel" style={{position: "absolute", top: "365px", padding: "2px", fontSize: "25px"}}>+{wpSlotLevel}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {nft.length > 0 ?
                        <div style={{margin: "40px 0 80px 0", width: "1650px", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", flexWrap: "wrap"}}>
                            {nft[0] !== null ?
                                <>
                                    {nft.map((item, index) => (
                                        <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "space-around", padding: "20px", margin: "10px"}} className="nftCard" key={index}>
                                            <div style={{width: "150px", height: "150px", display: "flex", justifyContent: "center", overflow: "hidden"}}>
                                                <img src={item.Image} height="100%" alt="Can not load metadata." />
                                            </div>
                                            <div className="emp bold">{item.Name}</div>
                                            <div className="bold">{item.RewardPerSec} cmpow</div>
                                            <div style={{fontSize: "12px", textAlign: "left", wordBreak: "break-word"}} className="light">{item.Description}</div>
                                            {address !== null && intrasubModetext !== undefined ?
                                                <>
                                                    {address.toUpperCase() === intrasubModetext.toUpperCase() ?
                                                        <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                                            {item.isStaked ?
                                                                <div style={{background: "gray"}} className="pixel button" onClick={() => unstakeNft((item.Id / 100000000000) | 0)}>UNEQUIP</div> :
                                                                <div style={{display: "flex", flexDirection: "column"}}>
                                                                    {!isStakeNow &&
                                                                        <div style={{alignSelf: "center"}} className="pixel button" onClick={() => equipNft(item.Id)}>EQUIP</div>
                                                                    }
                                                                    {(csIdEquip === '0' && item.Name === 'Chō-Senjiryakketsu') &&
                                                                        <div style={{alignSelf: "center", marginTop: "10px"}} className="pixel button" onClick={() => depositcs(item.Id)}>REDEEM FREE GAS</div>
                                                                    }
                                                                    <div style={{alignSelf: "center", marginTop: "10px", background: "gray"}} className="pixel button" onClick={() => transferNFT(item.Col, item.Id)}>TRANSFER</div>
                                                                </div>
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
                                <div style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "center", padding: "20px", margin: "10px"}} className="nftCard">
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
                        <div style={{margin: "40px 0 80px 0", width: "1650px", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start"}}> 
                            <div className="nftCard" style={{background: "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), rgb(11, 11, 34)", boxShadow: "none", border: 0, color: "#fff", justifyContent: "center"}}>
                                <ThreeDots fill="#fff" />
                                <div className="bold" style={{marginTop: "80px"}}>Loading NFTs...</div>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default Jaspercave