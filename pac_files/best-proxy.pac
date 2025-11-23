function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 51.16.56.189:9490",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 157.180.121.252:39007",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 45.166.93.113:999",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}