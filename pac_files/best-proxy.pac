function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 134.209.29.120:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 171.237.87.36:1027",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 27.71.139.254:16000",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 147.75.66.235:443",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 117.74.65.207:443",
        "SOCKS 27.71.228.32:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}