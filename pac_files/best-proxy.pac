function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 213.165.58.6:1080",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 119.81.71.27:80",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 84.247.153.193:1080",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}