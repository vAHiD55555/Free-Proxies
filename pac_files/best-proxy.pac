function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.226.156.148:20201",
        "SOCKS 47.245.117.43:80",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 95.47.239.75:3128",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 143.47.59.115:8118",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 157.20.252.97:8097",
        "SOCKS 67.43.228.251:9105",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 18.188.141.177:28080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}