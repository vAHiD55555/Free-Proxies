function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:15281",
        "SOCKS 202.141.161.53:7891",
        "SOCKS 89.235.190.174:1080",
        "SOCKS 45.74.31.47:13397",
        "SOCKS 95.80.120.246:1080",
        "SOCKS 43.108.46.4:9050",
        "SOCKS 45.74.31.42:5244",
        "SOCKS 119.28.233.187:10086",
        "SOCKS 2.26.170.13:1080",
        "SOCKS 45.74.31.40:5853",
        "SOCKS 45.74.31.42:10180",
        "SOCKS 171.238.101.122:1037",
        "SOCKS 45.74.31.47:13135",
        "SOCKS 45.74.31.41:11680",
        "SOCKS 8.211.195.139:28737",
        "SOCKS 34.130.221.151:40001",
        "SOCKS 45.74.31.47:8794",
        "SOCKS 208.167.249.204:10808",
        "SOCKS 45.74.31.40:11934",
        "SOCKS 174.138.162.238:9443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}