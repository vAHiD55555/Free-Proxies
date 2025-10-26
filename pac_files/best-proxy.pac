function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.201.115.84:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 101.255.107.85:1111",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 45.207.196.89:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 185.93.89.181:12555",
        "SOCKS 185.93.89.180:4848",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 185.93.89.180:7132",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 8.222.181.144:1100",
        "SOCKS 218.78.65.202:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}