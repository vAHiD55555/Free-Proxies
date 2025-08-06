function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.33.141:57114",
        "SOCKS 58.186.249.38:16000",
        "SOCKS 115.72.160.205:10001",
        "SOCKS 103.125.174.62:8080",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 51.159.159.73:80",
        "SOCKS 116.98.183.148:1010",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 212.175.61.30:8080",
        "SOCKS 114.80.37.199:3081",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 83.222.184.87:3128",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 61.49.87.3:80",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 183.166.132.124:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}