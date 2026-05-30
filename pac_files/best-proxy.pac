function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.222.241.8:42378",
        "SOCKS 212.113.106.198:987",
        "SOCKS 47.82.163.98:1080",
        "SOCKS 47.82.151.124:1080",
        "SOCKS 47.82.144.173:1080",
        "SOCKS 47.82.145.24:1080",
        "SOCKS 47.82.176.228:1080",
        "SOCKS 47.82.177.168:1080",
        "SOCKS 47.82.160.1:1080",
        "SOCKS 47.82.160.252:1080",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 47.82.155.136:1080",
        "SOCKS 47.82.145.74:1080",
        "SOCKS 47.82.182.238:1080",
        "SOCKS 47.82.164.82:1080",
        "SOCKS 47.82.145.73:1080",
        "SOCKS 47.82.178.29:1080",
        "SOCKS 47.82.146.62:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 47.82.148.135:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}