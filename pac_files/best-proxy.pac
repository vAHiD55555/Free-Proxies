function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.120.241:5556",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 206.27.173.58:80",
        "SOCKS 103.156.75.246:8181",
        "SOCKS 62.60.131.195:4236",
        "SOCKS 62.60.131.178:4673",
        "SOCKS 202.62.55.39:1080",
        "SOCKS 72.10.160.172:1593",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 62.60.131.183:4414",
        "SOCKS 62.60.131.181:14807",
        "SOCKS 38.158.83.241:999",
        "SOCKS 203.189.137.122:1080",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 115.127.62.50:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}