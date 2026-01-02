function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.201.139.252:12344",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 43.133.21.137:6006",
        "SOCKS 43.133.8.63:6006",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 43.133.21.101:6006",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}