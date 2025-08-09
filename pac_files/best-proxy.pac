function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.110.188.211:34409",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 157.66.16.38:8070",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 95.53.246.137:3128",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 58.186.92.156:16000",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 27.79.221.16:16000",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 72.10.164.178:28247",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}