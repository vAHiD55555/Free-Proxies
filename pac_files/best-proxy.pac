function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 67.43.228.251:10673",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 129.213.139.179:8080",
        "SOCKS 72.10.160.174:2841",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 185.200.38.27:8080",
        "SOCKS 152.53.36.101:21749",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 205.185.126.51:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}