function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.209.130.76:8713",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 165.227.104.238:8118",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 67.43.236.21:32215",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 195.74.86.205:80",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 166.62.35.102:45775",
        "SOCKS 103.123.120.121:8080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 45.173.12.141:1994",
        "SOCKS 123.128.12.93:9050",
        "SOCKS 8.213.128.6:8080",
        "SOCKS 118.99.96.174:8080",
        "SOCKS 72.10.164.178:2493",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}