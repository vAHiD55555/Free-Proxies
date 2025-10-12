function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.144.209.104:8715",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 46.19.68.45:2333",
        "SOCKS 72.10.160.172:5699",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 135.125.97.184:46107",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 67.43.228.251:9105",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 115.79.70.69:8470",
        "SOCKS 147.135.62.204:9052",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 162.243.149.86:31028",
        "SOCKS 57.128.188.167:9298",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}