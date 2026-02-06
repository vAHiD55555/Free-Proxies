function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.224.234.71:7300",
        "SOCKS 217.217.254.94:80",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 119.81.71.27:80",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 146.235.19.84:10807",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 40.176.36.166:20000",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 91.84.117.49:10880",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 213.35.110.67:10889",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 67.43.236.22:5627",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}