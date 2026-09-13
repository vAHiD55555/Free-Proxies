function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:23843",
        "SOCKS 45.74.31.47:33346",
        "SOCKS 45.74.31.42:5041",
        "SOCKS 45.74.31.30:8117",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 45.74.31.30:8490",
        "SOCKS 45.74.31.30:10575",
        "SOCKS 45.74.31.42:17166",
        "SOCKS 45.74.31.42:23152",
        "SOCKS 45.74.31.30:7316",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 45.74.31.30:6464",
        "SOCKS 45.74.31.42:10642",
        "SOCKS 45.74.31.30:10402",
        "SOCKS 202.141.161.50:10808",
        "SOCKS 45.74.31.30:9455",
        "SOCKS 153.80.242.105:8080",
        "SOCKS 45.74.31.30:5232",
        "SOCKS 45.74.31.42:22956",
        "SOCKS 45.74.31.30:8694",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}