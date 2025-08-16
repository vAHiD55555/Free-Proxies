function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.34.165.86:443",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 78.13.104.52:1047",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 23.171.9.140:8888",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 27.79.238.173:16000",
        "SOCKS 54.180.143.12:1267",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 156.254.6.229:3128",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 72.10.160.94:29225",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}