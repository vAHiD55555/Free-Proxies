function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.64.199.82:4145",
        "SOCKS 77.90.8.154:9083",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 152.32.219.123:10808",
        "SOCKS 8.215.15.163:1080",
        "SOCKS 217.76.54.168:9052",
        "SOCKS 146.56.191.98:19422",
        "SOCKS 8.211.51.115:90",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 47.250.51.110:8008",
        "SOCKS 172.105.192.212:9080",
        "SOCKS 47.82.123.15:1011",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 43.160.255.142:7890",
        "SOCKS 90.150.187.186:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 193.122.105.251:65535",
        "SOCKS 23.137.251.202:9050",
        "SOCKS 165.99.56.7:8080",
        "SOCKS 147.45.221.111:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}