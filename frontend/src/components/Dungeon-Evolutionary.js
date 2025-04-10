import React from 'react'
import { readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { ThreeDots } from 'react-loading-icons'

const cmjToken = "0xE67E280f5a354B4AcA15fA7f0ccbF667CF74F97b"
const bbqToken = '0x7004757e595409568Bd728736e1b0c79FDc94e1c'
const jdaoToken = '0x09bD3F5BFD9fA7dE25F7A2A75e1C317E4Df7Ef88'
const cuToken = '0x42F5213C7b6281FC6fb2d6F10576F70DB0a4C841'
const silToken = '0x2a081667587c35956d34A4cC3bf92b9CA0ef2C6f'
const goldToken = '0x7d5346E33889580528e6F79f48BdEE94D8A9E144'
const platToken = '0x3Bd00B6cd18281E3Ef13Ba348ad2783794dcb2bD'
const pzaToken = '0x09DcdCFc6C48803681a3422997c679E773656763'
const osToken = '0xAc5299D92373E9352636559cca497d7683A47655'
const jaspToken = '0xe83567Cd0f3Ed2cca21BcE05DBab51707aff2860'
const hexajibjib = '0x20724DC1D37E67B7B69B52300fDbA85E558d8F9A'
const evolutionaryV2 = '0xEDad050528b5E0F351c9D3150B8C3Eb3da1E7b08'
const evolutionary = '0x99dfECfB91CC6C37C16a6D95A0A8935eb05A33fb'
const fusion = '0x2Ef03b5613758529fF057E8883ABe6AAA1528844'
const salon = '0x1Bc2Ad00F721b365C5d7C3BF19159C16e03c703e'
const salonRouter = '0x76B6B24BA53042A0e02Cc0e84c875d74EAeFb74a'

const providerJBC = new ethers.getDefaultProvider('https://rpc-l1.jibchain.net/')

const NpcEvolutionary = ({ config, navigate, callMode, setisLoading, txupdate, setTxupdate, setisError, setErrMsg, evolutionaryABI, fusionABI, salonABI, erc721Abi, erc20Abi }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [nft, setNft] = React.useState([])
    const [salonNft, setSalonNft] = React.useState([])
    const [cmjBalance, setCmjBalance] = React.useState(0)
    const [bbqBalance, setBbqBalance] = React.useState(0)
    const [cuBalance, setCuBalance] = React.useState(0)
    const [pzaBalance, setPzaBalance] = React.useState(0)
    const [silBalance, setSilBalance] = React.useState(0)
    const [goldBalance, setGoldBalance] = React.useState(0)
    const [osBalance, setOsBalance] = React.useState(0)
    const [platBalance, setPlatBalance] = React.useState(0)
    const [jaspBalance, setJaspBalance] = React.useState(0)
    const [skinSlot1, setSkinSlot1] = React.useState(null)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)
        const cmdaonftSC = new ethers.Contract(hexajibjib, erc721Abi, providerJBC)
        const salonnftSC = new ethers.Contract(salon, erc721Abi, providerJBC)

        const thefetch = async () => {
            let walletRemoveDup = []
            let walletSalonRemoveDup = []
            if (address !== null) {
                const walletFilter = await cmdaonftSC.filters.Transfer(null, address, null)
                const walletEvent = await cmdaonftSC.queryFilter(walletFilter, 335000, "latest")
                const walletMap = await Promise.all(walletEvent.map(async (obj) => String(obj.args.tokenId)))
                walletRemoveDup = walletMap.filter((obj, index) => walletMap.indexOf(obj) === index)
                const walletSalonFilter = await salonnftSC.filters.Transfer(null, address, null)
                const walletSalonEvent = await salonnftSC.queryFilter(walletSalonFilter, 1815632, "latest")
                const walletSalonMap = await Promise.all(walletSalonEvent.map(async (obj) => String(obj.args.tokenId)))
                walletSalonRemoveDup = walletSalonMap.filter((obj, index) => walletSalonMap.indexOf(obj) === index)
            }
            const data = address !== null ? await readContracts(config, {
                contracts: [
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: cmjToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: bbqToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: cuToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: silToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: goldToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: osToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: salon,
                        abi: erc721Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: salonRouter,
                        abi: salonABI,
                        functionName: 'skin',
                        args: [address, 1],
                        chainId: 8899
                    },
                    {
                        address: platToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                    {
                        address: jaspToken,
                        abi: erc20Abi,
                        functionName: 'balanceOf',
                        args: [address],
                        chainId: 8899
                    },
                ],
            }) : [{result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}]
            const cmjBal = data[1].result
            const bbqBal = data[2].result
            const cuBal = data[3].result
            const pzaBal = data[4].result
            const silBal = data[5].result
            const goldBal = data[6].result
            const osBal = data[7].result
            const platBal = data[10].result
            const jaspBal = data[11].result
            const nftbal = data[0].result
            let count = 0
            let nfts = []
            let yournft = []
            const data2 = address !== null ? await readContracts(config, {
                contracts: walletRemoveDup.map((item) => (
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'ownerOf',
                        args: [item],
                        chainId: 8899
                    }
                ))
            }) : null
            for (let i = 0; i <= walletRemoveDup.length - 1 && count < nftbal && address !== null; i++) {
                if (data2[i].result.toUpperCase() === address.toUpperCase()) {
                    yournft.push({Id: String(walletRemoveDup[i])})
                    count++
                }
            }
            const data3 = address !== null ? await readContracts(config, {
                contracts: yournft.map((item) => (
                    {
                        address: hexajibjib,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [item.Id],
                        chainId: 8899
                    }
                ))
            }) : null
            for (let i = 0; i <= yournft.length - 1; i++) {
                let nft = {name: "", image: "", description: "", attributes: ""}
                try {                    
                    const response = await fetch(data3[i].result.replace("ipfs://", "https://gateway.commudao.xyz/ipfs/"))
                    nft = await response.json()
                } catch {}
                const bonus = Number(String(yournft[i].Id).slice(-5))
                nfts.push({
                    Id: Number(yournft[i].Id),
                    Name: nft.name,
                    Image: nft.image.replace("ipfs://", "https://gateway.commudao.xyz/ipfs/"),
                    Description: nft.description,
                    Attribute: nft.attributes,
                    RewardPerSec: bonus,
                    Count: null
                })
            }
            if (nfts.length === 0) { nfts.push(null) }
            const salonNftbal = data[8].result
            const skinslot1 = data[9].result
            let salonCount = 0
            let salonNfts = []
            let yoursalonnft = []
            const data4 = address !== null ? await readContracts(config, {
                contracts: walletSalonRemoveDup.map((item) => (
                    {
                        address: salon,
                        abi: erc721Abi,
                        functionName: 'ownerOf',
                        args: [item],
                        chainId: 8899
                    }
                ))
            }) : null
            for (let i = 0; i <= walletSalonRemoveDup.length - 1 && salonCount < salonNftbal && address !== null; i++) {
                if (data4[i].result.toUpperCase() === address.toUpperCase()) {
                    yoursalonnft.push({Id: String(walletSalonRemoveDup[i])})
                    salonCount++
                }
            }
            const data5 = address !== null ? await readContracts(config, {
                contracts: yoursalonnft.map((item) => (
                    {
                        address: salon,
                        abi: erc721Abi,
                        functionName: 'tokenURI',
                        args: [item.Id],
                        chainId: 8899
                    }
                ))
            }) : null
            for (let i = 0; i <= yoursalonnft.length - 1; i++) {
                let nft = {name: "", image: "", description: "", attributes: ""}
                try {                    
                    const response = await fetch(data5[i].result.replace("ipfs://", "https://gateway.commudao.xyz/ipfs/"))
                    nft = await response.json()
                } catch {}
                const bonus = Number(String(yoursalonnft[i].Id).slice(-5))
                salonNfts.push({
                    Id: Number(yoursalonnft[i].Id),
                    Name: nft.name,
                    Image: nft.image.replace("ipfs://", "https://gateway.commudao.xyz/ipfs/"),
                    Description: nft.description,
                    Attribute: nft.attributes,
                    RewardPerSec: bonus,
                    Count: null
                })
            }
            if (salonNfts.length === 0) { salonNfts.push(null) }

            return [nfts, cmjBal, bbqBal, cuBal, pzaBal, silBal, goldBal, osBal, salonNfts, skinslot1, platBal, jaspBal, ]
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
            setCmjBalance(ethers.utils.formatEther(String(result[1])))
            setBbqBalance(ethers.utils.formatEther(String(result[2])))
            setCuBalance(ethers.utils.formatEther(String(result[3])))
            setPzaBalance(ethers.utils.formatEther(String(result[4])))
            setSilBalance(ethers.utils.formatEther(String(result[5])))
            setGoldBalance(ethers.utils.formatEther(String(result[6])))
            setOsBalance(ethers.utils.formatEther(String(result[7])))
            setSalonNft(result[8])
            setSkinSlot1(result[9])
            setPlatBalance(ethers.utils.formatEther(String(result[10])))
            setJaspBalance(ethers.utils.formatUnits(String(result[11]), "gwei"))
        })

    }, [config, address, erc20Abi, erc721Abi, txupdate, salonABI])

    const evolutionV2Handle = async (_nftid, _enchantindex) => {
        setisLoading(true)
        try {
            if (Number(_enchantindex) <= 9) {
                const bbqAllow = await readContract(config, {
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(bbqAllow)) < 1280000) {
                    let { request } = await simulateContract(config, {
                        address: bbqToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const cuAllow = await readContract(config, {
                    address: cuToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(cuAllow)) < 128000) {
                    let { request } = await simulateContract(config, {
                        address: cuToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) === 10) {
                const bbqAllow = await readContract(config, {
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(bbqAllow)) < 2560000) {
                    let { request } = await simulateContract(config, {
                        address: bbqToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const jdaoAllow = await readContract(config, {
                    address: jdaoToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(jdaoAllow)) < 10) {
                    let { request } = await simulateContract(config, {
                        address: jdaoToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) >= 11 && Number(_enchantindex) <= 19) {
                const bbqAllow = await readContract(config, {
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(bbqAllow)) < 1310720000) {
                    let { request } = await simulateContract(config, {
                        address: bbqToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const silAllow = await readContract(config, {
                    address: silToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(silAllow)) < 384000) {
                    let { request } = await simulateContract(config, {
                        address: silToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) <= 1009 || (Number(_enchantindex) >= 2001 && Number(_enchantindex) <= 2009) || (Number(_enchantindex) >= 3001 && Number(_enchantindex) <= 3009) || (Number(_enchantindex) >= 4001 && Number(_enchantindex) <= 4009)) {
                const pzaAllow = await readContract(config, {
                    address: pzaToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(pzaAllow)) < 1074) {
                    let { request } = await simulateContract(config, {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const cuAllow = await readContract(config, {
                    address: cuToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(cuAllow)) < 64000) {
                    let { request } = await simulateContract(config, {
                        address: cuToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) === 1010 || Number(_enchantindex) === 1020 || Number(_enchantindex) === 1030 || Number(_enchantindex) === 1040 || Number(_enchantindex) === 2010 || Number(_enchantindex) === 2020 || Number(_enchantindex) === 2030 || Number(_enchantindex) === 2040 || Number(_enchantindex) === 3010 || Number(_enchantindex) === 3020 || Number(_enchantindex) === 3030 || Number(_enchantindex) === 3040 || Number(_enchantindex) === 4010 || Number(_enchantindex) === 4020 || Number(_enchantindex) === 4030 || Number(_enchantindex) === 4040) {
                const pzaAllow = await readContract(config, {
                    address: pzaToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(pzaAllow)) < 3674420) {
                    let { request } = await simulateContract(config, {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const jdaoAllow = await readContract(config, {
                    address: jdaoToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(jdaoAllow)) < 1350) {
                    let { request } = await simulateContract(config, {
                        address: jdaoToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) <= 1019 || (Number(_enchantindex) >= 2011 && Number(_enchantindex) <= 2019) || (Number(_enchantindex) >= 3011 && Number(_enchantindex) <= 3019) || (Number(_enchantindex) >= 4011 && Number(_enchantindex) <= 4019)) {
                const pzaAllow = await readContract(config, {
                    address: pzaToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(pzaAllow)) < 6655) {
                    let { request } = await simulateContract(config, {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const silAllow = await readContract(config, {
                    address: silToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(silAllow)) < 384000) {
                    let { request } = await simulateContract(config, {
                        address: silToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) <= 1029 || (Number(_enchantindex) >= 2021 && Number(_enchantindex) <= 2029) || (Number(_enchantindex) >= 3021 && Number(_enchantindex) <= 3029) || (Number(_enchantindex) >= 4021 && Number(_enchantindex) <= 4029)) {
                const pzaAllow = await readContract(config, {
                    address: pzaToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(pzaAllow)) < 49453) {
                    let { request } = await simulateContract(config, {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const goldAllow = await readContract(config, {
                    address: goldToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(goldAllow)) < 492075) {
                    let { request } = await simulateContract(config, {
                        address: goldToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) <= 1039 || (Number(_enchantindex) >= 2031 && Number(_enchantindex) <= 2039) || (Number(_enchantindex) >= 3031 && Number(_enchantindex) <= 3039) || (Number(_enchantindex) >= 4031 && Number(_enchantindex) <= 4039)) {
                const pzaAllow = await readContract(config, {
                    address: pzaToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(pzaAllow)) < 306202) {
                    let { request } = await simulateContract(config, {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const platAllow = await readContract(config, {
                    address: platToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(platAllow)) < 6150937) {
                    let { request } = await simulateContract(config, {
                        address: platToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            } else if (Number(_enchantindex) <= 1049 || (Number(_enchantindex) >= 2041 && Number(_enchantindex) <= 2049) || (Number(_enchantindex) >= 3041 && Number(_enchantindex) <= 3049) || (Number(_enchantindex) >= 4041 && Number(_enchantindex) <= 4049)) {
                const pzaAllow = await readContract(config, {
                    address: pzaToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatEther(pzaAllow)) < 1895924) {
                    let { request } = await simulateContract(config, {
                        address: pzaToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
                const jaspAllow = await readContract(config, {
                    address: jaspToken,
                    abi: erc20Abi,
                    functionName: 'allowance',
                    args: [address, evolutionaryV2],
                })
                if (Number(ethers.utils.formatUnits(jaspAllow, 'gwei')) < 12807) {
                    let { request } = await simulateContract(config, {
                        address: jaspToken,
                        abi: erc20Abi,
                        functionName: 'approve',
                        args: [evolutionaryV2, ethers.constants.MaxUint256],
                    })
                    let h = await writeContract(config, request)
                    await waitForTransactionReceipt(config, { hash: h })
                }
            }
            const nftAllow = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== evolutionaryV2.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [evolutionaryV2, _nftid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: evolutionaryV2,
                abi: evolutionaryABI,
                functionName: 'enchant',
                args: [_enchantindex, _nftid]
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

    const evolutionHandle = async (_nftid, _enchantindex) => {
        setisLoading(true)
        const cmjAllow = await readContract(config, {
            address: cmjToken,
            abi: erc20Abi,
            functionName: 'allowance',
            args: [address, evolutionary],
        })
        try {
            if (Number(ethers.utils.formatEther(cmjAllow)) < 30) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [evolutionary, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const jdaoAllow = await readContract(config, {
                address: jdaoToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, evolutionary],
            })
            if (Number(ethers.utils.formatEther(jdaoAllow)) < 3) {
                let { request } = await simulateContract(config, {
                    address: jdaoToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [evolutionary, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const bbqAllow = await readContract(config, {
                address: bbqToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, evolutionary],
            })
            if (Number(ethers.utils.formatEther(bbqAllow)) < 25000) {
                let { request } = await simulateContract(config, {
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [evolutionary, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const nftAllow = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== evolutionary.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [evolutionary, _nftid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: evolutionary,
                abi: evolutionaryABI,
                functionName: 'enchant',
                args: [_enchantindex, _nftid]
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

    const fusionHandle = async (_nftid, _fusionindex) => {
        setisLoading(true)        
        try {
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, fusion],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 150) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [fusion, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const jdaoAllow = await readContract(config, {
                address: jdaoToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, fusion],
            })
            if (Number(ethers.utils.formatEther(jdaoAllow)) < 15) {
                let { request } = await simulateContract(config, {
                    address: jdaoToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [fusion, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const nftAllow = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftid],
            })
            if (nftAllow.toUpperCase() !== fusion.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [fusion, _nftid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let _nftId2 = nft.filter((item) => item.Id >= 100410100400 && item.Id <= 100420000400)
            const nftAllow2 = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftId2[0].Id],
            })
            if (nftAllow2.toUpperCase() !== fusion.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [fusion, _nftId2[0].Id],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let _nftId3 = nft.filter((item) => item.Id >= 100420100400 && item.Id <= 100430000400)
            const nftAllow3 = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftId3[0].Id],
            })
            if (nftAllow3.toUpperCase() !== fusion.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [fusion, _nftId3[0].Id],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let _nftId4 = nft.filter((item) => item.Id >= 100430100400 && item.Id <= 100440000400)
            const nftAllow4 = await readContract(config, {
                address: hexajibjib,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_nftId4[0].Id],
            })
            if (nftAllow4.toUpperCase() !== fusion.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: hexajibjib,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [fusion, _nftId4[0].Id],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: fusion,
                abi: fusionABI,
                functionName: 'enchant',
                args: [_fusionindex, _nftid, _nftId2[0].Id, _nftId3[0].Id, _nftId4[0].Id, 0],
                gas: 1000000,
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

    const changeHandle = async (_salonid) => {
        setisLoading(true)        
        try {
            const cmjAllow = await readContract(config, {
                address: cmjToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, salonRouter],
            })
            if (Number(ethers.utils.formatEther(cmjAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: cmjToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [salonRouter, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            const salonAllow = await readContract(config, {
                address: salon,
                abi: erc721Abi,
                functionName: 'getApproved',
                args: [_salonid],
            })
            if (salonAllow.toUpperCase() !== salonRouter.toUpperCase()) {
                let { request } = await simulateContract(config, {
                    address: salon,
                    abi: erc721Abi,
                    functionName: 'approve',
                    args: [salonRouter, _salonid],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: salonRouter,
                abi: salonABI,
                functionName: 'change',
                args: [_salonid],
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

    const unchangeHandle = async (_salontype) => {
        setisLoading(true)        
        try {
            const osAllow = await readContract(config, {
                address: osToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, salonRouter],
            })
            if (Number(ethers.utils.formatEther(osAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: osToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [salonRouter, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: salonRouter,
                abi: salonABI,
                functionName: 'unchange',
                args: [_salontype],
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
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", overflow: "scroll"}}>
                <div className="SubfieldBanner">
                    <div className="pixel" style={{fontSize: "75px", width: "fit-content"}}>Evotionary Planet</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="https://gateway.commudao.xyz/ipfs/bafybeibb6sv46fa4as36s5pvb5lihvgdhry7jlsifnzca4qbgbvkej3cae" height="200" alt="Evo_Planet" />
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
                <div style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", overflow: "scroll"}} className="noscroll">
                    <div style={{maxWidth: "100%", textAlign: "left", marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                        <div style={{width: "250px", ontSize: "16px", letterSpacing: "1px"}} className="bold">Tokens</div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll pixel">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u" width="22" alt="$CMJ"/>
                                <div style={{marginLeft: "10px"}}>{Number(cmjBalance).toFixed(3)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" width="22" alt="$BBQ"/>
                                <div style={{marginLeft: "10px"}}>{Number(bbqBalance).toFixed(3)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu" width="22" alt="$PZA"/>
                                <div style={{marginLeft: "10px"}}>{Number(pzaBalance).toFixed(3)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq" width="22" alt="$CU"/>
                                <div style={{marginLeft: "10px"}}>{Number(cuBalance).toFixed(3)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde" width="22" alt="$SIL"/>
                                <div style={{marginLeft: "10px"}}>{Number(silBalance).toFixed(3)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm" width="22" alt="$GOLD"/>
                                <div style={{marginLeft: "10px"}}>{Number(goldBalance).toFixed(3)}</div>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll pixel">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa" width="22" alt="$PLAT"/>
                                <div style={{marginLeft: "10px"}}>{Number(platBalance).toFixed(3)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy" width="22" alt="$JASP"/>
                                <div style={{marginLeft: "10px"}}>{Number(jaspBalance).toFixed(0)}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px 20px 0", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img src="https://gateway.commudao.xyz/ipfs/bafkreico3y6ql5vudm35ttestwvffdacbp25h6t5ipbyncwr3qtzprrm5e" width="22" alt="$OS"/>
                                <div style={{marginLeft: "10px"}}>{Number(osBalance).toFixed(3)}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{width: "98%"}}>
                        <div style={{textAlign: "left", margin: "20px 0 80px 0", minHeight: "600px", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                            <div style={{marginTop: "20px", fontSize: "16px", letterSpacing: "1px"}} className="bold">Upgradable NFTs</div>
                            {nft !== undefined && nft.length > 0 ?
                                <>
                                    {nft[0] !== null ?
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}}>
                                            {nft.map((item, index) => (
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} key={index}>
                                                    {Number(String(item.Id).slice(0, 4)) >= 1005 && Number(String(item.Id).slice(0, 4)) <= 1009 && Number(item.Id) % 100000 !== 3000 ?
                                                        <div style={{justifyContent: "space-around", padding: "30px", marginRight: "50px"}} className="nftCard">
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <img src={item.Image} width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">{item.Name}</div>
                                                                </div>
                                                                <i style={{marginTop: "10px", fontSize: "30px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                                                <div>
                                                                    {Number(item.Id) % 100000 <= 900 ? <img src={item.Image} width="120" alt="Can not load metadata." /> : <></>}
                                                                    {Number(item.Id) % 100000 >= 1000 ? <img src="https://gateway.commudao.xyz/ipfs/bafkreibjpayqduk7ngifqmwfrnzcohy42xtzxgdrl5dqhsrx5rluvnwdfi" width="120" alt="Can not load metadata." />  : <></>}
                                                                    <div style={{width: "150px"}} className="emp pixel">
                                                                        {Number(item.Id) % 100000 === 100 ? <>{item.Name} [Lv.1]</> : <></>}
                                                                        {Number(item.Id) % 100000 >= 200 && Number(item.Id) % 100000 <= 1000 ? <>{item.Name.slice(0, -2)}{((Number(item.Id) % 100000) / 100)}]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1200 ? <>{item.Name.slice(0, -3)}11]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1400 ? <>{item.Name.slice(0, -3)}12]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1600 ? <>{item.Name.slice(0, -3)}13]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1800 ? <>{item.Name.slice(0, -3)}14]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2000 ? <>{item.Name.slice(0, -3)}15]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2200 ? <>{item.Name.slice(0, -3)}16]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2400 ? <>{item.Name.slice(0, -3)}17]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2600 ? <>{item.Name.slice(0, -3)}18]</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2800 ? <>{item.Name.slice(0, -3)}19]</> : <></>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <div className="pixel">
                                                                        Level&nbsp;
                                                                        {Number(item.Id) % 100000 <= 1000 ? ((Number(item.Id) % 100000) / 100) - 1 : <></>}
                                                                        {Number(item.Id) % 100000 === 1200 ? 10 : <></>}
                                                                        {Number(item.Id) % 100000 === 1400 ? 11 : <></>}
                                                                        {Number(item.Id) % 100000 === 1600 ? 12 : <></>}
                                                                        {Number(item.Id) % 100000 === 1800 ? 13 : <></>}
                                                                        {Number(item.Id) % 100000 === 2000 ? 14 : <></>}
                                                                        {Number(item.Id) % 100000 === 2200 ? 15 : <></>}
                                                                        {Number(item.Id) % 100000 === 2400 ? 16 : <></>}
                                                                        {Number(item.Id) % 100000 === 2600 ? 17 : <></>}
                                                                        {Number(item.Id) % 100000 === 2800 ? 18 : <></>}
                                                                    </div>
                                                                    <div style={{width: "150px"}} className="pixel">{item.RewardPerSec} cmpow per sec</div>
                                                                </div>
                                                                <div>
                                                                    <div className="pixel">
                                                                        Level&nbsp;
                                                                        {Number(item.Id) % 100000 <= 1000 ? ((Number(item.Id) % 100000) / 100) : <></>}
                                                                        {Number(item.Id) % 100000 === 1200 ? 11 : <></>}
                                                                        {Number(item.Id) % 100000 === 1400 ? 12 : <></>}
                                                                        {Number(item.Id) % 100000 === 1600 ? 13 : <></>}
                                                                        {Number(item.Id) % 100000 === 1800 ? 14 : <></>}
                                                                        {Number(item.Id) % 100000 === 2000 ? 15 : <></>}
                                                                        {Number(item.Id) % 100000 === 2200 ? 16 : <></>}
                                                                        {Number(item.Id) % 100000 === 2400 ? 17 : <></>}
                                                                        {Number(item.Id) % 100000 === 2600 ? 18 : <></>}
                                                                        {Number(item.Id) % 100000 === 2800 ? 19 : <></>}
                                                                    </div>
                                                                    <div style={{width: "150px"}} className="pixel">
                                                                        {Number(item.Id) % 100000 <= 900 ? item.RewardPerSec + 100 : <></>}
                                                                        {Number(item.Id) % 100000 >= 1000 ? item.RewardPerSec + 200 : <></>}
                                                                        &nbsp;cmpow per sec
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "10px"}}></div>
                                                            <div style={{marginTop: "10px", width: "350px"}}>
                                                                <div className="pixel">
                                                                    <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i>
                                                                    Evolution resource
                                                                </div>
                                                                <div style={{marginTop: "10px", display: "flex", flexDirection: "row"}} className="pixel">
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="18" alt="$BBQ"/>
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {Number(item.Id) % 100000 === 100 ? <>10,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 200 ? <>10,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 300 ? <>20,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 400 ? <>40,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 500 ? <>80,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 600 ? <>160,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 700 ? <>320,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 800 ? <>640,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 900 ? <>1,280,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1000 ? <>2,560,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1200 ? <>5,120,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1400 ? <>10,240,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1600 ? <>20,480,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1800 ? <>40,960,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2000 ? <>81,920,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2200 ? <>163,840,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2400 ? <>327,680,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2600 ? <>655,360,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2800 ? <>1,310,720,000</> : <></>}
                                                                    </div>
                                                                    <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                                                    {Number(item.Id) % 100000 <= 900 ? <img src="https://gateway.commudao.xyz/ipfs/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq" height="18" alt="$CU"/> : <></>}
                                                                    {Number(item.Id) % 100000 >= 1200 ? <img src="https://gateway.commudao.xyz/ipfs/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde" height="18" alt="$SIL"/> : <></>}
                                                                    {Number(item.Id) % 100000 === 1000 ? <img src="https://gateway.commudao.xyz/ipfs/bafkreia2bjrh7yw2vp23e5lnc6u75weg6nq7dzkyruggsnjxid6qtofeeq" height="18" alt="$JDAO"/> : <></>}
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {Number(item.Id) % 100000 === 100 ? <>0</> : <></>}
                                                                        {Number(item.Id) % 100000 === 200 ? <>1,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 300 ? <>2,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 400 ? <>4,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 500 ? <>8,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 600 ? <>16,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 700 ? <>32,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 800 ? <>64,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 900 ? <>128,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1000 ? <>10</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1200 ? <>1,500</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1400 ? <>3,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1600 ? <>6,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 1800 ? <>12,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2000 ? <>24,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2200 ? <>48,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2400 ? <>96,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2600 ? <>192,000</> : <></>}
                                                                        {Number(item.Id) % 100000 === 2800 ? <>384,000</> : <></>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{textAlign: "center", borderRadius: "12px", padding: "10px 20px", width: "80px"}}
                                                                className="pixel button"
                                                                onClick={() => {
                                                                    if (Number(item.Id) % 100000 <= 1000) {
                                                                        evolutionV2Handle(item.Id, (Number(item.Id) % 100000) / 100)
                                                                    } else if (Number(item.Id) % 100000 === 1200) {
                                                                        evolutionV2Handle(item.Id, 11)
                                                                    } else if (Number(item.Id) % 100000 === 1400) {
                                                                        evolutionV2Handle(item.Id, 12)
                                                                    } else if (Number(item.Id) % 100000 === 1600) {
                                                                        evolutionV2Handle(item.Id, 13)
                                                                    } else if (Number(item.Id) % 100000 === 1800) {
                                                                        evolutionV2Handle(item.Id, 14)
                                                                    } else if (Number(item.Id) % 100000 === 2000) {
                                                                        evolutionV2Handle(item.Id, 15)
                                                                    } else if (Number(item.Id) % 100000 === 2200) {
                                                                        evolutionV2Handle(item.Id, 16)
                                                                    } else if (Number(item.Id) % 100000 === 2400) {
                                                                        evolutionV2Handle(item.Id, 17)
                                                                    } else if (Number(item.Id) % 100000 === 2600) {
                                                                        evolutionV2Handle(item.Id, 18)
                                                                    } else if (Number(item.Id) % 100000 === 2800) {
                                                                        evolutionV2Handle(item.Id, 19)
                                                                    }
                                                                }}
                                                            >
                                                                UPGRADE
                                                            </div>
                                                        </div> :
                                                        <></>
                                                    }
                                                    {/*
                                                    ░██████╗░█████╗░██████╗░██╗███████╗███╗░░██╗░██████╗ 
                                                    ██╔════╝██╔══██╗██╔══██╗██║██╔════╝████╗░██║██╔════╝
                                                    ╚█████╗░███████║██████╔╝██║█████╗░░██╔██╗██║╚█████╗░
                                                    ░╚═══██╗██╔══██║██╔═══╝░██║██╔══╝░░██║╚████║░╚═══██╗
                                                    ██████╔╝██║░░██║██║░░░░░██║███████╗██║░╚███║██████╔╝ 
                                                    ╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝╚═════╝░
                                                    */}
                                                    {(((Number(String(item.Id).slice(0, 7)) >= 1300001 && Number(String(item.Id).slice(0, 7)) <= 1300100) || (Number(String(item.Id).slice(0, 7)) >= 1300101 && Number(String(item.Id).slice(0, 7)) <= 1300200) || (Number(String(item.Id).slice(0, 7)) >= 1300201 && Number(String(item.Id).slice(0, 7)) <= 1300300) || (Number(String(item.Id).slice(0, 7)) >= 1300401 && Number(String(item.Id).slice(0, 7)) <= 1300500)) && Number(item.Id) % 100000 !== 24500) &&
                                                        <div style={{justifyContent: "space-around", padding: "30px", marginRight: "50px"}} className="nftCard">
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <img src={item.Image} width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">{item.Name}</div>
                                                                </div>
                                                                <i style={{marginTop: "10px", fontSize: "30px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                                                <div>
                                                                    {(Number(item.Id) % 100000 !== 1500 && Number(item.Id) % 100000 !== 4500 && Number(item.Id) % 100000 !== 9500 && Number(item.Id) % 100000 !== 16500) && <img src={item.Image} width="120" alt="Can not load metadata." />}
                                                                    {Number(item.Id) % 100000 === 1500 && <img src="https://gateway.commudao.xyz/ipfs/bafkreidr4uq5voosuz6v4hqhiempf4a36x5aq6i4uceym2xbje65o5mwia" width="120" alt="Can not load metadata." />}
                                                                    {Number(item.Id) % 100000 === 4500 && <img src="https://gateway.commudao.xyz/ipfs/bafybeiew47pd67c3l5whmj6vhzullkqvrrsmtlssarwf5s54tnehejaxdu" width="120" alt="Can not load metadata." />}
                                                                    {Number(item.Id) % 100000 === 9500 && <img src="https://gateway.commudao.xyz/ipfs/bafkreihvuvksuylcjqb37rsgkr5z2l26iliyestxikmjsq7va6xtnnusxe" width="120" alt="Can not load metadata." />}
                                                                    {Number(item.Id) % 100000 === 16500 && <img src="https://gateway.commudao.xyz/ipfs/QmQbfG6ZVqHcfSPuPyhdu9fy3UjsRuUnkRJNu9g6YWLKz7" width="120" alt="Can not load metadata." />}
                                                                    <div style={{width: "150px"}} className="emp pixel">
                                                                        {Number(item.Id) % 100000 === 500 ? 
                                                                            <>{item.Name} [Lv.1]</> :
                                                                            <>
                                                                                {item.Name.slice(0, -3)}
                                                                                {Number(item.Id) % 100000 === 540 && 2}
                                                                                {Number(item.Id) % 100000 === 580 && 3}
                                                                                {Number(item.Id) % 100000 === 660 && 4}
                                                                                {Number(item.Id) % 100000 === 740 && 5}
                                                                                {Number(item.Id) % 100000 === 860 && 6}
                                                                                {Number(item.Id) % 100000 === 980 && 7}
                                                                                {Number(item.Id) % 100000 === 1140 && 8}
                                                                                {Number(item.Id) % 100000 === 1300 && 9}
                                                                                {Number(item.Id) % 100000 === 1500 && 10}
                                                                                {Number(item.Id) % 100000 === 1700 && 11}
                                                                                {Number(item.Id) % 100000 === 1940 && 12}
                                                                                {Number(item.Id) % 100000 === 2180 && 13}
                                                                                {Number(item.Id) % 100000 === 2460 && 14}
                                                                                {Number(item.Id) % 100000 === 2740 && 15}
                                                                                {Number(item.Id) % 100000 === 3060 && 16}
                                                                                {Number(item.Id) % 100000 === 3380 && 17}
                                                                                {Number(item.Id) % 100000 === 3740 && 18}
                                                                                {Number(item.Id) % 100000 === 4100 && 19}
                                                                                {Number(item.Id) % 100000 === 4500 && 20}
                                                                                {Number(item.Id) % 100000 === 4900 && 21}
                                                                                {Number(item.Id) % 100000 === 5340 && 22}
                                                                                {Number(item.Id) % 100000 === 5780 && 23}
                                                                                {Number(item.Id) % 100000 === 6260 && 24}
                                                                                {Number(item.Id) % 100000 === 6740 && 25}
                                                                                {Number(item.Id) % 100000 === 7260 && 26}
                                                                                {Number(item.Id) % 100000 === 7780 && 27}
                                                                                {Number(item.Id) % 100000 === 8340 && 28}
                                                                                {Number(item.Id) % 100000 === 8900 && 29}
                                                                                {Number(item.Id) % 100000 === 9500 && 30}
                                                                                {Number(item.Id) % 100000 === 10100 && 31}
                                                                                {Number(item.Id) % 100000 === 10740 && 32}
                                                                                {Number(item.Id) % 100000 === 11380 && 33}
                                                                                {Number(item.Id) % 100000 === 12060 && 34}
                                                                                {Number(item.Id) % 100000 === 12740 && 35}
                                                                                {Number(item.Id) % 100000 === 13460 && 36}
                                                                                {Number(item.Id) % 100000 === 14180 && 37}
                                                                                {Number(item.Id) % 100000 === 14940 && 38}
                                                                                {Number(item.Id) % 100000 === 15700 && 39}
                                                                                {Number(item.Id) % 100000 === 16500 && 40}
                                                                                {Number(item.Id) % 100000 === 17300 && 41}
                                                                                {Number(item.Id) % 100000 === 18140 && 42}
                                                                                {Number(item.Id) % 100000 === 18980 && 43}
                                                                                {Number(item.Id) % 100000 === 19860 && 44}
                                                                                {Number(item.Id) % 100000 === 20740 && 45}
                                                                                {Number(item.Id) % 100000 === 21660 && 46}
                                                                                {Number(item.Id) % 100000 === 22580 && 47}
                                                                                {Number(item.Id) % 100000 === 23540 && 48}
                                                                                {Number(item.Id) % 100000 === 24500 && 49}
                                                                                ]
                                                                            </>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pixel" style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <div>
                                                                        Level&nbsp;
                                                                        {Number(item.Id) % 100000 === 500 && 0}
                                                                        {Number(item.Id) % 100000 === 540 && 1}
                                                                        {Number(item.Id) % 100000 === 580 && 2}
                                                                        {Number(item.Id) % 100000 === 660 && 3}
                                                                        {Number(item.Id) % 100000 === 740 && 4}
                                                                        {Number(item.Id) % 100000 === 860 && 5}
                                                                        {Number(item.Id) % 100000 === 980 && 6}
                                                                        {Number(item.Id) % 100000 === 1140 && 7}
                                                                        {Number(item.Id) % 100000 === 1300 && 8}
                                                                        {Number(item.Id) % 100000 === 1500 && 9}
                                                                        {Number(item.Id) % 100000 === 1700 && 10}
                                                                        {Number(item.Id) % 100000 === 1940 && 11}
                                                                        {Number(item.Id) % 100000 === 2180 && 12}
                                                                        {Number(item.Id) % 100000 === 2460 && 13}
                                                                        {Number(item.Id) % 100000 === 2740 && 14}
                                                                        {Number(item.Id) % 100000 === 3060 && 15}
                                                                        {Number(item.Id) % 100000 === 3380 && 16}
                                                                        {Number(item.Id) % 100000 === 3740 && 17}
                                                                        {Number(item.Id) % 100000 === 4100 && 18}
                                                                        {Number(item.Id) % 100000 === 4500 && 19}
                                                                        {Number(item.Id) % 100000 === 4900 && 20}
                                                                        {Number(item.Id) % 100000 === 5340 && 21}
                                                                        {Number(item.Id) % 100000 === 5780 && 22}
                                                                        {Number(item.Id) % 100000 === 6260 && 23}
                                                                        {Number(item.Id) % 100000 === 6740 && 24}
                                                                        {Number(item.Id) % 100000 === 7260 && 25}
                                                                        {Number(item.Id) % 100000 === 7780 && 26}
                                                                        {Number(item.Id) % 100000 === 8340 && 27}
                                                                        {Number(item.Id) % 100000 === 8900 && 28}
                                                                        {Number(item.Id) % 100000 === 9500 && 29}
                                                                        {Number(item.Id) % 100000 === 10100 && 30}
                                                                        {Number(item.Id) % 100000 === 10740 && 31}
                                                                        {Number(item.Id) % 100000 === 11380 && 32}
                                                                        {Number(item.Id) % 100000 === 12060 && 33}
                                                                        {Number(item.Id) % 100000 === 12740 && 34}
                                                                        {Number(item.Id) % 100000 === 13460 && 35}
                                                                        {Number(item.Id) % 100000 === 14180 && 36}
                                                                        {Number(item.Id) % 100000 === 14940 && 37}
                                                                        {Number(item.Id) % 100000 === 15700 && 38}
                                                                        {Number(item.Id) % 100000 === 16500 && 39}
                                                                        {Number(item.Id) % 100000 === 17300 && 40}
                                                                        {Number(item.Id) % 100000 === 18140 && 41}
                                                                        {Number(item.Id) % 100000 === 18980 && 42}
                                                                        {Number(item.Id) % 100000 === 19860 && 43}
                                                                        {Number(item.Id) % 100000 === 20740 && 44}
                                                                        {Number(item.Id) % 100000 === 21660 && 45}
                                                                        {Number(item.Id) % 100000 === 22580 && 46}
                                                                        {Number(item.Id) % 100000 === 23540 && 47}
                                                                        {Number(item.Id) % 100000 === 24500 && 48}
                                                                    </div>
                                                                    <div style={{width: "150px"}}>{item.RewardPerSec} cmpow per sec</div>
                                                                </div>
                                                                <div>
                                                                    <div>
                                                                        Level&nbsp;
                                                                        {Number(item.Id) % 100000 === 500 && 1}
                                                                        {Number(item.Id) % 100000 === 540 && 2}
                                                                        {Number(item.Id) % 100000 === 580 && 3}
                                                                        {Number(item.Id) % 100000 === 660 && 4}
                                                                        {Number(item.Id) % 100000 === 740 && 5}
                                                                        {Number(item.Id) % 100000 === 860 && 6}
                                                                        {Number(item.Id) % 100000 === 980 && 7}
                                                                        {Number(item.Id) % 100000 === 1140 && 8}
                                                                        {Number(item.Id) % 100000 === 1300 && 9}
                                                                        {Number(item.Id) % 100000 === 1500 && 10}
                                                                        {Number(item.Id) % 100000 === 1700 && 11}
                                                                        {Number(item.Id) % 100000 === 1940 && 12}
                                                                        {Number(item.Id) % 100000 === 2180 && 13}
                                                                        {Number(item.Id) % 100000 === 2460 && 14}
                                                                        {Number(item.Id) % 100000 === 2740 && 15}
                                                                        {Number(item.Id) % 100000 === 3060 && 16}
                                                                        {Number(item.Id) % 100000 === 3380 && 17}
                                                                        {Number(item.Id) % 100000 === 3740 && 18}
                                                                        {Number(item.Id) % 100000 === 4100 && 19}
                                                                        {Number(item.Id) % 100000 === 4500 && 20}
                                                                        {Number(item.Id) % 100000 === 4900 && 21}
                                                                        {Number(item.Id) % 100000 === 5340 && 22}
                                                                        {Number(item.Id) % 100000 === 5780 && 23}
                                                                        {Number(item.Id) % 100000 === 6260 && 24}
                                                                        {Number(item.Id) % 100000 === 6740 && 25}
                                                                        {Number(item.Id) % 100000 === 7260 && 26}
                                                                        {Number(item.Id) % 100000 === 7780 && 27}
                                                                        {Number(item.Id) % 100000 === 8340 && 28}
                                                                        {Number(item.Id) % 100000 === 8900 && 29}
                                                                        {Number(item.Id) % 100000 === 9500 && 30}
                                                                        {Number(item.Id) % 100000 === 10100 && 31}
                                                                        {Number(item.Id) % 100000 === 10740 && 32}
                                                                        {Number(item.Id) % 100000 === 11380 && 33}
                                                                        {Number(item.Id) % 100000 === 12060 && 34}
                                                                        {Number(item.Id) % 100000 === 12740 && 35}
                                                                        {Number(item.Id) % 100000 === 13460 && 36}
                                                                        {Number(item.Id) % 100000 === 14180 && 37}
                                                                        {Number(item.Id) % 100000 === 14940 && 38}
                                                                        {Number(item.Id) % 100000 === 15700 && 39}
                                                                        {Number(item.Id) % 100000 === 16500 && 40}
                                                                        {Number(item.Id) % 100000 === 17300 && 41}
                                                                        {Number(item.Id) % 100000 === 18140 && 42}
                                                                        {Number(item.Id) % 100000 === 18980 && 43}
                                                                        {Number(item.Id) % 100000 === 19860 && 44}
                                                                        {Number(item.Id) % 100000 === 20740 && 45}
                                                                        {Number(item.Id) % 100000 === 21660 && 46}
                                                                        {Number(item.Id) % 100000 === 22580 && 47}
                                                                        {Number(item.Id) % 100000 === 23540 && 48}
                                                                        {Number(item.Id) % 100000 === 24500 && 49}
                                                                    </div>
                                                                    <div style={{width: "150px"}}>
                                                                        {Number(item.Id) % 100000 <= 540 && item.RewardPerSec + 40}
                                                                        {(Number(item.Id) % 100000 === 580 || Number(item.Id) % 100000 === 660) && item.RewardPerSec + 80}
                                                                        {(Number(item.Id) % 100000 === 740 || Number(item.Id) % 100000 === 860) && item.RewardPerSec + 120}
                                                                        {(Number(item.Id) % 100000 === 980 || Number(item.Id) % 100000 === 1140) && item.RewardPerSec + 160}
                                                                        {(Number(item.Id) % 100000 === 1300 || Number(item.Id) % 100000 === 1500) && item.RewardPerSec + 200}
                                                                        {(Number(item.Id) % 100000 === 1700 || Number(item.Id) % 100000 === 1940) && item.RewardPerSec + 240}
                                                                        {(Number(item.Id) % 100000 === 2180 || Number(item.Id) % 100000 === 2460) && item.RewardPerSec + 280}
                                                                        {(Number(item.Id) % 100000 === 2740 || Number(item.Id) % 100000 === 3060) && item.RewardPerSec + 320}
                                                                        {(Number(item.Id) % 100000 === 3380 || Number(item.Id) % 100000 === 3740) && item.RewardPerSec + 360}
                                                                        {(Number(item.Id) % 100000 === 4100 || Number(item.Id) % 100000 === 4500) && item.RewardPerSec + 400}
                                                                        {(Number(item.Id) % 100000 === 4900 || Number(item.Id) % 100000 === 5340) && item.RewardPerSec + 440}
                                                                        {(Number(item.Id) % 100000 === 5780 || Number(item.Id) % 100000 === 6260) && item.RewardPerSec + 480}
                                                                        {(Number(item.Id) % 100000 === 6740 || Number(item.Id) % 100000 === 7260) && item.RewardPerSec + 520}
                                                                        {(Number(item.Id) % 100000 === 7780 || Number(item.Id) % 100000 === 8340) && item.RewardPerSec + 560}
                                                                        {(Number(item.Id) % 100000 === 8900 || Number(item.Id) % 100000 === 9500) && item.RewardPerSec + 600}
                                                                        {(Number(item.Id) % 100000 === 10100 || Number(item.Id) % 100000 === 10740) && item.RewardPerSec + 640}
                                                                        {(Number(item.Id) % 100000 === 11380 || Number(item.Id) % 100000 === 12060) && item.RewardPerSec + 680}
                                                                        {(Number(item.Id) % 100000 === 12740 || Number(item.Id) % 100000 === 13460) && item.RewardPerSec + 720}
                                                                        {(Number(item.Id) % 100000 === 14180 || Number(item.Id) % 100000 === 14940) && item.RewardPerSec + 760}
                                                                        {(Number(item.Id) % 100000 === 15700 || Number(item.Id) % 100000 === 16500) && item.RewardPerSec + 800}
                                                                        {(Number(item.Id) % 100000 === 17300 || Number(item.Id) % 100000 === 18140) && item.RewardPerSec + 840}
                                                                        {(Number(item.Id) % 100000 === 18980 || Number(item.Id) % 100000 === 19860) && item.RewardPerSec + 880}
                                                                        {(Number(item.Id) % 100000 === 20740 || Number(item.Id) % 100000 === 21660) && item.RewardPerSec + 920}
                                                                        {(Number(item.Id) % 100000 === 22580 || Number(item.Id) % 100000 === 23540) && item.RewardPerSec + 960}
                                                                        {(Number(item.Id) % 100000 === 24500) && item.RewardPerSec + 1000}
                                                                        &nbsp;cmpow per sec
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "10px"}}></div>
                                                            <div style={{marginTop: "10px", width: "350px"}}>
                                                                <div className="pixel">
                                                                    <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i>
                                                                    Evolution resource
                                                                </div>
                                                                <div style={{marginTop: "10px", display: "flex", flexDirection: "row"}} className="pixel">
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu" height="18" alt="$PZA"/>
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {Number(item.Id) % 100000 === 500 && 250}
                                                                        {Number(item.Id) % 100000 === 540 && 300}
                                                                        {Number(item.Id) % 100000 === 580 && 360}
                                                                        {Number(item.Id) % 100000 === 660 && 432}
                                                                        {Number(item.Id) % 100000 === 740 && 518}
                                                                        {Number(item.Id) % 100000 === 860 && 622}
                                                                        {Number(item.Id) % 100000 === 980 && 746}
                                                                        {Number(item.Id) % 100000 === 1140 && 895}
                                                                        {Number(item.Id) % 100000 === 1300 && '1,074'}
                                                                        {Number(item.Id) % 100000 === 1500 && '12,890'}
                                                                        {Number(item.Id) % 100000 === 1700 && '1,547'}
                                                                        {Number(item.Id) % 100000 === 1940 && '1,857'}
                                                                        {Number(item.Id) % 100000 === 2180 && '2,229'}
                                                                        {Number(item.Id) % 100000 === 2460 && '2,674'}
                                                                        {Number(item.Id) % 100000 === 2740 && '3,209'}
                                                                        {Number(item.Id) % 100000 === 3060 && '3,851'}
                                                                        {Number(item.Id) % 100000 === 3380 && '4,622'}
                                                                        {Number(item.Id) % 100000 === 3740 && '5,546'}
                                                                        {Number(item.Id) % 100000 === 4100 && '6,655'}
                                                                        {Number(item.Id) % 100000 === 4500 && '79,860'}
                                                                        {Number(item.Id) % 100000 === 4900 && '11,501'}
                                                                        {Number(item.Id) % 100000 === 5340 && '13,801'}
                                                                        {Number(item.Id) % 100000 === 5780 && '16,561'}
                                                                        {Number(item.Id) % 100000 === 6260 && '19,874'}
                                                                        {Number(item.Id) % 100000 === 6740 && '23,849'}
                                                                        {Number(item.Id) % 100000 === 7260 && '28,618'}
                                                                        {Number(item.Id) % 100000 === 7780 && '34,342'}
                                                                        {Number(item.Id) % 100000 === 8340 && '41,211'}
                                                                        {Number(item.Id) % 100000 === 8900 && '49,453'}
                                                                        {Number(item.Id) % 100000 === 9500 && '593,440'}
                                                                        {Number(item.Id) % 100000 === 10100 && '71,212'}
                                                                        {Number(item.Id) % 100000 === 10740 && '85,455'}
                                                                        {Number(item.Id) % 100000 === 11380 && '102,546'}
                                                                        {Number(item.Id) % 100000 === 12060 && '123,055'}
                                                                        {Number(item.Id) % 100000 === 12740 && '147,667'}
                                                                        {Number(item.Id) % 100000 === 13460 && '177,200'}
                                                                        {Number(item.Id) % 100000 === 14180 && '212,640'}
                                                                        {Number(item.Id) % 100000 === 14940 && '255,168'}
                                                                        {Number(item.Id) % 100000 === 15700 && '306,202'}
                                                                        {Number(item.Id) % 100000 === 16500 && '3,674,420'}
                                                                        {Number(item.Id) % 100000 === 17300 && '440,931'}
                                                                        {Number(item.Id) % 100000 === 18140 && '529,117'}
                                                                        {Number(item.Id) % 100000 === 18980 && '634,941'}
                                                                        {Number(item.Id) % 100000 === 19860 && '761,929'}
                                                                        {Number(item.Id) % 100000 === 20740 && '914,315'}
                                                                        {Number(item.Id) % 100000 === 21660 && '1,097,178'}
                                                                        {Number(item.Id) % 100000 === 22580 && '1,316,614'}
                                                                        {Number(item.Id) % 100000 === 23540 && '1,579,937'}
                                                                        {Number(item.Id) % 100000 === 24500 && '1,895,924'}
                                                                    </div>
                                                                    <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                                                    {Number(item.Id) % 100000 <= 1300 && <img src="https://gateway.commudao.xyz/ipfs/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq" height="18" alt="$CU"/>}
                                                                    {(Number(item.Id) % 100000 >= 1700 && Number(item.Id) % 100000 <= 4100) && <img src="https://gateway.commudao.xyz/ipfs/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde" height="18" alt="$SIL"/>}
                                                                    {(Number(item.Id) % 100000 >= 4900 && Number(item.Id) % 100000 <= 8900) && <img src="https://gateway.commudao.xyz/ipfs/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm" height="18" alt="$GOLD"/>}
                                                                    {(Number(item.Id) % 100000 === 1500 || Number(item.Id) % 100000 === 4500 || Number(item.Id) % 100000 === 9500 || Number(item.Id) % 100000 === 16500) && <img src="https://gateway.commudao.xyz/ipfs/bafkreia2bjrh7yw2vp23e5lnc6u75weg6nq7dzkyruggsnjxid6qtofeeq" height="18" alt="$JDAO"/>}
                                                                    {(Number(item.Id) % 100000 >= 10100 && Number(item.Id) % 100000 <= 15700) && <img src="https://gateway.commudao.xyz/ipfs/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa" height="18" alt="$PLAT"/>}
                                                                    {(Number(item.Id) % 100000 >= 17300 && Number(item.Id) % 100000 <= 24500) && <img src="https://gateway.commudao.xyz/ipfs/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy" height="18" alt="$JASP"/>}
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {Number(item.Id) % 100000 === 500 && 0}
                                                                        {Number(item.Id) % 100000 === 540 && 500}
                                                                        {Number(item.Id) % 100000 === 580 && '1,000'}
                                                                        {Number(item.Id) % 100000 === 660 && '2,000'}
                                                                        {Number(item.Id) % 100000 === 740 && '4,000'}
                                                                        {Number(item.Id) % 100000 === 860 && '8,000'}
                                                                        {Number(item.Id) % 100000 === 980 && '16,000'}
                                                                        {Number(item.Id) % 100000 === 1140 && '32,000'}
                                                                        {Number(item.Id) % 100000 === 1300 && '64,000'}
                                                                        {Number(item.Id) % 100000 === 1500 && 50}
                                                                        {Number(item.Id) % 100000 === 1700 && '1,500'}
                                                                        {Number(item.Id) % 100000 === 1940 && '3,000'}
                                                                        {Number(item.Id) % 100000 === 2180 && '6,000'}
                                                                        {Number(item.Id) % 100000 === 2460 && '12,000'}
                                                                        {Number(item.Id) % 100000 === 2740 && '24,000'}
                                                                        {Number(item.Id) % 100000 === 3060 && '48,000'}
                                                                        {Number(item.Id) % 100000 === 3380 && '96,000'}
                                                                        {Number(item.Id) % 100000 === 3740 && '192,000'}
                                                                        {Number(item.Id) % 100000 === 4100 && '384,000'}
                                                                        {Number(item.Id) % 100000 === 4500 && 150}
                                                                        {Number(item.Id) % 100000 === 4900 && '19,200'}
                                                                        {Number(item.Id) % 100000 === 5340 && '28,800'}
                                                                        {Number(item.Id) % 100000 === 5780 && '43,200'}
                                                                        {Number(item.Id) % 100000 === 6260 && '64,800'}
                                                                        {Number(item.Id) % 100000 === 6740 && '97,200'}
                                                                        {Number(item.Id) % 100000 === 7260 && '145,800'}
                                                                        {Number(item.Id) % 100000 === 7780 && '218,700'}
                                                                        {Number(item.Id) % 100000 === 8340 && '328,050'}
                                                                        {Number(item.Id) % 100000 === 8900 && '492,075'}
                                                                        {Number(item.Id) % 100000 === 9500 && 450}
                                                                        {Number(item.Id) % 100000 === 10100 && '240,000'}
                                                                        {Number(item.Id) % 100000 === 10740 && '360,000'}
                                                                        {Number(item.Id) % 100000 === 11380 && '540,000'}
                                                                        {Number(item.Id) % 100000 === 12060 && '810,000'}
                                                                        {Number(item.Id) % 100000 === 12740 && '1,215,000'}
                                                                        {Number(item.Id) % 100000 === 13460 && '1,822,500'}
                                                                        {Number(item.Id) % 100000 === 14180 && '2,733,750'}
                                                                        {Number(item.Id) % 100000 === 14940 && '4,100,625'}
                                                                        {Number(item.Id) % 100000 === 15700 && '6,150,937'}
                                                                        {Number(item.Id) % 100000 === 16500 && 1350}
                                                                        {Number(item.Id) % 100000 === 17300 && '500 GWEI'}
                                                                        {Number(item.Id) % 100000 === 18140 && '750 GWEI'}
                                                                        {Number(item.Id) % 100000 === 18980 && '1,125 GWEI'}
                                                                        {Number(item.Id) % 100000 === 19860 && '1,687 GWEI'}
                                                                        {Number(item.Id) % 100000 === 20740 && '2,530 GWEI'}
                                                                        {Number(item.Id) % 100000 === 21660 && '3,795 GWEI'}
                                                                        {Number(item.Id) % 100000 === 22580 && '5,692 GWEI'}
                                                                        {Number(item.Id) % 100000 === 23540 && '8,538 GWEI'}
                                                                        {Number(item.Id) % 100000 === 24500 && '12,807 GWEI'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{textAlign: "center", borderRadius: "12px", padding: "10px 20px", width: "80px"}}
                                                                className="pixel button"
                                                                onClick={() => {
                                                                    let arg = 0
                                                                    if (Number(String(item.Id).slice(0, 7)) <= 1300100) {
                                                                        arg = 1000
                                                                    } else if (Number(String(item.Id).slice(0, 7)) <= 1300200) {
                                                                        arg = 2000
                                                                    } else if (Number(String(item.Id).slice(0, 7)) <= 1300300) {
                                                                        arg = 3000
                                                                    } else if (Number(String(item.Id).slice(0, 7)) <= 1300500) {
                                                                        arg = 4000
                                                                    }
                                                                    let ind = 0
                                                                    if (Number(item.Id) % 100000 === 500) {
                                                                        ind = 1
                                                                    } else if (Number(item.Id) % 100000 === 540) {
                                                                        ind = 2
                                                                    } else if (Number(item.Id) % 100000 === 580) {
                                                                        ind = 3
                                                                    } else if (Number(item.Id) % 100000 === 660) {
                                                                        ind = 4
                                                                    } else if (Number(item.Id) % 100000 === 740) {
                                                                        ind = 5
                                                                    } else if (Number(item.Id) % 100000 === 860) {
                                                                        ind = 6
                                                                    } else if (Number(item.Id) % 100000 === 980) {
                                                                        ind = 7
                                                                    } else if (Number(item.Id) % 100000 === 1140) {
                                                                        ind = 8
                                                                    } else if (Number(item.Id) % 100000 === 1300) {
                                                                        ind = 9
                                                                    } else if (Number(item.Id) % 100000 === 1500) {
                                                                        ind = 10
                                                                    } else if (Number(item.Id) % 100000 === 1700) {
                                                                        ind = 11
                                                                    } else if (Number(item.Id) % 100000 === 1940) {
                                                                        ind = 12
                                                                    } else if (Number(item.Id) % 100000 === 2180) {
                                                                        ind = 13
                                                                    } else if (Number(item.Id) % 100000 === 2460) {
                                                                        ind = 14
                                                                    } else if (Number(item.Id) % 100000 === 2740) {
                                                                        ind = 15
                                                                    } else if (Number(item.Id) % 100000 === 3060) {
                                                                        ind = 16
                                                                    } else if (Number(item.Id) % 100000 === 3380) {
                                                                        ind = 17
                                                                    } else if (Number(item.Id) % 100000 === 3740) {
                                                                        ind = 18
                                                                    } else if (Number(item.Id) % 100000 === 4100) {
                                                                        ind = 19
                                                                    } else if (Number(item.Id) % 100000 === 4500) {
                                                                        ind = 20
                                                                    } else if (Number(item.Id) % 100000 === 4900) {
                                                                        ind = 21
                                                                    } else if (Number(item.Id) % 100000 === 5340) {
                                                                        ind = 22
                                                                    } else if (Number(item.Id) % 100000 === 5780) {
                                                                        ind = 23
                                                                    } else if (Number(item.Id) % 100000 === 6260) {
                                                                        ind = 24
                                                                    } else if (Number(item.Id) % 100000 === 6740) {
                                                                        ind = 25
                                                                    } else if (Number(item.Id) % 100000 === 7260) {
                                                                        ind = 26
                                                                    } else if (Number(item.Id) % 100000 === 7780) {
                                                                        ind = 27
                                                                    } else if (Number(item.Id) % 100000 === 8340) {
                                                                        ind = 28
                                                                    } else if (Number(item.Id) % 100000 === 8900) {
                                                                        ind = 29
                                                                    } else if (Number(item.Id) % 100000 === 9500) {
                                                                        ind = 30
                                                                    } else if (Number(item.Id) % 100000 === 10100) {
                                                                        ind = 31
                                                                    } else if (Number(item.Id) % 100000 === 10740) {
                                                                        ind = 32
                                                                    } else if (Number(item.Id) % 100000 === 11380) {
                                                                        ind = 33
                                                                    } else if (Number(item.Id) % 100000 === 12060) {
                                                                        ind = 34
                                                                    } else if (Number(item.Id) % 100000 === 12740) {
                                                                        ind = 35
                                                                    } else if (Number(item.Id) % 100000 === 13460) {
                                                                        ind = 36
                                                                    } else if (Number(item.Id) % 100000 === 14180) {
                                                                        ind = 37
                                                                    } else if (Number(item.Id) % 100000 === 14940) {
                                                                        ind = 38
                                                                    } else if (Number(item.Id) % 100000 === 15700) {
                                                                        ind = 39
                                                                    } else if (Number(item.Id) % 100000 === 16500) {
                                                                        ind = 40
                                                                    } else if (Number(item.Id) % 100000 === 17300) {
                                                                        ind = 41
                                                                    } else if (Number(item.Id) % 100000 === 18140) {
                                                                        ind = 42
                                                                    } else if (Number(item.Id) % 100000 === 18980) {
                                                                        ind = 43
                                                                    } else if (Number(item.Id) % 100000 === 19860) {
                                                                        ind = 44
                                                                    } else if (Number(item.Id) % 100000 === 20740) {
                                                                        ind = 45
                                                                    } else if (Number(item.Id) % 100000 === 21660) {
                                                                        ind = 46
                                                                    } else if (Number(item.Id) % 100000 === 22580) {
                                                                        ind = 47
                                                                    } else if (Number(item.Id) % 100000 === 23540) {
                                                                        ind = 48
                                                                    } else if (Number(item.Id) % 100000 === 24500) {
                                                                        ind = 49
                                                                    }
                                                                    evolutionV2Handle(item.Id, arg + ind)
                                                                }}
                                                            >
                                                                UPGRADE
                                                            </div>
                                                        </div>
                                                    }


                                                    {String(item.Id).length === 12 && Number(String(item.Id).slice(0, 4)) <= 1003 && Number(String(item.Id).slice(4, 7)) <= 500 &&
                                                        <div style={{justifyContent: "space-around", padding: "30px", marginRight: "50px"}} className="nftCard">
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <img src={item.Image} width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">{item.Name}</div>
                                                                </div>
                                                                <i style={{marginTop: "10px", fontSize: "30px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                                                <div>
                                                                    <img src={item.Image} width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">
                                                                        {String(item.Id).slice(0, 4) === "1001" ? <>{item.Name} [Lv.1]</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1002" ? <>{item.Name.slice(0, -2)}2]</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1003" ? <>{item.Name.slice(0, -2)}3]</> : <></>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <div className="pixel">
                                                                        {String(item.Id).slice(0, 4) === "1001" ? <>Level 0</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1002" ? <>Level 1</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1003" ? <>Level 2</> : <></>}
                                                                    </div>
                                                                    <div style={{width: "150px"}} className="pixel">{item.RewardPerSec} cmpow per sec</div>
                                                                </div>
                                                                <div>
                                                                    <div className="pixel">
                                                                        {String(item.Id).slice(0, 4) === "1001" ? <>Level 1</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1002" ? <>Level 2</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1003" ? <>Level 3 [MAX]</> : <></>}
                                                                    </div>
                                                                    <div style={{width: "150px"}} className="pixel">{item.RewardPerSec + 100} cmpow per sec</div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "10px"}}></div>
                                                            <div style={{marginTop: "10px", width: "350px"}}>
                                                                <div className="pixel">
                                                                    <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i>
                                                                    Evolution resource
                                                                </div>
                                                                <div style={{marginTop: "10px", display: "flex", flexDirection: "row"}} className="pixel">
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="18" alt="$BBQ"/>
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {String(item.Id).slice(0, 4) === "1001" ? <>10,000</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1002" ? <>15,000</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1003" ? <>25,000</> : <></>}
                                                                    </div>
                                                                    <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreia2bjrh7yw2vp23e5lnc6u75weg6nq7dzkyruggsnjxid6qtofeeq" height="18" alt="$JDAO"/>
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {String(item.Id).slice(0, 4) === "1001" ? <>1</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1002" ? <>2</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1003" ? <>3</> : <></>}
                                                                    </div>
                                                                    <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u" height="18" alt="$CMJ"/>
                                                                    <div style={{margin: "0 5px"}}>
                                                                        {String(item.Id).slice(0, 4) === "1001" ? <>10</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1002" ? <>20</> : <></>}
                                                                        {String(item.Id).slice(0, 4) === "1003" ? <>30</> : <></>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{textAlign: "center", borderRadius: "12px", padding: "10px 20px", width: "80px"}}
                                                                className="pixel button"
                                                                onClick={() => {
                                                                    if (Number(item.Id) <= 100110000100) {
                                                                        evolutionHandle(item.Id, 1)
                                                                    } else if (Number(item.Id) <= 100120000100) {
                                                                        evolutionHandle(item.Id, 2)
                                                                    } else if (Number(item.Id) <= 100130000100) {
                                                                        evolutionHandle(item.Id, 3)
                                                                    } else if (Number(item.Id) <= 100140000100) {
                                                                        evolutionHandle(item.Id, 4)
                                                                    } else if (Number(item.Id) <= 100150000100) {
                                                                        evolutionHandle(item.Id, 5)

                                                                    } else if (Number(item.Id) <= 100210000200) {
                                                                        evolutionHandle(item.Id, 6)
                                                                    } else if (Number(item.Id) <= 100220000200) {
                                                                        evolutionHandle(item.Id, 7)
                                                                    } else if (Number(item.Id) <= 100230000200) {
                                                                        evolutionHandle(item.Id, 8)
                                                                    } else if (Number(item.Id) <= 100240000200) {
                                                                        evolutionHandle(item.Id, 9)
                                                                    } else if (Number(item.Id) <= 100250000200) {
                                                                        evolutionHandle(item.Id, 10)

                                                                    } else if (Number(item.Id) <= 100310000300) {
                                                                        evolutionHandle(item.Id, 11)
                                                                    } else if (Number(item.Id) <= 100320000300) {
                                                                        evolutionHandle(item.Id, 12)
                                                                    } else if (Number(item.Id) <= 100330000300) {
                                                                        evolutionHandle(item.Id, 13)
                                                                    } else if (Number(item.Id) <= 100340000300) {
                                                                        evolutionHandle(item.Id, 14)
                                                                    } else if (Number(item.Id) <= 100350000300) {
                                                                        evolutionHandle(item.Id, 15)
                                                                    }
                                                                }}
                                                            >
                                                                UPGRADE
                                                            </div>
                                                        </div>
                                                    }

                                                    {String(item.Id).length === 12 && Number(String(item.Id).slice(0, 4)) === 1004 && Number(String(item.Id).slice(4, 7)) <= 100 &&
                                                        <div style={{justifyContent: "space-around", padding: "30px", marginRight: "50px"}} className="nftCard">
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <img src={item.Image} width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">{item.Name}</div>
                                                                </div>
                                                                <i style={{marginTop: "10px", fontSize: "30px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                                                <div>
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreigeifewiy4kyfle3xi6qsje4kz7mhqvt3xvufv6tes2ocyr6corsq" width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">FANCY PEPE JA</div>
                                                                </div>
                                                            </div>
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <div className="pixel">Level 3 [MAX]</div>
                                                                    <div style={{width: "150px"}} className="pixel">{item.RewardPerSec} cmpow per sec</div>
                                                                </div>
                                                                <div>
                                                                    <div className="pixel">FUSION FORM</div>
                                                                    <div style={{width: "150px"}} className="pixel">{item.RewardPerSec + 1200} cmpow per sec</div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "10px"}}></div>
                                                            <div style={{marginTop: "10px", width: "350px"}}>
                                                                <div className="pixel">
                                                                    <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i>
                                                                    Fusion resource
                                                                </div>
                                                                <div style={{marginTop: "10px", display: "flex", flexDirection: "row"}} className="pixel">
                                                                    <div style={{margin: "0 5px"}}>PEPE JA Vol.1 - 4 [Lv.3]</div>
                                                                    <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreia2bjrh7yw2vp23e5lnc6u75weg6nq7dzkyruggsnjxid6qtofeeq" height="18" alt="$JDAO"/>
                                                                    <div style={{margin: "0 5px"}}>15</div>
                                                                    <i style={{fontSize: "12px", margin: "5px 10px 5px 5px"}} className="fa fa-plus"></i>
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u" height="18" alt="$CMJ"/>
                                                                    <div style={{margin: "0 5px"}}>150</div>
                                                                </div>
                                                            </div>
                                                            <div style={{margin: "10px 0", width: "350px"}}>
                                                                    <div className="emp pixel">
                                                                        <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-gavel"></i>
                                                                        Success rate : 1/2
                                                                    </div>
                                                                    <div className="pixel">depend on parent blockhash calculation</div>
                                                                </div>
                                                            <div
                                                                style={{textAlign: "center", borderRadius: "12px", padding: "10px 20px", width: "80px"}}
                                                                className="pixel button"
                                                                onClick={() => {fusionHandle(item.Id, 1)}}
                                                            >
                                                                UPGRADE
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            ))}
                                            <div className="nftCard" style={{justifyContent: "center"}}>
                                                <i style={{fontSize: "150px", marginBottom: "30px"}} className="fas fa-scroll"></i>
                                                <div className="bold">No upgradable NFTs to show more.</div>
                                            </div>
                                        </div> :
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}}>
                                            {address !== null ?
                                                <div className="nftCard" style={{justifyContent: "center"}}>
                                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fas fa-scroll"></i>
                                                    <div className="bold">No NFTs to up level.</div>
                                                </div> :
                                                <div className="nftCard" style={{justifyContent: "center"}}>
                                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fa fa-sign-in"></i>
                                                    <div className="bold">Please connect wallet to view your NFTs.</div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </> :
                                <div style={{width: "300px", padding: "20px", margin: "20px"}}>
                                    <ThreeDots fill="#5f6476" />
                                </div>
                            }


                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                            <div style={{marginTop: "20px", fontSize: "16px", letterSpacing: "1px"}} className="bold">Salon NFTs</div>
                            {salonNft !== undefined && salonNft.length > 0 ?
                                <>
                                    {salonNft[0] !== null ?
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}}>
                                            {salonNft.map((item, index) => (
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} key={index}>
                                                    {Number(String(item.Id).slice(0, 7)) === 1000000 &&
                                                        <div style={{justifyContent: "space-around", padding: "30px", marginRight: "50px"}} className="nftCard">
                                                            <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                                <div>
                                                                    <img src={item.Image} width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">{item.Name}</div>
                                                                </div>
                                                                <i style={{marginTop: "10px", fontSize: "30px", margin: "2.5px 10px 2.5px 5px"}} className="fa fa-caret-right"></i>
                                                                <div>
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreif5fecf5rqrlixcxtpzplo7frtftt3yh2cmx6oca4l2jxuryjju2m" width="120" alt="Can not load metadata." />
                                                                    <div style={{width: "150px"}} className="emp pixel">SAPIENS #01</div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "10px"}}></div>
                                                            <div style={{marginTop: "10px", width: "350px"}}>
                                                                <div className="pixel">
                                                                    <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i>
                                                                    Salon resource
                                                                </div>
                                                                <div style={{marginTop: "10px", display: "flex", flexDirection: "row"}} className="pixel">
                                                                    <img src="https://gateway.commudao.xyz/ipfs/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u" height="18" alt="$CMJ"/>
                                                                    <div style={{margin: "0 5px"}}>10</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{textAlign: "center", borderRadius: "12px", padding: "10px 20px", width: "80px"}}
                                                                className="pixel button"
                                                                onClick={() => {changeHandle(item.Id)}}
                                                            >
                                                                CHANGE
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            ))}
                                        </div> :
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}}>
                                            {address !== null ?
                                                <div className="nftCard" style={{justifyContent: "center"}}>
                                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fas fa-scroll"></i>
                                                    <div className="bold">No Salon NFTs.</div>
                                                </div> :
                                                <div className="nftCard" style={{justifyContent: "center"}}>
                                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fa fa-sign-in"></i>
                                                    <div className="bold">Please connect wallet to view your NFTs.</div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </> :
                                <div style={{width: "300px", padding: "20px", margin: "20px"}}>
                                    <ThreeDots fill="#5f6476" />
                                </div>
                            }

                            
                            <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                            <div style={{marginTop: "20px", fontSize: "16px", letterSpacing: "1px"}} className="bold">Removal Clinic</div>
                            {salonNft !== undefined && salonNft.length > 0 ?
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}}>
                                    {Number(String(skinSlot1).slice(0, 1)) !== 0 ?
                                        <>
                                            {Number(String(skinSlot1).slice(0, 8)) === 10000000 &&
                                                <div style={{justifyContent: "space-around", padding: "30px", marginRight: "50px"}} className="nftCard">
                                                    <div style={{marginTop: "10px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                                        <div>
                                                            <img src="https://gateway.commudao.xyz/ipfs/bafkreif5fecf5rqrlixcxtpzplo7frtftt3yh2cmx6oca4l2jxuryjju2m" width="120" alt="Can not load metadata." />
                                                            <div style={{width: "150px"}} className="emp pixel">SAPIENS #01</div>
                                                        </div>
                                                    </div>
                                                    <div style={{width: "100%", borderBottom: "1px solid #dddade", marginTop: "10px"}}></div>
                                                    <div style={{marginTop: "10px", width: "350px"}}>
                                                        <div className="pixel">
                                                            <i style={{fontSize: "18px", marginRight: "5px"}} className="fa fa-flask"></i>
                                                            Removal resource
                                                        </div>
                                                        <div style={{marginTop: "10px", display: "flex", flexDirection: "row"}} className="pixel">
                                                            <img src="https://gateway.commudao.xyz/ipfs/bafkreico3y6ql5vudm35ttestwvffdacbp25h6t5ipbyncwr3qtzprrm5e" height="18" alt="$OS"/>
                                                            <div style={{margin: "0 5px"}}>10</div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        style={{textAlign: "center", borderRadius: "12px", padding: "10px 20px", width: "80px"}}
                                                        className="pixel button"
                                                        onClick={() => {unchangeHandle(1)}}
                                                    >
                                                        UNCHANGE
                                                    </div>
                                                </div>
                                            }
                                            <div className="nftCard" style={{justifyContent: "center"}}>
                                                <i style={{fontSize: "150px", marginBottom: "30px"}} className="fas fa-scroll"></i>
                                                <div className="bold">No more salon NFTs to show more.</div>
                                            </div>
                                        </> :
                                        <>
                                            {address !== null ?
                                                <div className="nftCard" style={{justifyContent: "center"}}>
                                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fas fa-scroll"></i>
                                                    <div className="bold">No salon NFTs to unchange.</div>
                                                </div> :
                                                <div className="nftCard" style={{justifyContent: "center"}}>
                                                    <i style={{fontSize: "150px", marginBottom: "30px"}} className="fa fa-sign-in"></i>
                                                    <div className="bold">Please connect wallet to view your NFTs.</div>
                                                </div>
                                            }
                                        </>
                                    }
                                </div> :
                                <div style={{width: "300px", padding: "20px", margin: "20px"}}>
                                    <ThreeDots fill="#5f6476" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default NpcEvolutionary