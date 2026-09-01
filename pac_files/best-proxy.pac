function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:11516",
        "SOCKS 93.87.38.20:1090",
        "SOCKS 150.241.70.126:1080",
        "SOCKS 31.76.31.241:1080",
        "SOCKS 194.190.80.36:1080",
        "SOCKS 174.138.162.35:53381",
        "SOCKS 128.127.144.111:1080",
        "SOCKS 202.169.250.147:8111",
        "SOCKS 47.250.159.65:2002",
        "SOCKS 44.201.245.90:3128",
        "SOCKS 45.74.31.42:7063",
        "SOCKS 45.74.31.30:7278",
        "SOCKS 152.53.194.105:1080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 129.80.80.197:9050",
        "SOCKS 141.147.146.174:1080",
        "SOCKS 195.19.50.135:1080",
        "SOCKS 38.59.244.145:1234",
        "SOCKS 223.254.141.102:6656",
        "SOCKS 68.189.214.35:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}