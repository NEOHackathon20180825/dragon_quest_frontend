function getTitle() {

    const contract = '60dea68f62ef03df87ae7c1079a64a9d1aff031f';
    const props = {
        scriptHash: contract,
    }
    const script = Neon.default.create.script(props)

    Neon.rpc.Query.invokeScript(script)
        .execute('http://localhost:30333')
        .then(res => {
            console.log(Neon.u.hexstring2str(res.result.stack[1].value));
            return Neon.u.hexstring2str(res.result.stack[1].value);
        })
}

function sendNeo() {
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

function setReturn() {

    const contract = '2a0c0765696cbe723ec0f8a964c1b06a4d5ea179';
    const props = {
        scriptHash: contract,
        operation: "set"
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

function getReturn() {

    const contract = '2a0c0765696cbe723ec0f8a964c1b06a4d5ea179';
    const props = {
        scriptHash: contract,
        operation:  "get"
    }
    const script = Neon.default.create.script(props)

    Neon.rpc.Query.invokeScript(script)
        .execute('http://localhost:30333')
        .then(res => {
            console.log(res);
            //console.log(Neon.u.hexstring2str(res.result.stack[1].value));
            //return Neon.u.hexstring2str(res.result.stack[1].value);
        })
}