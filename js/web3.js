// const web3 = new Web3(window.ethereum);
// const contractAddress = "0x125B646a9560DEd70b0271b7975f20e2C80a255E";
// const abi = [
//     [{
//             "inputs": [],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//         },
//         {
//             "anonymous": false,
//             "inputs": [{
//                     "indexed": true,
//                     "internalType": "address",
//                     "name": "_exporter",
//                     "type": "address"
//                 },
//                 {
//                     "indexed": false,
//                     "internalType": "string",
//                     "name": "_ipfsHash",
//                     "type": "string"
//                 }
//             ],
//             "name": "addHash",
//             "type": "event"
//         },
//         {
//             "inputs": [{
//                     "internalType": "bytes32",
//                     "name": "hash",
//                     "type": "bytes32"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_ipfs",
//                     "type": "string"
//                 }
//             ],
//             "name": "addDocHash",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                     "internalType": "address",
//                     "name": "_add",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_info",
//                     "type": "string"
//                 }
//             ],
//             "name": "add_Exporter",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                     "internalType": "address",
//                     "name": "_add",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "_newInfo",
//                     "type": "string"
//                 }
//             ],
//             "name": "alter_Exporter",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                 "internalType": "address",
//                 "name": "_newOwner",
//                 "type": "address"
//             }],
//             "name": "changeOwner",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "count_Exporters",
//             "outputs": [{
//                 "internalType": "uint16",
//                 "name": "",
//                 "type": "uint16"
//             }],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "count_hashes",
//             "outputs": [{
//                 "internalType": "uint16",
//                 "name": "",
//                 "type": "uint16"
//             }],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                 "internalType": "bytes32",
//                 "name": "_hash",
//                 "type": "bytes32"
//             }],
//             "name": "deleteHash",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                 "internalType": "address",
//                 "name": "_add",
//                 "type": "address"
//             }],
//             "name": "delete_Exporter",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                 "internalType": "bytes32",
//                 "name": "_hash",
//                 "type": "bytes32"
//             }],
//             "name": "findDocHash",
//             "outputs": [{
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "",
//                     "type": "uint256"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 },
//                 {
//                     "internalType": "string",
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [{
//                 "internalType": "address",
//                 "name": "_add",
//                 "type": "address"
//             }],
//             "name": "getExporterInfo",
//             "outputs": [{
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [],
//             "name": "owner",
//             "outputs": [{
//                 "internalType": "address",
//                 "name": "",
//                 "type": "address"
//             }],
//             "stateMutability": "view",
//             "type": "function"
//         }
//     ]
// ];

// const contract = new web3.eth.Contract(abi, contractAddress);

// // Example: Call a function from your contract
// const result = await contract.methods.yourFunction().call();
// console.log(result);