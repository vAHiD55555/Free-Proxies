function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 157.175.152.104:261",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 62.60.131.195:6366",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 13.231.11.85:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 67.43.236.18:10521",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 110.235.247.47:1080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 119.81.189.194:80",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 103.82.23.118:6228",
        "SOCKS 185.189.112.157:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}