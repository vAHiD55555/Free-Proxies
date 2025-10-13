function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.21:32215",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 103.192.158.115:46",
        "SOCKS 103.56.93.16:1935",
        "SOCKS 80.80.163.194:46276",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 47.245.117.43:80",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 47.79.91.116:1122",
        "SOCKS 103.22.99.138:3125",
        "SOCKS 171.228.169.61:1001",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 185.93.89.181:4599",
        "SOCKS 182.253.93.3:53281",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 66.201.7.213:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}