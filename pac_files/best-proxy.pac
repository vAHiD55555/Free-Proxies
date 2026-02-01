function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.158.27:25100",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 146.235.19.84:10880",
        "SOCKS 159.8.114.37:80",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 77.246.108.10:21238",
        "SOCKS 41.173.7.82:8080",
        "SOCKS 36.255.98.168:4004",
        "SOCKS 36.255.98.184:6070",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 62.60.131.185:4766",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 36.255.98.181:8743",
        "SOCKS 103.187.86.14:8085",
        "SOCKS 36.255.98.163:4086",
        "SOCKS 62.60.131.182:41258",
        "SOCKS 62.60.131.203:4249",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}