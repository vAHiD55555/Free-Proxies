function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:38115",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 152.53.171.242:41451",
        "SOCKS 152.53.171.242:40137",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 35.181.173.74:9443",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 89.58.45.94:22727",
        "SOCKS 103.166.32.224:8080",
        "SOCKS 89.58.45.94:25667",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 152.53.171.242:35019",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 38.51.243.189:999",
        "SOCKS 123.57.0.163:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}