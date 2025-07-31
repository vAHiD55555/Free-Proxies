function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.136.198.40:3128",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 85.17.61.238:80",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 190.93.229.18:999",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 171.237.93.193:1004",
        "SOCKS 202.165.92.206:8080",
        "SOCKS 91.107.185.149:1080",
        "SOCKS 52.189.122.251:3128",
        "SOCKS 67.43.236.22:7601",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 116.103.133.168:1009",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}