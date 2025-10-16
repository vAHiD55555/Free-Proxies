function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 47.243.18.3:1011",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 185.93.89.155:4210",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 113.128.33.60:53405",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}