import { ERC725, ERC725JSONSchema } from "@erc725/erc725.js";
import UniversalProfile from "@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json";
import Web3 from "web3";

/// Creates a message encryption keys.
export async function setMEK(mEKs: string[]) {
  try {
    if ((window as any).ethereum == undefined) {
      return alert("Install Lukso Browser Extension");
    }

    const web3 = new Web3((window as any).ethereum);

    let universalProfileAddress;

    universalProfileAddress = await (window as any).ethereum.request({
      method: "eth_accounts",
    });

    if (universalProfileAddress.length === 0) {
      universalProfileAddress = await web3.eth.requestAccounts();
    }

    const schema = [
      {
        name: "MessageEncryptionKeys[]",
        key: "0x2c5c3497f330ce2ae35113f61f7a5dfd31a944d7fc42eac8b1f9450c64f38559",
        keyType: "Array",
        valueType: "string",
        valueContent: "String",
      },
    ];

    const erc725 = new ERC725(
      schema as ERC725JSONSchema[],
      universalProfileAddress[0],
      web3.currentProvider,
      {
        ipfsGateway: "https://2eff.lukso.dev/ipfs/",
      }
    );

    const encodedData = erc725.encodeData([
      {
        keyName: "MessageEncryptionKeys[]",
        value: [...mEKs],
      },
    ]);

    const contract = new web3.eth.Contract(
      UniversalProfile.abi as any,
      universalProfileAddress[0],
      {
        gas: 5_000_000,
        gasPrice: "1000000000",
      }
    );

    await contract.methods["setData(bytes32[],bytes[])"](
      encodedData.keys,
      encodedData.values
    )
      .send({
        from: universalProfileAddress[0],
      })
      .on("receipt", (receipt: any) => {
        console.log(receipt);

        return {
          success: true,
          status: receipt,
        };
      })
      .once("sending", (payload: unknown) => {
        console.log(payload);
      });
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: "Something went wrong: " + error,
    };
  }
}

export async function getMek() {
  try {
    if ((window as any).ethereum == undefined) {
      return alert("Install Lukso Browser Extension");
    }

    const web3 = new Web3((window as any).ethereum);

    const schema = [
      {
        name: "MessageEncryptionKeys[]",
        key: "0x2c5c3497f330ce2ae35113f61f7a5dfd31a944d7fc42eac8b1f9450c64f38559",
        keyType: "Array",
        valueType: "string",
        valueContent: "String",
      },
    ];

    let universalProfileAddress: string[];

    universalProfileAddress = await (window as any).ethereum.request({
      method: "eth_accounts",
    });

    console.log(universalProfileAddress);

    if (universalProfileAddress.length === 0) {
      universalProfileAddress = await web3.eth.requestAccounts();
    }

    const erc725 = new ERC725(
      schema as ERC725JSONSchema[],
      universalProfileAddress[0],
      web3.currentProvider,
      {
        ipfsGateway: "https://2eff.lukso.dev/ipfs/",
      }
    );

    const data = await erc725.fetchData("MessageEncryptionKeys[]");

    return data;
  } catch (error) {
    console.log(error);
  }
}
