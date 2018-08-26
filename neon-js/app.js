const contract = 'e0cad06f15a4684595574c5cb95a2ed3dd2c0c63';

function get(method) {
/*
    const props = {
        scriptHash: contract, 
        operation: method,
        args: [],
    }

    const script = Neon.default.create.script(props)

    const config = {
        net: "http://localhost:4000/api/main_net/",
        name: 'PrivateNet',
        extra: {
            neoscan: 'http://localhost:4000/api/main_net'
        },
        script: script,
        address: 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y',
        privateKey: 'KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr',
        filters: "",
        gas: 1
    }

    const privateNet = new Neon.rpc.Network(config)
    Neon.default.add.network(privateNet)

    Neon.default.doInvoke(config).then(res => {
        console.log(res)
      })
*/

const props = {
    scriptHash: contract, 
    //operation: method,
    //args: [],
}
const script = Neon.default.create.script(props)

Neon.rpc.Query.invokeScript(script)
    .execute('http://localhost:30333')
    .then(res => {
        console.log(res)    
    })
}

function sendNeo(){
    Neon.api.default.sendAsset({
        net: 'http://localhost:4000/api/main_net/',
        address: "AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y",
        privateKey: "KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr",
        intents: Neon.api.makeIntent({
          GAS: 1,
          NEO: 1,
        }, "AR3uEnLUdfm1tPMJmiJQurAXGL7h3EXQ2F"),
      })
      .then(rpcResponse => {
        console.log(rpcResponse)
      });
}



function set(method) {
    const props = {
        scriptHash: contract, 
        operation: method,
        args: [],
    }

    const script = Neon.default.create.script(props)

    const config = {
        net: "http://localhost:4000/api/main_net/",
        name: 'PrivateNet',
        extra: {
            neoscan: 'http://localhost:4000/api/main_net'
        },
        script: script,
        address: 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y',
        privateKey: 'KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr',
        filters: "",
        gas: 1
    }

    const privateNet = new Neon.rpc.Network(config)
    Neon.default.add.network(privateNet)

    Neon.default.doInvoke(config).then(res => {
        console.log(res)
      })

}



/*
function setString(method, param) {
    const props = {
        scriptHash: contract, 
        operation: method,
        args: [Neon.u.str2hexstring(param)],
    }
    const script = Neon.default.create.script(props)

    Neon.rpc.Query.invokeScript(script)
        .execute('http://seed3.neo.org:20332')
        .then(res => {
            console.log(res)    
        })
}

function getBalance() {
    Neon.api.neoscan.getBalance('PrivateNet', "AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y")
        .then(res => console.log(res))
}
*/