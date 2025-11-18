function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.156.72.10:8080",
        "SOCKS 89.58.45.94:36073",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 8.217.23.241:1024",
        "SOCKS 135.181.203.208:80",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 152.53.171.242:44969",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 89.58.45.94:21677",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 89.58.45.94:23381",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}