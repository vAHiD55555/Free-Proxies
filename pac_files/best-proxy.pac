function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.115.42.157:8044",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 177.234.217.42:999",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 1.54.175.129:16000",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 93.115.144.38:1452",
        "SOCKS 45.136.198.40:3128",
        "SOCKS 1.55.59.26:16000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 42.118.1.7:16000",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 106.52.187.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}