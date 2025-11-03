function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.70.13.38:41857",
        "SOCKS 190.97.241.7:999",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 126.209.17.228:8080",
        "SOCKS 8.209.96.245:3129",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 119.100.148.2:7890",
        "SOCKS 129.213.139.179:8080",
        "SOCKS 67.43.228.254:11053",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 43.100.75.212:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}