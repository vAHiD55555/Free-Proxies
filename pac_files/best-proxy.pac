function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.171:9915",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 118.68.64.176:16000",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 171.228.181.175:2001",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 27.79.135.237:16000",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 128.140.113.110:5153",
        "SOCKS 135.181.203.208:80",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 23.94.236.141:8080",
        "SOCKS 212.110.188.202:34409",
        "SOCKS 212.110.188.213:34411",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}