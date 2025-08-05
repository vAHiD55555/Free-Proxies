function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.64.199.79:4145",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 47.76.83.44:8899",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 42.118.74.84:16000",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 171.237.85.177:1002",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 193.222.97.170:808",
        "SOCKS 222.129.33.141:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}