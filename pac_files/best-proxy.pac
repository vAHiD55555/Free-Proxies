function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.152:21906",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 103.30.29.49:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 38.159.36.38:999",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 45.177.16.137:999",
        "SOCKS 68.71.40.126:8080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 36.255.98.180:4369",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}