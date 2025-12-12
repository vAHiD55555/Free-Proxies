function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 103.177.199.98:1111",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 20.64.104.35:3128",
        "SOCKS 128.140.76.145:31563",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 203.25.208.163:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}