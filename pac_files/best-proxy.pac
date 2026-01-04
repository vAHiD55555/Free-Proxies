function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.167.191.42:6006",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 23.249.27.167:10808",
        "SOCKS 72.10.160.170:24009",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 175.99.220.171:80",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 43.167.247.63:6006",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 43.167.254.69:6006",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 208.65.90.3:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}