function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.248.95.98:54126",
        "SOCKS 74.48.187.168:3128",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 152.53.171.242:42779",
        "SOCKS 152.53.36.101:45605",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 47.239.210.106:33333",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 193.58.120.232:8080",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 47.97.86.231:8222",
        "SOCKS 115.23.88.118:56452",
        "SOCKS 8.222.133.83:1011",
        "SOCKS 157.180.121.252:36444",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 147.75.68.200:10001",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}