function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.152.49:1080",
        "SOCKS 93.91.162.222:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 202.62.39.118:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 46.229.66.241:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 45.12.136.46:2025",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}