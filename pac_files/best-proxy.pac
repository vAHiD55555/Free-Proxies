function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.72.180.122:1080",
        "SOCKS 45.74.31.30:33312",
        "SOCKS 174.138.162.35:8734",
        "SOCKS 49.13.22.249:10801",
        "SOCKS 174.138.165.206:36243",
        "SOCKS 141.148.158.143:1080",
        "SOCKS 45.74.31.41:21059",
        "SOCKS 45.74.31.42:12747",
        "SOCKS 45.74.31.30:6778",
        "SOCKS 45.74.31.30:10410",
        "SOCKS 45.74.31.30:8828",
        "SOCKS 45.74.31.42:4884",
        "SOCKS 45.74.31.42:14749",
        "SOCKS 45.74.31.30:7926",
        "SOCKS 45.74.31.30:16508",
        "SOCKS 45.74.31.50:15548",
        "SOCKS 45.74.31.40:4248",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 188.17.157.196:1080",
        "SOCKS 45.74.31.30:5585",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}