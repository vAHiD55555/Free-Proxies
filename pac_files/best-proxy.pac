function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.20.55.230:8080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 62.60.131.194:5588",
        "SOCKS 93.187.188.30:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 27.147.163.188:40544",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 160.25.196.44:8090",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 116.62.140.59:7890",
        "SOCKS 72.240.9.63:80",
        "SOCKS 27.79.206.219:2067",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 115.114.77.133:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}