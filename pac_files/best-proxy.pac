function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.42:15024",
        "SOCKS 174.138.162.37:37040",
        "SOCKS 45.74.31.30:16096",
        "SOCKS 45.74.31.30:8232",
        "SOCKS 85.17.145.160:9150",
        "SOCKS 202.181.24.102:10809",
        "SOCKS 198.252.108.20:9050",
        "SOCKS 45.74.31.30:11709",
        "SOCKS 45.74.31.42:26049",
        "SOCKS 45.74.31.30:15956",
        "SOCKS 45.74.31.47:4008",
        "SOCKS 45.74.31.30:33294",
        "SOCKS 174.138.162.37:36138",
        "SOCKS 45.74.31.30:6472",
        "SOCKS 45.74.31.30:9327",
        "SOCKS 45.74.31.30:6439",
        "SOCKS 45.74.31.42:12487",
        "SOCKS 45.74.31.30:6664",
        "SOCKS 45.74.31.30:11607",
        "SOCKS 45.74.31.41:10811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}