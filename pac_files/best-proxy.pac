function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.80.32.8:3081",
        "SOCKS 171.250.17.140:10007",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 43.198.114.229:8080",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 47.252.18.37:5060",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 1.2.216.216:8080",
        "SOCKS 67.43.236.19:3527",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}