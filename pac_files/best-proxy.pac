function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.235.234:16000",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 118.68.172.205:16000",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 135.181.203.208:80",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 47.237.141.9:1111",
        "SOCKS 27.71.140.43:16000",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 173.209.63.67:8102",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}