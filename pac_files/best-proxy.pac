function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 165.101.167.117:8080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 157.180.121.252:16379",
        "SOCKS 152.53.36.101:20709",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 51.79.195.217:30000",
        "SOCKS 157.180.121.252:42797",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 152.53.36.101:37873",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 152.53.171.242:41365",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}