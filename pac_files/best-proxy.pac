function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.245.117.43:80",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 119.98.132.148:1080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 144.124.228.87:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 218.1.211.2:1080",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 202.181.16.173:3325",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 143.47.59.115:8118",
        "SOCKS 47.79.94.78:1122",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 8.217.147.173:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}