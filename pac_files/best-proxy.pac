function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 70.36.109.21:60009",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 208.102.24.225:8888",
        "SOCKS 183.80.22.110:16000",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 190.53.46.11:38525",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}