function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.255.157.6:8080",
        "SOCKS 118.145.141.251:44089",
        "SOCKS 118.145.141.251:44103",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 151.185.58.33:8080",
        "SOCKS 104.194.132.112:9052",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 45.74.31.42:40909",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 45.74.31.30:8998",
        "SOCKS 118.145.141.251:44095",
        "SOCKS 150.109.247.86:8443",
        "SOCKS 109.207.169.33:1080",
        "SOCKS 118.145.141.251:44078",
        "SOCKS 44.193.20.213:443",
        "SOCKS 31.220.40.59:5080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 2.63.188.78:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}