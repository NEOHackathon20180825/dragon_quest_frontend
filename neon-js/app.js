const contract = 'eb41bc87e660f53e1b9e54bb7b2a68398a69241e';

const config = {
    name: 'PrivateNet',
    extra: {
        neoscan: 'http://localhost:4000/api/main_net'
    },
    script: Neon.default.create.script({
        scriptHash: contract,
    }),
    address: 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y',
    privateKey: 'KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr',
    gas: 1
}

const privateNet = new Neon.rpc.Network(config)
Neon.default.add.network(privateNet)

function get(method) {
    const props = {
        scriptHash: contract, 
        operation: method,
        args: [],
    }

    const script = Neon.default.create.script(props)

    Neon.rpc.Query.invokeScript(script)
        .execute('http://seed3.neo.org:20332')
        .then(res => {
            console.log(res) 
        })
}

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