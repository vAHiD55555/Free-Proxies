function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 35.181.173.74:9443",
        "SOCKS 89.58.45.94:44241",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 57.128.188.167:8187",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 89.58.45.94:21403",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 89.58.45.94:17612",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 89.58.45.94:37759",
        "SOCKS 89.58.45.94:35019",
        "SOCKS 219.147.112.150:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}