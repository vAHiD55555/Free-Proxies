function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.202.170:3128",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 119.81.189.194:80",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 123.54.197.21:21259",
        "SOCKS 123.54.197.16:21296",
        "SOCKS 115.114.77.133:9090",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 123.54.197.52:21814",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 123.54.197.49:22503",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 159.8.114.37:80",
        "SOCKS 146.190.68.164:20166",
        "SOCKS 206.206.126.140:1080",
        "SOCKS 13.229.47.109:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}