function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.248.81:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 179.96.28.58:80",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 203.189.154.20:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 200.59.191.164:999",
        "SOCKS 221.202.27.194:10808",
        "SOCKS 203.189.136.7:1080",
        "SOCKS 115.127.181.6:2589",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 68.71.242.118:4145",
        "SOCKS 5.75.235.252:33521",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 140.237.14.92:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}