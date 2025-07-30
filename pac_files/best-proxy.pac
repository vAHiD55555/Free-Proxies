function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.80.23.68:16000",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 152.53.194.46:8064",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 27.71.129.176:16000",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 125.164.213.163:3128",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 183.80.22.110:16000",
        "SOCKS 67.43.236.21:5423",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}