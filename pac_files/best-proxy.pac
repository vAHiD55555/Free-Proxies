function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 39.170.85.129:7302",
        "SOCKS 103.82.23.118:6236",
        "SOCKS 152.53.171.242:41003",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 185.226.117.146:8090",
        "SOCKS 88.216.98.225:48852",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 152.53.171.242:40329",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 23.94.63.140:21080",
        "SOCKS 54.74.104.194:45318",
        "SOCKS 138.199.25.13:3908",
        "SOCKS 157.180.121.252:11021",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}