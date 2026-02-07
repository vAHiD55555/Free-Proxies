function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.115.42.157:8044",
        "SOCKS 3.24.178.81:80",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 146.235.19.84:10808",
        "SOCKS 72.10.160.173:10851",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 123.54.197.53:20889",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 188.166.252.135:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}