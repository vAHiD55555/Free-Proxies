function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.141.106.142:6969",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 171.238.64.26:1006",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 114.80.36.254:3081",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 195.90.212.53:3128",
        "SOCKS 177.19.167.242:80",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 42.118.2.147:16000",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 27.79.182.222:16000",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 65.108.203.37:18080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}