function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:37459",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 45.74.31.42:11719",
        "SOCKS 62.109.30.179:1080",
        "SOCKS 45.74.31.30:7105",
        "SOCKS 45.74.31.30:44816",
        "SOCKS 45.74.31.42:4407",
        "SOCKS 45.74.31.30:9520",
        "SOCKS 118.145.141.251:44225",
        "SOCKS 91.195.86.221:1080",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 137.131.12.103:1080",
        "SOCKS 118.145.141.251:44140",
        "SOCKS 45.74.31.30:9422",
        "SOCKS 45.74.31.30:6097",
        "SOCKS 79.134.4.192:1080",
        "SOCKS 159.223.52.199:3128",
        "SOCKS 45.74.31.42:11131",
        "SOCKS 45.74.31.30:7338",
        "SOCKS 118.145.141.251:44058",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}