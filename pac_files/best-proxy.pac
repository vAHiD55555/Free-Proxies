function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:6278",
        "SOCKS 174.138.162.35:30419",
        "SOCKS 45.74.31.30:7777",
        "SOCKS 45.74.31.42:13665",
        "SOCKS 8.211.195.173:8080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 45.74.31.50:9595",
        "SOCKS 45.74.31.42:12371",
        "SOCKS 103.82.193.105:9191",
        "SOCKS 45.74.31.42:20222",
        "SOCKS 45.74.31.30:9847",
        "SOCKS 45.74.31.42:19307",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 45.74.31.30:9898",
        "SOCKS 38.172.160.16:999",
        "SOCKS 45.74.31.30:10711",
        "SOCKS 45.74.31.42:17499",
        "SOCKS 38.58.182.147:18080",
        "SOCKS 45.74.31.30:34178",
        "SOCKS 72.195.34.58:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}