import React from 'react'
import { ethers } from 'ethers'
import { getBalance, readContract, readContracts, simulateContract, waitForTransactionReceipt, writeContract, sendTransaction } from '@wagmi/core'
import { useAccount } from 'wagmi'
import { useAppKit } from '@reown/appkit/react';
import Ammmerchant from  './Mall-Ammy'
import Ammmerchant2 from  './Mall-Jazzi'
import Ammmerchant3 from  './Mall-Degeno'
import Ammmerchant4 from  './Mall-Angelo'
import Ammmerchant5 from  './Mall-AutoTaomi'

const { ethereum } = window
const jusdtToken = "0x24599b658b57f91E7643f4F154B16bcd2884f9ac"
const cmjToken = "0xE67E280f5a354B4AcA15fA7f0ccbF667CF74F97b"
const wjbcToken = '0xC4B7C87510675167643e3DE6EEeD4D2c06A9e747'
const jdaoToken = '0x09bD3F5BFD9fA7dE25F7A2A75e1C317E4Df7Ef88'
const ctunaLab = "0xD9Be0e64053c8E0A0F868577F379C0ced5A28aF0"
const sx31Lab = '0xd431d826d7a4380b9259612176f00528b88840a7'
const swarLab = '0x5e18a8B78d5395371308C54719fead810Ce2aCd2'
const dunAngb = '0x59c1c2f5fa76db933b97b7c54223129e2a398534'
const taomeme = '0xdbCCc9F8920e7274eeC62e695084D3bCe443c3dd'
const iiLab = '0x523AA3aB2371A6360BeC4fEea7bE1293adb32241'
const dunEE = '0xF663c756b6D57724C3B41c8839aB9c7Af83c9751'
const gearToken = '0x0E2610730A3c42fd721B289BEe092D9AD1C76890'
const doijibToken = '0x7414e2D8Fb8466AfA4F85A240c57CB8615901FFB'
const woodToken = "0xc2744Ff255518a736505cF9aC1996D9adDec69Bd"
const bbqToken = '0x7004757e595409568Bd728736e1b0c79FDc94e1c'
const pzaLab = '0x09DcdCFc6C48803681a3422997c679E773656763'
const osToken = '0xAc5299D92373E9352636559cca497d7683A47655'
const dunCopper = '0x42F5213C7b6281FC6fb2d6F10576F70DB0a4C841'
const silToken = '0x2a081667587c35956d34A4cC3bf92b9CA0ef2C6f'
const goldToken = '0x7d5346E33889580528e6F79f48BdEE94D8A9E144'
const platToken = '0x3Bd00B6cd18281E3Ef13Ba348ad2783794dcb2bD'
const dunJasper = '0xe83567Cd0f3Ed2cca21BcE05DBab51707aff2860'
const plutoToken = '0x70a74ec50bcceae43dd16f48492552a8b25403ea'
const fbtcToken = '0x8656268C82cffda9062387F8F117166F01e8Ef2E'
const x4Token = '0x0DF9D160489440D630a247fBC830DA74779928b1'
const infpowToken = '0xCCbb477D6c28892d6311ebb729b4c242C92f70FD'
const cmdaoMerchant = "0xa4b53A4DD8277Dd2E506cb8692A492B1Dc6b255D"
const cmdaoMerchantV105 = '0x09e6a0A03afa27438c3f507de82b5f6061Ae1643'
const cmdaoMerchantV2 = "0x87BAC0BCBaadF9B7d24385b1AaaEbeDEb60a1A0a"
const cmdaoMerchantKYC = "0xF67761e0E72fea7bD176686a242f1535879be8aB"
const cmdaoMerchantWL = '0x010EbE14315F976967E6aE408Af5881617b86E09'
const cmdaoGasha02 = '0x87A612709b36b575103C65a90cB3B16Cac2BC898'
const cmdaoPresale = '0xbf9C07f7223D09899c1BEC25f8Db559828166E78'
const kyc = '0xfB046CF7dBA4519e997f1eF3e634224a9BFf5A2E'

