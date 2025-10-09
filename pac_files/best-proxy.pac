function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.72.100.236:4995",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 78.12.220.164:9174",
        "SOCKS 147.78.66.83:1080",
        "SOCKS 103.156.14.15:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 34.141.27.50:3128",
        "SOCKS 198.177.125.181:3949",
        "SOCKS 202.165.47.90:55443",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 103.174.178.138:1145",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 103.226.232.205:8099",
        "SOCKS 221.202.27.194:10811",
        "SOCKS 66.29.156.102:8080",
        "SOCKS 206.42.55.99:3128",
        "SOCKS 175.158.63.166:1111",
        "SOCKS 178.17.62.152:8881",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}