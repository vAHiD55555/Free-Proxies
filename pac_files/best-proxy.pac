function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.24.15.246:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 49.51.229.43:1080",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 151.115.99.193:10006",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 43.157.247.44:1080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 144.124.232.204:5222",
        "SOCKS 154.37.221.222:10808",
        "SOCKS 150.241.115.245:1080",
        "SOCKS 31.77.198.168:9000",
        "SOCKS 103.187.162.75:8199",
        "SOCKS 191.44.118.236:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}