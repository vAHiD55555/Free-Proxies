function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 141.94.195.25:22558",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 169.155.48.155:3128",
        "SOCKS 190.94.212.228:999",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 103.54.217.163:8199",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}