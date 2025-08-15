function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.103.13:34415",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 171.237.100.34:1009",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 116.98.166.63:10001",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 2.139.80.104:3128",
        "SOCKS 51.158.70.223:16379",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 115.72.37.153:10035",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 222.59.173.105:44161",
        "SOCKS 222.129.36.115:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}