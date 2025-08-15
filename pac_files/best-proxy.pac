function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.157:57114",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 51.15.236.150:16379",
        "SOCKS 185.208.102.157:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 216.195.100.56:3129",
        "SOCKS 14.162.194.58:10001",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 145.40.96.156:9400",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 38.7.131.198:999",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 116.107.173.169:10001",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 184.178.172.5:15303",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}