const Mall = ({ config, setisLoading, callMode, navigate, txupdate, setTxupdate, setisError, setErrMsg, kycABI, ctunaLabABI, cmdaoMerchantABI, cmdaoMerchantKYCABI, cmdaoMerchantV2ABI, cmdaoMerchantWLABI, cmdaoGasha02ABI, ammyStdABI, angeloStdABI, cmdaoAmmNpcABI, erc20Abi, wjbcABI, presaleABI }) => {
    let { address, chain } = useAccount()
    if (address === undefined) {
        address = null
    }
    const { open } = useAppKit()
    const [isWrappedModal, setIsWrappedModal] = React.useState(false)
    const [isSpecialModal, setIsSpecialModal] = React.useState(false)
    const [wrappedValue, setWrappedValue] = React.useState("")
    const [unwrappedValue, setUnwrappedValue] = React.useState("")
    const [sell1Remain, setSell1Remain] = React.useState(37)
    const [canbuy1, setCanBuy1] = React.useState(false)
    const [sell2Remain, setSell2Remain] = React.useState(22)
    const [canbuy2, setCanBuy2] = React.useState(false)
    const [sell4Remain, setSell4Remain] = React.useState(100)
    const [canbuy4, setCanBuy4] = React.useState(false)
    const [sell5Remain, setSell5Remain] = React.useState(100)
    const [canbuy5, setCanBuy5] = React.useState(false)
    const [sell6Remain, setSell6Remain] = React.useState(100)
    const [canbuy6, setCanBuy6] = React.useState(false)
    const [sell7Remain, setSell7Remain] = React.useState(100)
    const [canbuy7, setCanBuy7] = React.useState(false)
    const [sell8Remain, setSell8Remain] = React.useState(333)
    const [canbuy8, setCanBuy8] = React.useState(false)
    const [sell9Remain, setSell9Remain] = React.useState(1000)
    const [canbuy9, setCanBuy9] = React.useState(false)
    const [sell13Remain, setSell13Remain] = React.useState(333)
    const [canbuy13, setCanBuy13] = React.useState(false)
    const [sell15Remain, setSell15Remain] = React.useState(100)
    const [sell16Remain, setSell16Remain] = React.useState(100)
    const [sell17Remain, setSell17Remain] = React.useState(100)
    const [sell18Remain, setSell18Remain] = React.useState(300)
    const [canbuy18, setCanBuy18] = React.useState(false)
    const [sell19Remain, setSell19Remain] = React.useState(100)
    const [sell20Remain, setSell20Remain] = React.useState(100)
    const [sell21Remain, setSell21Remain] = React.useState(100)
    const [sell22Remain, setSell22Remain] = React.useState(100)
    const [sell24Remain, setSell24Remain] = React.useState(250)
    const [sell25Remain, setSell25Remain] = React.useState(250)
    const [sell26Remain, setSell26Remain] = React.useState(250)
    const [sell27Remain, setSell27Remain] = React.useState(250)
    const [sell28Remain, setSell28Remain] = React.useState(250)
    const [sell29Remain, setSell29Remain] = React.useState(250)
    const [sell30Remain, setSell30Remain] = React.useState(250)
    const [sell31Remain, setSell31Remain] = React.useState(55)
    const [sell32Remain, setSell32Remain] = React.useState(55)
    const [sell33Remain, setSell33Remain] = React.useState(55)
    const [sell34Remain, setSell34Remain] = React.useState(55)
    const [sell35Remain, setSell35Remain] = React.useState(55)
    const [sell36Remain, setSell36Remain] = React.useState(55)
    const [canbuy31, setCanBuy31] = React.useState(false)
    const [canbuy32, setCanBuy32] = React.useState(false)
    const [canbuy33, setCanBuy33] = React.useState(false)
    const [isWL6, setIsWL6] = React.useState(false)
    const [roll1Remain, setRoll1Remain] = React.useState(256)
    const [canroll1, setCanRoll1] = React.useState(false)
    const [roll2Remain, setRoll2Remain] = React.useState(256)
    const [roll3Remain, setRoll3Remain] = React.useState(256)
    const [roll4Remain, setRoll4Remain] = React.useState(256)
    const [canroll2, setCanRoll2] = React.useState(false)
    const [roll6Remain, setRoll6Remain] = React.useState(256)
    const [roll7Remain, setRoll7Remain] = React.useState(256)
    const [roll101Remain, setRoll101Remain] = React.useState(200)
    const [ctunaBalance, setCTunaBalance] = React.useState(0)
    const [sx31Balance, setSx31Balance] = React.useState(0)
    const [woodBalance, setWoodBalance] = React.useState(0)
    const [bbqBalance, setBbqBalance] = React.useState(0)
    const [pzaBalance, setPzaBalance] = React.useState(0)
    const [cuBalance, setCuBalance] = React.useState(0)
    const [silBalance, setSilBalance] = React.useState(0)
    const [goldBalance, setGoldBalance] = React.useState(0)
    const [platBalance, setPlatBalance] = React.useState(0)
    const [jaspBalance, setJaspBalance] = React.useState(0)
    const [plutoBalance, setPlutoBalance] = React.useState(0)
    const [fbtcBalance, setFbtcBalance] = React.useState(0)
    const [x4Balance, setX4Balance] = React.useState(0)
    const [infpowBalance, setInfpowBalance] = React.useState(0)
    const [osBalance, setOsBalance] = React.useState(0)
    const [jusdtBalance, setJusdtBalance] = React.useState(0)
    const [cmjBalance, setCmjBalance] = React.useState(0)
    const [jbcBalance, setJbcBalance] = React.useState(0)
    const [wjbcBalance, setWjbcBalance] = React.useState(0)
    const [swarBalance, setSwarBalance] = React.useState(0)
    const [angbBalance, setAngbBalance] = React.useState(0)
    const [jtaoBalance, setJtaoBalance] = React.useState(0)
    const [iiBalance, setIiBalance] = React.useState(0)
    const [eeBalance, setEeBalance] = React.useState(0)
    const [jdaoBalance, setJdaoBalance] = React.useState(0)
    const [gearBalance, setGearBalance] = React.useState(0)
    const [doijibBalance, setDoijibBalance] = React.useState(0)
    const [tokenselected, setTokenselected] = React.useState("DOIJIB");
    const [inputBuy, setInputBuy] = React.useState("")
    const [doijibRemain, setDoijibRemain] = React.useState(0)

    React.useEffect(() => {
        window.scrollTo(0, 0)
        console.log("Connected to " + address)

        const thefetch = async () => {
            const jbcBal = address !== null ?
                await getBalance(config, { address: address, chainId: 8899 }) :
                {formatted: 0}
            const data = address !== null ? await readContracts(config, {
                contracts: [
                    { address: kyc, abi: kycABI, functionName: 'kyc', args: [0, address], chainId: 8899 },
                    { address: cmjToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: jusdtToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: ctunaLab, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: sx31Lab, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: bbqToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: dunCopper, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: dunJasper, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: pzaLab, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: jdaoToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: cmdaoMerchantKYC, abi: cmdaoMerchantKYCABI, functionName: 'bought', args: [address, 1], chainId: 8899 },
                    { address: osToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: cmdaoMerchantKYC, abi: cmdaoMerchantKYCABI, functionName: 'bought', args: [address, 2], chainId: 8899 },
                    { address: goldToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: wjbcToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: swarLab, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: silToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: dunAngb, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: taomeme, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: iiLab, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: dunEE, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: platToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: gearToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'wl', args: [address, 6], chainId: 8899 },
                    { address: doijibToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: woodToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: plutoToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: fbtcToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: x4Token, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                    { address: infpowToken, abi: erc20Abi, functionName: 'balanceOf', args: [address], chainId: 8899 },
                ],
            }) : [
                {result: false}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0},
                {result: true}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0},
                {result: 0}, {result: 0}, {result: 0}, {result: false}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0}, {result: 0},
            ]
            const _isKYC = data[0].result
            const cmjBal = data[1].result
            const jusdtBal = data[2].result
            const ctunaBal = data[3].result
            const sx31Bal = data[4].result
            const bbqBal = data[5].result
            const cuBal = data[6].result
            const jaspBal = data[7].result
            const pzaBal = data[8].result
            const jdaoBal = data[9].result
            const isBought5 = data[10].result
            const osBal = data[11].result
            const isBought2 = data[12].result
            const goldBal = data[13].result
            const wjbcBal = data[14].result
            const swarBal = data[15].result
            const silBal = data[16].result
            const angbBal = data[17].result
            const jtaoBal = data[18].result
            const iiBal = data[19].result
            const eeBal = data[20].result
            const platBal = data[21].result
            const gearBal = data[22].result
            const _isWL6 = data[23].result
            const doijibBal = data[24].result
            const woodBal = data[25].result
            const plutoBal = data[26].result
            const fbtcBal = data[27].result
            const x4Bal = data[28].result
            const infpowBal = data[29].result

            const data2 = await readContracts(config, {
                contracts: [
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [1], chainId: 8899 },
                    { address: cmdaoMerchantKYC, abi: cmdaoMerchantKYCABI, functionName: 'sellList', args: [2], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [3], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [4], chainId: 8899 },
                    { address: cmdaoMerchantKYC, abi: cmdaoMerchantKYCABI, functionName: 'sellList', args: [1], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [5], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [1], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [2], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [3], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [4], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [5], chainId: 8899 },
                    { address: cmdaoMerchantV2, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [2], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [6], chainId: 8899 },
                    { address: cmdaoMerchantV2, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [6], chainId: 8899 },
                    { address: cmdaoMerchantV2, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [3], chainId: 8899 },
                    { address: cmdaoMerchantV2, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [4], chainId: 8899 },
                    { address: cmdaoMerchantV2, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [5], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [8], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [6], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [9], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [1], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [2], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [3], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [10], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [4], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [5], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [6], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [7], chainId: 8899 },
                    { address: cmdaoMerchant, abi: cmdaoMerchantABI, functionName: 'sellList', args: [11], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [8], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [9], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [10], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [11], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [12], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [13], chainId: 8899 },
                    { address: cmdaoMerchantV105, abi: cmdaoMerchantV2ABI, functionName: 'sellList', args: [14], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'sellList', args: [1], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'sellList', args: [2], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'sellList', args: [3], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'sellList', args: [4], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'sellList', args: [5], chainId: 8899 },
                    { address: cmdaoMerchantWL, abi: cmdaoMerchantWLABI, functionName: 'sellList', args: [6], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [7], chainId: 8899 },
                    { address: cmdaoGasha02, abi: cmdaoGasha02ABI, functionName: 'colList', args: [101], chainId: 8899 },
                    { address: cmdaoPresale, abi: presaleABI, functionName: 'sellList', args: [1], chainId: 8899 },
                ],
            })
            const sell1Id = data2[0].result
            const sell2Id = data2[1].result
            const sell4Id = data2[3].result
            const sell5Id = data2[4].result
            const sell6Id = data2[5].result
            const sell7Id = data2[11].result
            const sell8Id = data2[12].result
            const sell9Id = data2[13].result
            // const sell10Id = data2[14].result
            // const sell11Id = data2[15].result
            // const sell12Id = data2[16].result
            const sell13Id = data2[17].result
            // const sell14Id = data2[19].result
            const sell15Id = data2[20].result
            const sell16Id = data2[21].result
            const sell17Id = data2[22].result
            const sell18Id = data2[23].result
            const sell19Id = data2[24].result
            const sell20Id = data2[25].result
            const sell21Id = data2[26].result
            const sell22Id = data2[27].result
            // const sell23Id = data2[28].result
            const sell24Id = data2[29].result
            const sell25Id = data2[30].result
            const sell26Id = data2[31].result
            const sell27Id = data2[32].result
            const sell28Id = data2[33].result
            const sell29Id = data2[34].result
            const sell30Id = data2[35].result
            const sell31Id = data2[36].result
            const sell32Id = data2[37].result
            const sell33Id = data2[38].result
            const sell34Id = data2[39].result
            const sell35Id = data2[40].result
            const sell36Id = data2[41].result
            const roll1 = data2[6].result
            const roll2 = data2[7].result
            const roll3 = data2[8].result
            const roll4 = data2[9].result
            const roll5 = data2[10].result
            const roll6 = data2[18].result
            const roll7 = data2[42].result
            const roll101 = data2[43].result
            const presale01 = data2[44].result
            const sell1remain = (410003800000 - (Number(sell1Id[2]) - 150)) / 100000
            const _canBuy1 = Number(ethers.utils.formatEther(ctunaBal)) >= 2500 ? true : false
            const sell2remain = (720061600000 - (Number(sell2Id[4]) - 250)) / 100000
            const _canBuy2 = _isKYC && !isBought2 && Number(ethers.utils.formatEther(bbqBal)) >= 40000 ? true : false
            const sell4remain = (130050100000 - (Number(sell4Id[2]) - 500)) / 100000
            const _canBuy4 = Number(ethers.utils.formatEther(jusdtBal)) >= 20 ? true : false
            const sell5remain = (100540100000 - (Number(sell5Id[4]) - 100)) / 100000
            const _canBuy5 = _isKYC && !isBought5 && Number(ethers.utils.formatEther(bbqBal)) >= 40000 ? true : false
            const sell6remain = (1000060200000 - (Number(sell6Id[2]) - 100)) / 100000
            const _canBuy6 = Number(ethers.utils.formatEther(jusdtBal)) >= 2 ? true : false
            const sell7remain = 101000399 - Number(sell7Id[3])
            const _canBuy7 = Number(ethers.utils.formatEther(jusdtBal)) >= 10 ? true : false
            const sell8remain = (102033400000 - (Number(sell8Id[2]) - 8000)) / 100000
            const _canBuy8 = Number(ethers.utils.formatEther(jdaoBal)) >= 1000 ? true : false
            const sell9remain = 100001001 - Number(sell9Id[3])
            const _canBuy9 = Number(ethers.utils.formatEther(jusdtBal)) >= 10 ? true : false
            const _canBuy10 = false
            const sell11remain = 0
            const _canBuy11 = false
            const sell12remain = 0
            const _canBuy12 = false
            const sell13remain = (102100000000 - (Number(sell13Id[2]) - 4500)) / 100000
            const _canBuy13 = Number(ethers.utils.formatEther(osBal)) >= 5500 ? true : false
            const sell14remain = 0
            const _canBuy14 = false
            const sell15remain = (100010100000 - (Number(sell15Id[3]) - 100)) / 100000
            const sell16remain = (700010100000 - (Number(sell16Id[3]) - 250)) / 100000
            const sell17remain = (500010100000 - (Number(sell17Id[3]) - 250)) / 100000
            const sell18remain = (730060100000 - (Number(sell18Id[2]) - 10000)) / 100000
            const _canBuy18 = Number(ethers.utils.formatEther(bbqBal)) >= 100000000 ? true : false
            const sell19remain = (300010100000 - (Number(sell19Id[3]) - 250)) / 100000
            const sell20remain = (200010100000 - (Number(sell20Id[3]) - 250)) / 100000
            const sell21remain = (600010100000 - (Number(sell21Id[3]) - 250)) / 100000
            const sell22remain = (400010100000 - (Number(sell22Id[3]) - 250)) / 100000
            const sell23remain = 0
            const _canBuy23 = false
            const sell24remain = (100025100000 - (Number(sell24Id[3]) - 18800)) / 100000
            const sell25remain = (700025100000 - (Number(sell25Id[3]) - 18800)) / 100000
            const sell26remain = (300025100000 - (Number(sell26Id[3]) - 18800)) / 100000
            const sell27remain = (200025100000 - (Number(sell27Id[3]) - 18800)) / 100000
            const sell28remain = (500025100000 - (Number(sell28Id[3]) - 18800)) / 100000
            const sell29remain = (400025100000 - (Number(sell29Id[3]) - 18800)) / 100000
            const sell30remain = (600025100000 - (Number(sell30Id[3]) - 18800)) / 100000
            const sell31remain = (790005600000 - (Number(sell31Id[4]) - 45555)) / 100000
            const sell32remain = (390005600000 - (Number(sell32Id[4]) - 45555)) / 100000
            const sell33remain = (290005600000 - (Number(sell33Id[4]) - 45555)) / 100000
            const sell34remain = (490005600000 - (Number(sell34Id[4]) - 45555)) / 100000
            const sell35remain = (590005600000 - (Number(sell35Id[4]) - 45555)) / 100000
            const sell36remain = (690005600000 - (Number(sell36Id[4]) - 45555)) / 100000
            const _canBuy31 = Number(ethers.utils.formatEther(eeBal)) >= 444444 ? true : false
            const _canBuy32 = Number(ethers.utils.formatEther(iiBal)) >= 22222 ? true : false
            const _canBuy33 = Number(ethers.utils.formatEther(gearBal)) >= 999999999 ? true : false
            const roll1remain = Number(roll1[1])
            const roll2remain = Number(roll2[1])
            const roll3remain = Number(roll3[1])
            const roll4remain = Number(roll4[1])
            const roll5remain = Number(roll5[1])
            const roll6remain = Number(roll6[1])
            const roll7remain = Number(roll7[1])
            const roll101remain = Number(roll101[1])
            const _canRoll1 = Number(ethers.utils.formatEther(jusdtBal)) >= 15 ? true : false
            const _canRoll2 = Number(ethers.utils.formatEther(jusdtBal)) >= 20 ? true : false

            return [
                sell1remain, _canBuy1, sell2remain, _canBuy2, roll7remain, roll101remain, sell4remain, _canBuy4, sell5remain, _canBuy5, sell6remain, 
                _canBuy6, roll1remain, _canRoll1, roll2remain, roll3remain, roll4remain, roll5remain, _canRoll2, sell7remain, _canBuy7, 
                sell8remain, _canBuy8, sell9remain, _canBuy9, jbcBal, _canBuy10, sell11remain, _canBuy11, sell12remain, _canBuy12, 
                sell13remain, _canBuy13, roll6remain, sell14remain, _canBuy14, sell15remain, sell16remain, sell17remain, sell18remain, _canBuy18, 
                sell19remain, sell20remain, sell21remain, sell22remain, sell23remain, _canBuy23, sell24remain, sell25remain, sell26remain, sell27remain, sell28remain, sell29remain, sell30remain,
                ctunaBal, sx31Bal, jusdtBal, cmjBal, bbqBal, pzaBal, cuBal, jaspBal, osBal, goldBal, wjbcBal, swarBal, silBal, jdaoBal, angbBal, jtaoBal, iiBal, eeBal, platBal, gearBal,
                sell31remain, sell32remain, sell33remain, sell34remain, sell35remain, sell36remain, _canBuy31, _canBuy32, _canBuy33, _isWL6, doijibBal, woodBal,
                presale01[3], plutoBal, fbtcBal, x4Bal, infpowBal,
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
            setSell1Remain(result[0])
            setCanBuy1(result[1])
            setSell2Remain(result[2])
            setCanBuy2(result[3])
            setSell4Remain(result[6])
            setCanBuy4(result[7])
            setSell5Remain(result[8])
            setCanBuy5(result[9])
            setSell6Remain(result[10])
            setCanBuy6(result[11])
            setSell7Remain(result[19])
            setCanBuy7(result[20])
            setSell8Remain(result[21])
            setCanBuy8(result[22])
            setSell9Remain(result[23])
            setCanBuy9(result[24])
            setJbcBalance(result[25].formatted)
            setSell13Remain(result[31])
            setCanBuy13(result[32])
            setSell15Remain(result[36])
            setSell16Remain(result[37])
            setSell17Remain(result[38])
            setSell18Remain(result[39])
            setCanBuy18(result[40])
            setSell19Remain(result[41])
            setSell20Remain(result[42])
            setSell21Remain(result[43])
            setSell22Remain(result[44])
            setSell24Remain(result[47])
            setSell25Remain(result[48])
            setSell26Remain(result[49])
            setSell27Remain(result[50])
            setSell28Remain(result[51])
            setSell29Remain(result[52])
            setSell30Remain(result[53])
            setRoll1Remain(result[12])
            setCanRoll1(result[13])
            setRoll2Remain(result[14])
            setRoll3Remain(result[15])
            setRoll4Remain(result[16])
            setCanRoll2(result[18])
            setRoll6Remain(result[33])
            setRoll7Remain(result[4])
            setRoll101Remain(result[5])
            setCTunaBalance(ethers.utils.formatEther(result[54]))
            setSx31Balance(ethers.utils.formatEther(result[55]))
            setJusdtBalance(ethers.utils.formatEther(result[56]))
            setCmjBalance(ethers.utils.formatEther(result[57]))
            setBbqBalance(ethers.utils.formatEther(result[58]))
            setPzaBalance(ethers.utils.formatEther(result[59]))
            setCuBalance(ethers.utils.formatEther(result[60]))
            setJaspBalance(ethers.utils.formatUnits(result[61] , "gwei"))
            setOsBalance(ethers.utils.formatEther(result[62]))
            setGoldBalance(ethers.utils.formatEther(result[63]))
            setWjbcBalance(ethers.utils.formatEther(result[64]))
            setSwarBalance(ethers.utils.formatEther(result[65]))
            setSilBalance(ethers.utils.formatEther(result[66]))
            setJdaoBalance(ethers.utils.formatEther(result[67]))
            setAngbBalance(ethers.utils.formatEther(result[68]))
            setJtaoBalance(ethers.utils.formatEther(result[69]))
            setIiBalance(ethers.utils.formatEther(result[70]))
            setEeBalance(ethers.utils.formatEther(result[71]))
            setPlatBalance(ethers.utils.formatEther(result[72]))
            setGearBalance(ethers.utils.formatEther(result[73]))
            setDoijibBalance(ethers.utils.formatEther(result[84]))
            setWoodBalance(ethers.utils.formatEther(result[85]))
            setSell31Remain(result[74])
            setSell32Remain(result[75])
            setSell33Remain(result[76])
            setSell34Remain(result[77])
            setSell35Remain(result[78])
            setSell36Remain(result[79])
            setCanBuy31(result[80])
            setCanBuy32(result[81])
            setCanBuy33(result[82])
            setIsWL6(result[83])
            setDoijibRemain(ethers.utils.formatEther(String(result[86])))
            setPlutoBalance(ethers.utils.formatUnits(result[87], "gwei"))
            setFbtcBalance(result[88])
            setX4Balance(ethers.utils.formatEther(String(result[89])))
            setInfpowBalance(ethers.utils.formatEther(String(result[90])))
        })
    }, [config, address, txupdate, kycABI, ctunaLabABI, cmdaoMerchantABI, cmdaoMerchantV2ABI, cmdaoMerchantKYCABI, cmdaoMerchantWLABI, cmdaoGasha02ABI, erc20Abi, presaleABI])

    const buyHandle = async () => {
        setisLoading(true)
        try {
            const ctunaAllow = await readContract(config, {
                address: ctunaLab,
                abi: ctunaLabABI,
                functionName: 'allowance',
                args: [address, cmdaoMerchant],
            })
            if (Number(ethers.utils.formatEther(ctunaAllow)) < 2500) {
                let { request } = await simulateContract(config, {
                    address: ctunaLab,
                    abi: ctunaLabABI,
                    functionName: 'approve',
                    args: [cmdaoMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [1]
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

    const buyHandle2 = async () => {
        setisLoading(true)
        try {
            const bbqAllow = await readContract(config, {
                address: bbqToken,
                abi: ctunaLabABI,
                functionName: 'allowance',
                args: [address, cmdaoMerchantKYC],
            })
            if (Number(ethers.utils.formatEther(bbqAllow)) < 40000) {
                let { request } = await simulateContract(config, {
                    address: bbqToken,
                    abi: ctunaLabABI,
                    functionName: 'approve',
                    args: [cmdaoMerchantKYC, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantKYC,
                abi: cmdaoMerchantKYCABI,
                functionName: 'buy',
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

    const buyHandle3 = async (_index) => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: ctunaLabABI,
                functionName: 'allowance',
                args: [address, cmdaoMerchant],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 20) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: ctunaLabABI,
                    functionName: 'approve',
                    args: [cmdaoMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [_index]
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

    const buyHandle4 = async (_index) => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: ctunaLabABI,
                functionName: 'allowance',
                args: [address, cmdaoMerchantV2],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: ctunaLabABI,
                    functionName: 'approve',
                    args: [cmdaoMerchantV2, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantV2,
                abi: cmdaoMerchantV2ABI,
                functionName: 'buy',
                args: [_index]
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

    const buyHandle5 = async () => {
        setisLoading(true)
        try {
            const bbqAllow = await readContract(config, {
                address: bbqToken,
                abi: ctunaLabABI,
                functionName: 'allowance',
                args: [address, cmdaoMerchantKYC],
            })
            if (Number(ethers.utils.formatEther(bbqAllow)) < 40000) {
                let { request } = await simulateContract(config, {
                    address: bbqToken,
                    abi: ctunaLabABI,
                    functionName: 'approve',
                    args: [cmdaoMerchantKYC, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantKYC,
                abi: cmdaoMerchantKYCABI,
                functionName: 'buy',
                args: [1]
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

    const buyHandle6 = async () => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchant],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 2) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [5]
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

    const buyHandle8 = async () => {
        setisLoading(true)
        try {
            const jdaoAllow = await readContract(config, {
                address: jdaoToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchant],
            })
            if (Number(ethers.utils.formatEther(jdaoAllow)) < 1000) {
                let { request } = await simulateContract(config, {
                    address: jdaoToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [6]
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

    const buyHandle9 = async (_index) => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchantV2],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 10) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchantV2, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantV2,
                abi: cmdaoMerchantV2ABI,
                functionName: 'buy',
                args: [_index]
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

    const buyHandle13 = async () => {
        setisLoading(true)
        try {
            const osAllow = await readContract(config, {
                address: osToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchant],
            })
            if (Number(ethers.utils.formatEther(osAllow)) < 5500) {
                let { request } = await simulateContract(config, {
                    address: osToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [8]
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

    const buyHandle15 = async (_index) => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchantV105],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 20) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchantV105, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantV105,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [_index]
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

    const buyHandle18 = async () => {
        setisLoading(true)
        try {
            const bbqAllow = await readContract(config, {
                address: bbqToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchant],
            })
            if (Number(ethers.utils.formatEther(bbqAllow)) < 100000000) {
                let { request } = await simulateContract(config, {
                    address: bbqToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchant, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchant,
                abi: cmdaoMerchantABI,
                functionName: 'buy',
                args: [10]
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

    const buyHandle31 = async (_index) => {
        setisLoading(true)
        try {
            const tokenAllow = await readContract(config, {
                address: dunEE,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchantWL],
            })
            if (Number(ethers.utils.formatEther(tokenAllow)) < 444444) {
                let { request } = await simulateContract(config, {
                    address: dunEE,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchantWL, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantWL,
                abi: cmdaoMerchantWLABI,
                functionName: 'buy',
                args: [_index]
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

    const buyHandle32 = async (_index) => {
        setisLoading(true)
        try {
            const tokenAllow = await readContract(config, {
                address: iiLab,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchantWL],
            })
            if (Number(ethers.utils.formatEther(tokenAllow)) < 22222) {
                let { request } = await simulateContract(config, {
                    address: iiLab,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchantWL, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantWL,
                abi: cmdaoMerchantWLABI,
                functionName: 'buy',
                args: [_index]
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

    const buyHandle33 = async (_index) => {
        setisLoading(true)
        try {
            const tokenAllow = await readContract(config, {
                address: gearToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoMerchantWL],
            })
            if (Number(ethers.utils.formatEther(tokenAllow)) < 999999999) {
                let { request } = await simulateContract(config, {
                    address: gearToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoMerchantWL, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoMerchantWL,
                abi: cmdaoMerchantWLABI,
                functionName: 'buy',
                args: [_index]
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

    const rollHandle2 = async (_colIndex) => {
        setisLoading(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoGasha02],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 15) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoGasha02, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoGasha02,
                abi: cmdaoGasha02ABI,
                functionName: 'roll',
                args: [_colIndex]
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

    const rollHandle3 = async (_colIndex) => {
        setisLoading(true)
        setIsSpecialModal(true)
        try {
            const jusdtAllow = await readContract(config, {
                address: jusdtToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoGasha02],
            })
            if (Number(ethers.utils.formatEther(jusdtAllow)) < 20) {
                let { request } = await simulateContract(config, {
                    address: jusdtToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoGasha02, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoGasha02,
                abi: cmdaoGasha02ABI,
                functionName: 'roll',
                args: [_colIndex]
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

    const buyPresaleHandle = async (_sellIndex) => {
        setisLoading(true)
        try {
            const tokenAllow = await readContract(config, {
                address: wjbcToken,
                abi: erc20Abi,
                functionName: 'allowance',
                args: [address, cmdaoPresale],
            })
            if (Number(ethers.utils.formatEther(tokenAllow)) < Number(inputBuy)) {
                let { request } = await simulateContract(config, {
                    address: wjbcToken,
                    abi: erc20Abi,
                    functionName: 'approve',
                    args: [cmdaoPresale, ethers.constants.MaxUint256],
                })
                let h = await writeContract(config, request)
                await waitForTransactionReceipt(config, { hash: h })
            }
            let { request } = await simulateContract(config, {
                address: cmdaoPresale,
                abi: presaleABI,
                functionName: 'buy',
                args: [_sellIndex, ethers.utils.parseEther(inputBuy)]
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

    const sendHandle = async () => {
        setisLoading(true)
        try {
            let h = await sendTransaction(config, {
                to: wjbcToken,
                value: wrappedValue !== "" ? ethers.utils.parseEther(wrappedValue) : undefined,
            })
            await waitForTransactionReceipt(config, { hash: h })
            setTxupdate(h)
        } catch (e) {
            setisError(true)
            setErrMsg(String(e))
        }
        setisLoading(false)
    }

    const unwrapHandle = async () => {
        setisLoading(true)
        try {
            let { request } = await simulateContract(config, {
                address: wjbcToken,
                abi: wjbcABI,
                functionName: 'withdraw',
                args: [ethers.utils.parseEther(unwrappedValue)]
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
            {isWrappedModal &&
                <div style={{zIndex: "999"}} className="centermodal">
                    <div className="wrapper">
                        <div className="bold" style={{width: "500px", height: "250px", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", fontSize: "40px", letterSpacing: "1px"}}>
                            <div style={{width: "80%", fontSize: "12px", textAlign: "left"}}>
                                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                                    <div style={{height: "30px", padding: "0 5px", lineHeight: "32px"}} className="bold">WRAPPED</div>
                                    <div style={{width: "fit-content", height: "30px", margin: 0, border: "none", fontSize: "12px"}} className="items bold">
                                        <img src="https://gateway.pinata.cloud/ipfs/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq" width="20" alt="$WJBC"/>
                                    </div>
                                </div>
                                <div style={{margin: "10px 0", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                                    <input style={{width: "300px", padding: "10px"}} className="bold" type="number" min="0" step="0.1" placeholder="Enter $JBC to Wrap" value={wrappedValue} onChange={(event) => setWrappedValue(event.target.value)}></input>
                                    <div className="button" style={{width: "80px", marginLeft: "10px"}} onClick={sendHandle}>WRAP</div>
                                </div>
                                <div style={{margin: "10px 0", cursor: "pointer"}} onClick={() => setWrappedValue(jbcBalance)}>Balance: {Number(jbcBalance).toFixed(4)}</div>
                                <div style={{margin: "10px 0", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                                    <input style={{width: "300px", padding: "10px"}} className="bold" type="number" min="0" step="0.1" placeholder="Enter $WJBC to Unwrap" value={unwrappedValue} onChange={(event) => setUnwrappedValue(event.target.value)}></input>
                                    <div className="button" style={{width: "100px", marginLeft: "10px"}} onClick={unwrapHandle}>UNWRAP</div>
                                </div>
                                <div style={{margin: "10px 0 20px 0", cursor: "pointer"}} onClick={() => setUnwrappedValue(wjbcBalance)}>Balance: {Number(wjbcBalance).toFixed(4)}</div>
                            </div>
                            <div className="button" style={{width: "50%", background: "gray"}} onClick={() => setIsWrappedModal(false)}>CLOSE</div>
                        </div>
                    </div>
                </div>
            }
            {isSpecialModal &&
                <div style={{zIndex: "1000"}} className="centermodal">
                    <div className="wrapper">
                        <div className="bold" style={{width: "500px", height: "700px", padding: "50px", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", fontSize: "40px", letterSpacing: "3px"}}>
                            <video autoPlay loop width="400">
                                <source src="https://gateway.pinata.cloud/ipfs/bafybeiawnfpq4e6nxowydbmchi3kx6aq3d7wj76yx35dvz7hbbd3ij67pa" type="video/mp4" />
                            </video>
                            <div className="button" style={{width: "50%", background: "gray"}} onClick={() => setIsSpecialModal(false)}>CLOSE</div>
                        </div>
                    </div>
                </div>
            }
            <div className="fieldBanner" style={{display: "flex", flexFlow: "row wrap", alignItems: "center", justifyContent: "space-between", textAlign: "left", overflow: "scroll"}}>
                <div className="SubfieldBanner" style={{flexDirection: "column"}}>
                    <div style={{fontSize: "75px", width: "fit-content"}} className="pixel">Mall</div>
                    <div style={{fontSize: "17px", width: "fit-content", marginTop: "30px", letterSpacing: "1px"}} className="pixel">Automated Buy & Sell</div>
                </div>
                <div className="SubfieldBanner">
                    <img src="./background/malllogo.png" width="150" alt="Mall_Logo" />
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
                <div className="collection">
                    <div style={{textAlign: "left", height: "fit-content", width: "90%", display: "flex", flexDirection: "column", justifyContent: "flex-start"}} className="pixel">
                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Cryptocurrency</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq"
                                    width="20"
                                    alt="$WJBC"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: wjbcToken,
                                                    symbol: 'WJBC',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}><div style={{width: "80px", textAlign: "center", fontSize: "16px", padding: "1px", background: "rgba(102, 204, 172, 0.2)", color: "rgb(102, 204, 172)", borderRadius: "8px", boxShadow: "inset 1px 1px 0 0 hsla(0,0%,100%,.65)"}} className="button pixel" onClick={() => setIsWrappedModal(true)}>WRAPPED</div> {Number(wjbcBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u"
                                    width="20"
                                    alt="$CMJ"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: cmjToken,
                                                    symbol: 'CMJ',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreiabbtn5pc6di4nwfgpqkk3ss6njgzkt2evilc5i2r754pgiru5x4u',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(cmjBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi"
                                    width="20"
                                    alt="$JUSDT"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: jusdtToken,
                                                    symbol: 'JUSDT',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(jusdtBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img 
                                    src="https://gateway.pinata.cloud/ipfs/bafkreifydb6vy2dysudcg6x64p42enym3bhfneal62ctf33oapsmk6qjlm"
                                    width="20"
                                    alt="$JTAO"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: taomeme,
                                                    symbol: 'JTAO',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreifydb6vy2dysudcg6x64p42enym3bhfneal62ctf33oapsmk6qjlm',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(jtaoBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px", marginTop: "20px"}} className="bold">CommuDAO Tokens</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4"
                                    width="20"
                                    alt="$WOOD"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: woodToken,
                                                    symbol: 'WOOD',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreidldk7skx44xwstwat2evjyp4u5oy5nmamnrhurqtjapnwqzwccd4',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(woodBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq"
                                    width="20"
                                    alt="$BBQ"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: bbqToken,
                                                    symbol: 'BBQ',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(bbqBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu"
                                    width="20"
                                    alt="$PZA"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: pzaLab,
                                                    symbol: 'PZA',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreifq5hc6oprfye7ha3q5lhly545rx6c4idua7v6mrpz5nqxcrefluu',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(pzaBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq"
                                    width="20"
                                    alt="$CU"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunCopper,
                                                    symbol: 'CU',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreidau3s66zmqwtyp2oimumulxeuw7qm6apcornbvxbqmafvq3nstiq',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(cuBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde"
                                    width="20"
                                    alt="$SIL"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: silToken,
                                                    symbol: 'SIL',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreigld4xmmrmu763t2vsju3tqhcodgxxsrmgvrlfhdjktgujgcmpmde',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(silBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm"
                                    width="20"
                                    alt="$GOLD"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: goldToken,
                                                    symbol: 'GOLD',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreia4zjqhbo4sbvbkvlgnit6yhhjmvo7ny4ybobuee74vqlmziskosm',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(goldBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa"
                                    width="20"
                                    alt="$PLAT"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: platToken,
                                                    symbol: 'PLAT',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreibf7vowyqjrcaeyslflrxxchel3b4qdpwxcxb34js2otg35vjkcaa',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(platBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy"
                                    width="20"
                                    alt="$JASP"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunJasper,
                                                    symbol: 'JASP',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreidfl4mgyczqwl3gtunpherc5ri3qbfzm2vevdwcojmhpz3viubopy',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(jaspBalance).toLocaleString('en-US', {maximumFractionDigits:2})} GWEI</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/QmSd6B1WnUtzVqJPmEXqFSEudrdqCAE3LPkU64tttYeFPw"
                                    width="20"
                                    alt="$PLUTO"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: platToken,
                                                    symbol: 'PLUTO',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/QmSd6B1WnUtzVqJPmEXqFSEudrdqCAE3LPkU64tttYeFPw',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(plutoBalance).toLocaleString('en-US', {maximumFractionDigits:2})} GWEI</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/QmPieCpfHoce19DSB5Mv5GZmZeGHAUerJfgjX6NhgLYUVC"
                                    width="20"
                                    alt="$F.BTC"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: fbtcToken,
                                                    symbol: 'F.BTC',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/QmPieCpfHoce19DSB5Mv5GZmZeGHAUerJfgjX6NhgLYUVC',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(fbtcBalance).toLocaleString('en-US', {maximumFractionDigits:2})} SAT</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/Qma5JyeNz8ME6H1XFxJCF4HmduDSC8mqLqmUs3SaMJbwzh"
                                    width="20"
                                    alt="$X4"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: x4Token,
                                                    symbol: 'X4',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/Qma5JyeNz8ME6H1XFxJCF4HmduDSC8mqLqmUs3SaMJbwzh',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(x4Balance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/QmbEWVgF3ZRvmDEF3RLKf7XDFr4SE5q4VEWR7taCqNnbU6"
                                    width="20"
                                    alt="$INF.POW"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: infpowToken,
                                                    symbol: 'INF-POW-JBC',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/QmbEWVgF3ZRvmDEF3RLKf7XDFr4SE5q4VEWR7taCqNnbU6',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(infpowBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                        </div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0 10px 20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreico3y6ql5vudm35ttestwvffdacbp25h6t5ipbyncwr3qtzprrm5e"
                                    width="20"
                                    alt="$OS"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: osToken,
                                                    symbol: 'OS',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreico3y6ql5vudm35ttestwvffdacbp25h6t5ipbyncwr3qtzprrm5e',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(osBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", textIndent: "20px", fontSize: "15px", letterSpacing: "1px", marginTop: "20px"}} className="bold">Partner Tokens</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i"
                                    width="20"
                                    alt="$CTUNA"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: ctunaLab,
                                                    symbol: 'CTUNA',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(ctunaBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4"
                                    width="20"
                                    alt="$SX31"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: sx31Lab,
                                                    symbol: 'SX31',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreicldm4vbw2ywy7dyrsjbwd5mk6hno3pxpwggdvxjlocbneg5webx4',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(sx31Balance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreib4zlmwnydgolgzkfldaz2zsxh6pg3k4wemiigura7gbnj7i36ygi?img-width=50&img-height=50"
                                    width="20"
                                    alt="$SWAR"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: swarLab,
                                                    symbol: 'SWAR',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreib4zlmwnydgolgzkfldaz2zsxh6pg3k4wemiigura7gbnj7i36ygi',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(swarBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m?img-width=50&img-height=50"
                                    width="20"
                                    alt="$ANGB"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunAngb,
                                                    symbol: 'ANGB',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafkreiev2kbirflwhlqbwd6zh6trd7gx62tijviekwewd6zaogm4vzrh7m',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(angbBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q?img-width=50&img-height=50"
                                    width="20"
                                    alt="$II"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: iiLab,
                                                    symbol: 'TDM - II',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(iiBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "20px 10px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm?img-width=50&img-height=50"
                                    width="20"
                                    alt="$EE"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: dunEE,
                                                    symbol: 'TDM-EE',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(eeBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0px 10px 20px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4?img-width=50&img-height=50"
                                    width="20"
                                    alt="$GEAR"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: gearToken,
                                                    symbol: 'GEAR',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(gearBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                            </div>

                            <div style={{width: "200px", minWidth: "200px", height: "55px", margin: "0px 10px 20px", fontSize: "15px", border: "1px solid #dddade", boxShadow: "3px 3px 0 #dddade"}} className="items">
                                <img
                                    src="https://gateway.pinata.cloud/ipfs/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi?img-width=50&img-height=50"
                                    width="20"
                                    alt="$DOIJIB"
                                    style={{cursor: "crosshair"}}
                                    onClick={async () => {
                                        await ethereum.request({
                                            method: 'wallet_watchAsset',
                                            params: {
                                                type: 'ERC20',
                                                options: {
                                                    address: doijibToken,
                                                    symbol: 'DOIJIB',
                                                    decimals: 18,
                                                    image: 'https://gateway.pinata.cloud/ipfs/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi',
                                                },
                                            },
                                        })
                                    }}
                                />
                                <div style={{marginLeft: "5px"}}>{Number(doijibBalance).toLocaleString('en-US', {maximumFractionDigits:0})}</div>
                            </div>
                        </div>

                        <div style={{width: "97.5%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                        <div style={{width: "100%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Automated Market Maker NPC</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <Ammmerchant config={config} setisLoading={setisLoading} setTxupdate={setTxupdate} setisError={setisError} setErrMsg={setErrMsg} cmdaoAmmNpcABI={cmdaoAmmNpcABI} erc20Abi={erc20Abi} ctunaBalance={ctunaBalance} sx31Balance={sx31Balance} bbqBalance={bbqBalance} pzaBalance={pzaBalance} woodBalance={woodBalance} cmjBalance={cmjBalance} />
                            <Ammmerchant2 config={config} setisLoading={setisLoading} setTxupdate={setTxupdate} setisError={setisError} setErrMsg={setErrMsg} cmdaoAmmNpcABI={cmdaoAmmNpcABI} erc20Abi={erc20Abi} jdaoBalance={jdaoBalance} cuBalance={cuBalance} silBalance={silBalance} goldBalance={goldBalance} jaspBalance={jaspBalance} osBalance={osBalance} platBalance={platBalance} plutoBalance={plutoBalance} fbtcBalance={fbtcBalance} x4Balance={x4Balance} infpowBalance={infpowBalance} cmjBalance={cmjBalance} />
                            <Ammmerchant3 config={config} setisLoading={setisLoading} setTxupdate={setTxupdate} setisError={setisError} setErrMsg={setErrMsg} cmdaoAmmNpcABI={cmdaoAmmNpcABI} ammyStdABI={ammyStdABI} erc20Abi={erc20Abi} doijibBalance={doijibBalance} wjbcBalance={wjbcBalance} woodBalance={woodBalance} />
                        </div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <Ammmerchant4 config={config} setisLoading={setisLoading} setTxupdate={setTxupdate} setisError={setisError} setErrMsg={setErrMsg} angeloStdABI={angeloStdABI} cmdaoAmmNpcABI={cmdaoAmmNpcABI} erc20Abi={erc20Abi} angbBalance={angbBalance} swarBalance={swarBalance} wjbcBalance={wjbcBalance} />
                            <Ammmerchant5 config={config} setisLoading={setisLoading} setTxupdate={setTxupdate} setisError={setisError} setErrMsg={setErrMsg} cmdaoAmmNpcABI={cmdaoAmmNpcABI} erc20Abi={erc20Abi} iiBalance={iiBalance} eeBalance={eeBalance} wjbcBalance={wjbcBalance} />
                        </div>

                        <div style={{width: "97.5%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                        <div style={{width: "100%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Another NPC</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{alignItems: "center", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{marginTop: "10px", width: "100%", maxHeight: "350px", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between"}}>
                                    <div style={{height: "160px", width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                                        <img src="https://gateway.pinata.cloud/ipfs/QmRW1q89QaD29zvC8h5bg4yZBcmsqj4aG8FPAe1RddvM6Y?img-width=400&img-height=400" width="230" alt="NPC_Gamy" />
                                    </div>
                                    <div style={{maxHeight: "110px"}}>
                                        <div style={{fontSize: "20px", width: "380px"}} className="pixel">GAMY, THE PRESALE AGENT</div>
                                        <div style={{fontSize: "10px", marginTop: "5px"}} className="light">"BRo, i seLL ${tokenselected}, giVE mE MONeY bRo!</div>
                                        <div style={{fontSize: "10px"}} className="light">Presale Round 1: 2B / 100B, (2% of max supply); Pls DYOR."</div>
                                        <div style={{marginTop: "5px", width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                                            <div style={{width: "70%", display: "flex", flexDirection: "row"}}>
                                                <select style={{padding: "1px", border: "none", borderRadius: "8px", fontSize: "16px"}} className="pixel" value={tokenselected} onChange={(event) => {setTokenselected(event.target.value)}}>
                                                    <option value="DOIJIB">DOIJIB</option>
                                                </select>
                                                <div style={{fontSize: "16px", marginLeft: "5px", display: "flex", alignItems: "center", letterSpacing: "1px"}} className="pixel">
                                                    &nbsp;
                                                    {tokenselected === "DOIJIB" && <>10,000.00&nbsp;<img src="https://gateway.pinata.cloud/ipfs/bafybeicfkse4uvkhhkrhfwtap4h3v5msef6lg3t3xvb2hspw3xd5wegzfi" width="22" alt="$DOIJIB"/> &nbsp;=&nbsp; <div className="emp">1</div></>}
                                                    &nbsp;<img src="https://gateway.pinata.cloud/ipfs/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq" width="22" alt="$WJBC"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{margin: "10px 0", fontSize: "10px"}} className="bold">Presale Round 1 Remaining: <span className='emp'>{Number(doijibRemain).toLocaleString('en-US', {maximumFractionDigits:4})}</span> / 2,000,000,000</div>
                                        <div style={{margin: "10px 0", fontSize: "10px"}} className="bold">Round 1 End: <span className='emp'>10PM, 30/06</span></div>
                                    </div>
                                    <div style={{width: "100%", borderBottom: "1px solid #dddade", margin: "15px 0 10px 0"}}></div>
                                    <div style={{width: "98%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                        <input
                                            style={{width: "55%", padding: "5px 10px", border: "1px solid #dddade", fontSize: "18px"}}
                                            className="bold"
                                            type="number"
                                            step="1"
                                            min="1"
                                            placeholder={"0 $WJBC"}
                                            onChange={(event) => {
                                                setInputBuy(event.target.value)
                                            }}
                                            value={inputBuy}
                                        ></input>
                                        {tokenselected === "DOIJIB" && 
                                            <div style={{width: "30%", display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer"}} onClick={() => setInputBuy(wjbcBalance)}>
                                                <img src="https://gateway.pinata.cloud/ipfs/bafkreih6o2px5oqockhsuer7wktcvoky36gpdhv7qjwn76enblpce6uokq" width="22" alt="$WJBC"/>
                                                <div style={{marginLeft: "5px"}}>{Number(wjbcBalance).toLocaleString('en-US', {maximumFractionDigits:2})}</div>
                                            </div>
                                        }
                                    </div>
                                    <div style={{width: "98%", maxHeight: "47px", marginTop: "5px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                                        {Number(doijibRemain) > 0 && address !== null ?
                                            <div style={{width: "30px"}} className="pixel button" onClick={
                                                () => {
                                                    if (tokenselected === "DOIJIB") {
                                                        buyPresaleHandle(1)
                                                    }
                                                }
                                            }>BUY</div> :
                                            <div style={{width: "190px", fontSize: "14px", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">SOLD OUT</div>
                                        }
                                        <div style={{textAlign: "left", marginLeft: "20px", fontSize: "16px", color: "rgb(126, 128, 145)"}} className="pixel">Will get 
                                            <div className="emp">
                                                {tokenselected === "DOIJIB" && Number(inputBuy * 10000).toLocaleString('en-US', {maximumFractionDigits:3})}
                                            </div>
                                            ${tokenselected}
                                        </div>
                                    </div>
                                    <div style={{width: "100%", borderBottom: "1px solid #dddade", margin: "10px 0"}}></div>
                                </div>
                            </div>
                        </div>

                        <div style={{width: "97.5%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                        <div style={{width: "100%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">CommmuDAO NFTs Premium Store</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Songkran Splasher</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreifz2fgy43d4qigdwp35r3izgyvwip2rugswdvkkcj4xl5cytxs5ti?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", height: "200px", fontSize: "15px", marginTop: "10px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll1Remain}</div>
                                            <div>/256 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>N : 250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R : 550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR : 1050 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR : 2550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>15</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll1Remain > 0 ?
                                            <>
                                                {canroll1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle2(1)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Golden Dragon Armor </div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreibgzv6zcq4yuj2n44dw6o7ydwllepwry5nulqzdx4s2c7poabxwxa?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", height: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll2Remain}</div>
                                            <div>/256 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>N : 250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R : 550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR : 1050 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR : 2550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>15</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll2Remain > 0 ?
                                            <>
                                                {canroll1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle2(2)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>   

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Adventure's Muffler</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreigeuohgaw2jvgromogakix34kit2ab6pclreddmbzubp22nkqmpma?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", height: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll3Remain}</div>
                                            <div>/256 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>N : 250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R : 550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR : 1050 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR : 2550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>15</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll3Remain > 0 ?
                                            <>
                                                {canroll1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle2(3)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>                 
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Golden Dragon Boots</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreif4fk7tqca2vdovvtwufxyx2snoolbwofvdvjoqi35y6mvaahhkve?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", height: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll4Remain}</div>
                                            <div>/256 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>N : 250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R : 550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR : 1050 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR : 2550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>15</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll4Remain > 0 ?
                                            <>
                                                {canroll1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle2(4)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Golden Dragon Accessory</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreiem7ixjm7xomcrhfkla73ye7ajah6d7xi7hw6a6seozclccaewipy?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", height: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll6Remain}</div>
                                            <div>/256 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>N : 250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R : 550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR : 1050 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR : 2550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>15</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll6Remain > 0 ?
                                            <>
                                                {canroll1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle2(6)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Guardian's Helm</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreigr33les3na44zns7nznxltedxluhor5klfsduzolpwinqzsrcc6q?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", height: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll7Remain}</div>
                                            <div>/256 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>N : 250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R : 550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR : 1050 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR : 2550 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>15</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll7Remain > 0 ?
                                            <>
                                                {canroll1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle2(7)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <div className='light' style={{marginLeft: "10px"}}>CMDAO-LABS SUPPORT</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">SAPIENS #04</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreia4kwbvcyynfxu77fpguwoogfqqe45kktalxylnad4wivnhqjtt2m?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className="emp">{sell4Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>500 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="$JUSDT"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell4Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle3(4)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <div className='light' style={{marginLeft: "10px"}}>CMDAO-LABS SUPPORT</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Chō-Senjiryakketsu Vol.3</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreifgwtom3va2wm4wdur4eupbnoxjfvxr3765ebkpisron73ydmq3sa?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className="emp">{sell6Remain}</div>
                                            /300 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>100 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontSize: "14px", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="$JUSDT"/>
                                            <div style={{marginLeft: "7.5px"}}>2</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell6Remain > 0 ?
                                            <>
                                                {canbuy6 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle6}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>               
                        </div>

                        <div style={{width: "97.5%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                        <div style={{width: "100%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Ecosystem NFTs Premium Store</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Angel Plus - Adventurer Card D +0 Vol.4</div>
                                <video muted loop width="175" style={{alignSelf: "flex-start", marginTop: "20px"}}>
                                    <source src="https://gateway.pinata.cloud/ipfs/bafybeia2c5qcwshxdqw6gvvezehsnn5r7u5d2oxkduwzydbzxxu3hfzzze" type="video/mp4" />
                                </video>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell7Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>Staking in Fields: Eastern Front</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell7Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle4(2)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>    

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Hero (Character)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeiafeumwvilddqiakxaabht5bcu2khkeyjr275jtbwyryd6upbh6bm?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell15Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>100 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell15Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(1)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Claymore (Sword)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreigcv7pn4azsrjkzccyeyq6nkg6sntwnh3czrfth6ubwudo6imuhyu" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell16Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell16Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(2)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Shield (Shield)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreihdt2twkixgg27erb5rlawm37v4owvq2j5pq2753tmf55hhgjr7ia" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell17Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell17Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(3)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Full Plate (Armor)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreiehp5d2ccxovqmb7qtriafsnku7xlifr345zlsrmane3fvwoskhle" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell19Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell19Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(4)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Helm (Helmet)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreiepodq6oo7xlme6tjnjus3cberubwu4sfgdvbnou7tdtbrj4hzm2q" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell20Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell20Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(5)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div> 
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Crusader Boots (Boots)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreialnqwhhuikji7fov3tc73dv6qqb74okxkiihuogk3dekzotg3vni" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell21Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell21Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(6)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Imperium Ring (Ring)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreiagnfkgkzdazovsfu33d2v22eyotizgy4zg66okkmwwt7unswungi" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell22Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell22Remain > 0 ?
                                            <>
                                                {canbuy7 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(7)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -20, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeibha4mwuymx4o5mp4n3hou3fryvka4wul53sawa4xtqvkrn32i7g4?img-width=50&img-height=50" width="30px" alt="AngelPlus" />
                                    <div className='light' style={{marginLeft: "10px"}}>Angel Plus</div>
                                </div>
                                <div style={{position: "absolute", top: 40, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">Gashapon</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">Spirit of Rina (Fairy)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeien4iziizhs2xkaxsruphh5um7zvkuons2nj2bo775kckok2vyhey?img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", height: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{roll101Remain}</div>
                                            <div>/200 EA</div>
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>R (HERO) : 2000 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SR (ANGEL) : 4000 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div style={{display: "flex", flexDirection: "row"}}>SSR (Daemon Prince) : 8000 Power</div>
                                    </div>
                                    <div style={{marginTop: "25px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {roll101Remain > 0 ?
                                            <>
                                                {canroll2 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => rollHandle3(101)}>ROLL</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel buttn">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - Naruta (Main Char)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeih6lcghzq7kygz2uxpksueczcj36xptexylmyum5zwwx265h2222u?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell24Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell24Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(8)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - TD-88 Blaster (Weapon)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeiglw3a5wuszv7zkmfw55e2bcaoxinsjwjinckccg4lxg2juoeegmu?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell25Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell25Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(9)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - X8 Haptic Bootsuit (Cloth)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeih5zbbv5tjdug5qbnzbmusaqwgy3z4ecs3uii7t6g7q7ynhnr3d5q?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell26Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell26Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(10)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - Cosmo Crest (Hat)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeia3bm6ju5fhokrjnovbgbm3mw422jwxa72bnoo4ihgf2upsfrbmlm?img-width=400&img-height=400" height="150" alt='Can not load metadata.'/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell27Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell27Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(11)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - Prism Propel Wings (Back)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeicfyxqmdjjz3xispk7vil22asr4wnzffxbuh47dy42qofy4zxnfb4?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell28Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell28Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(12)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - Phoenix Phalanx Ring (Accessory)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeifmkrjl457rtfkve2ktn3ynx4yev5oqygpsvppeo4csm26fqormha?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell29Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell29Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(13)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">NARUTA NFT - Galactic Walkers (Shoes)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafybeicmgffdl5eb4op32ck2vvri5f4ruxzxk6nkmu6eqcxabu27glmvmu?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell30Remain}</div>
                                            /250 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>18800 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="jusdt"/>
                                            <div style={{marginLeft: "7.5px"}}>20</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell30Remain > 0 ?
                                            <>
                                                {canbuy4 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle15(14)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <div style={{width: "30px", height: "30px"}}></div>
                                    <div className='light' style={{marginLeft: "10px"}}>DOIJIB</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}} className="pixel">DOIJIB NFT - BB</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmZPNdmmD86o1VmQK4tpW952FH53LZbyngYrziCW4vwYXb?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell9Remain}</div>
                                            /1000 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>5000 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreif3vllg6mwswlqypqgtsh7i7wwap7zgrkvtlhdjoc63zjm7uv6vvi" height="18" alt="$JUSDT"/>
                                            <div style={{marginLeft: "7.5px"}}>10</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell9Remain > 0 ?
                                            <>
                                                {canbuy9 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle9(6)}>BUY</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>
                        
                        <div style={{width: "97.5%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                        <div style={{width: "100%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">CommuDAO NFTs Redemption Store</div>
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">KYC Shop</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}}className="pixel">Multiverse Traveller Vol.4</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreigc4ivgjqocp7dh7bh3upl4tidhpe2w76muckmzyvulevbkoxdnce" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell5Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>100 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="18" alt="$BBQ"/>
                                            <div style={{marginLeft: "7.5px"}}>40,000</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell5Remain > 0 ?
                                            <>
                                                {canbuy5 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle5}>REDEEM</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: 20, right: 30, padding: "10px 20px", background: "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)", color: "#fff", fontSize: "14px", letterSpacing: 1, border: "1px solid #4637a9", boxShadow: "3px 3px 0 #0d0a1f"}} className="pixel">KYC Shop</div>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}}className="pixel">Novice Sword Vol.3</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreiha7rbdsni6hvok2rs546zeowge2mwbfh3y75awlqv2u74zorltse" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell2Remain}</div>
                                            /100 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>250 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="18" alt="$BBQ"/>
                                            <div style={{marginLeft: "7.5px"}}>40,000</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell2Remain > 0 ?
                                            <>
                                                {canbuy2 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle2}>REDEEM</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}}className="pixel">TSW Valentine Ring</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreiacm6fn5rjctuxyiirlmr7awp6ckesgffamingak4pif3kp6vgbri" height="160" alt="valentineringpic"/>
                                <div style={{alignSelf: "flex-start", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell1Remain}</div>
                                            /107 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>150 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreieyk6odnkrmghee3sc3nfnwxg7jhmyk2tgima3jkdmiy2oap2jc4i" height="18" alt="$CTUNA"/>
                                            <div style={{marginLeft: "7.5px"}}>2500</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell1Remain > 0 ?
                                            <>
                                                {canbuy1 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle}>REDEEM</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}}className="pixel">Prophet of JBC</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreieoamtkrbgj3kd3cqrdcvwzoj7swmwegmoyvcs5gqv22psyzzhvre" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell8Remain}</div>
                                            /333 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>8,000 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreia2bjrh7yw2vp23e5lnc6u75weg6nq7dzkyruggsnjxid6qtofeeq" height="18" alt="$JDAO"/>
                                            <div style={{marginLeft: "7.5px"}}>1,000</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell8Remain > 0 ?
                                            <>
                                                {canbuy8 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle8}>REDEEM</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}}className="pixel">VK, King of Commu</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreibl25he5u74rw2mi24xhjl4yurmhoe6upn4qcbi5kn75e5uaz2ksa" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell13Remain}</div>
                                            /333 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>4,500 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreico3y6ql5vudm35ttestwvffdacbp25h6t5ipbyncwr3qtzprrm5e" height="18" alt="$OS"/>
                                            <div style={{marginLeft: "7.5px"}}>5,500</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell13Remain > 0 ?
                                            <>
                                                {canbuy13 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle13}>REDEEM</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{alignSelf: "flex-start", fontSize: "16px", width: "380px"}}className="pixel">Chainsaw Pro Max</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/bafkreibalc6if2y6qqp3kfxjkciabsdxxxpnx4djt6toap2c3n2bfcnfye" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell18Remain}</div>
                                            /300 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>10,000 CMPOW</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafkreibs763pgx6caw3vaqtzv6b2fmkqpwwzvxwe647gywkn3fsydkjlyq" height="18" alt="$BBQ"/>
                                            <div style={{marginLeft: "7.5px"}}>100M</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell18Remain > 0 ?
                                            <>
                                                {canbuy18 ?
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={buyHandle18}>REDEEM</div> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "97.5%", borderBottom: "1px solid #dddade", marginTop: "40px"}}></div>
                        <div style={{width: "100%", marginTop: "20px", textIndent: "20px", fontSize: "15px", letterSpacing: "1px"}} className="bold">Ecosystem NFTs Redemption Store</div>
                        
                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "14px", width: "380px"}} className="pixel">NARUTA NFT x Songkran 2024 - Water gun (Weapon)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmXPAZvJWqhsMcD2U3KGkmTs6ipFS6oTNB91KP8PaYYxNP?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell31Remain}</div>
                                            /55 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>45555 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm?img-width=50&img-height=50" height="18" alt="$EE"/>
                                            <div style={{marginLeft: "7.5px"}}>444,444</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell31Remain > 0 ?
                                            <>
                                                {isWL6 ?
                                                    <>
                                                        {canbuy31 ?
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle31(1)}>BUY</div> :
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                        }
                                                    </> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "14px", width: "380px"}} className="pixel">NARUTA NFT x Songkran 2024 - Raincoat (Cloth)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmeBqjHUwyEYs6GW5GL4r4A8e5i5xLJ9ws1xexoMbkbYop?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell32Remain}</div>
                                            /55 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>45555 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q?img-width=50&img-height=50" height="18" alt="$II"/>
                                            <div style={{marginLeft: "7.5px"}}>22,222</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell32Remain > 0 ?
                                            <>
                                                {isWL6 ?
                                                    <>
                                                        {canbuy32 ?
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle32(2)}>BUY</div> :
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                        }
                                                    </> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "14px", width: "380px"}} className="pixel">NARUTA NFT x Songkran 2024 - Goggles (Hat)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmQFfNTnUVrdfNDNnavFb1uTAp8xv2eseDEwn8h4UkSAsg?img-width=400&img-height=400" height="150" alt='Can not load metadata.'/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell33Remain}</div>
                                            /55 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>45555 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4?img-width=50&img-height=50" height="18" alt="$GEAR"/>
                                            <div style={{marginLeft: "7.5px"}}>999,999,999</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell33Remain > 0 ?
                                            <>
                                                {isWL6 ?
                                                    <>
                                                        {canbuy33 ?
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle33(3)}>BUY</div> :
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                        }
                                                    </> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>

                        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start", overflow: "scroll", marginBottom: "80px"}} className="noscroll">
                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 0", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "14px", width: "380px"}} className="pixel">NARUTA NFT x Songkran 2024 - Ring (Accessory)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmQcN43jVawFfZfU8hdyiF3of3UZZivyvLudo5ipSmRb5L?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell34Remain}</div>
                                            /55 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>45555 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafybeihg7schl77eo7b4amo22htmuscipo4dfioxmajxr4feuqloz2dolm?img-width=50&img-height=50" height="18" alt="$EE"/>
                                            <div style={{marginLeft: "7.5px"}}>444,444</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell34Remain > 0 ?
                                            <>
                                                {isWL6 ?
                                                    <>
                                                        {canbuy31 ?
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle31(4)}>BUY</div> :
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                        }
                                                    </> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px 20px 20px 40px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "14px", width: "380px"}} className="pixel">NARUTA NFT x Songkran 2024 - Backpacks (ฺBack)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmVfmxMSgSWEYEb4724GN9wXSk8WntDJirdAkh5TU5hYJY?img-width=400&img-height=400" height="150" alt="Can not load metadata."/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell35Remain}</div>
                                            /55 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>45555 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafybeiffepxbrj2zq2mrlik47tonb2mpp22ymvqmv7o5vpy57fjre4qn6q?img-width=50&img-height=50" height="18" alt="$II"/>
                                            <div style={{marginLeft: "7.5px"}}>22,222</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell35Remain > 0 ?
                                            <>
                                                {isWL6 ?
                                                    <>
                                                        {canbuy32 ?
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle32(5)}>BUY</div> :
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                        }
                                                    </> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>

                            <div className="nftCard" style={{position: "relative", justifyContent: "flex-start", height: "460px", margin: "20px", boxShadow: "6px 6px 0 #00000040", border: "1px solid rgb(227, 227, 227)"}}>
                                <div style={{position: "absolute", top: -25, right: -15, padding: "5px 20px", width: "150px", background: "#fff", letterSpacing: 1, border: "1px solid rgb(227, 227, 227)", boxShadow: "6px 6px 0 #00000040", display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1}} className="bold">
                                    <img src="https://gateway.pinata.cloud/ipfs/bafybeifetzaiv2i5anifvhumtbnq6ayvyqvrjn6hmq63vggg3r26gvzxce?img-width=50&img-height=50" width="30px" alt="TAODUM-TAOMEME" />
                                    <div className='light' style={{marginLeft: "10px"}}>TAODUM & TAOMEME</div>
                                </div>
                                <div style={{alignSelf: "flex-start", fontSize: "14px", width: "380px"}} className="pixel">NARUTA NFT x Songkran 2024 - Boots (ฺShoes)</div>
                                <img style={{alignSelf: "flex-start", marginTop: "20px"}} src="https://gateway.pinata.cloud/ipfs/QmRvFFrpgPjLUaDxdwMhr8Wa5m29jQuH9GUHSug7GpvuM1?img-width=400&img-height=400" height="150" alt='Can not load metadata.'/>
                                <div style={{alignSelf: "flex-start", marginTop: "10px", minHeight: "200px", fontSize: "15px"}} className="pixel">
                                    <div style={{marginTop: "20px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Limited</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div className="emp">{sell36Remain}</div>
                                            /55 EA
                                        </div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Status</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>45555 Power</div>
                                    </div>
                                    <div style={{marginTop: "15px", width: "350px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #d9d8df"}}>
                                        <div>Price</div>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <img src="https://gateway.pinata.cloud/ipfs/bafybeiegwsyuqu5d47hobxpnuj5zdsy2fgzautcobr6imm3soc4r6uibg4?img-width=50&img-height=50" height="18" alt="$GEAR"/>
                                            <div style={{marginLeft: "7.5px"}}>999,999,999</div>
                                        </div>
                                    </div>
                                </div>
                                {address !== null ?
                                    <>
                                        {sell36Remain > 0 ?
                                            <>
                                                {isWL6 ?
                                                    <>
                                                        {canbuy33 ?
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center"}} className="pixel button" onClick={() => buyHandle33(6)}>BUY</div> :
                                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">INADEQUATE BALANCE</div>
                                                        }
                                                    </> :
                                                    <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">NOT ELIGIBLE TO REDEEM</div>
                                                }
                                            </> :
                                            <div style={{borderRadius: "12px", alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">OUT OF STOCK</div>
                                        }                              
                                    </> :
                                    <div style={{borderRadius: "12px",alignSelf: "flex-start", padding: "15px", fontSize: "16px", marginTop: "25px", width: "180px", display: "flex", justifyContent: "center", background: "#e9eaeb", color: "#bdc2c4", cursor: "not-allowed"}} className="pixel button">Please connect wallet</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Mall