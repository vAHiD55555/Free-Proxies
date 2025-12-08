function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 43.165.187.118:80",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 93.184.5.121:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 116.203.139.209:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}