function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 14.224.200.249:1452",
        "SOCKS 135.181.203.208:80",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 18.143.173.102:21681",
        "SOCKS 121.165.169.220:8728",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 59.33.33.155:7890",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 103.192.158.115:46",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 106.52.187.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}