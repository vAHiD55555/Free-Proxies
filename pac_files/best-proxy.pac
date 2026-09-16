function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:4263",
        "SOCKS 174.138.162.37:37726",
        "SOCKS 45.74.31.25:14318",
        "SOCKS 45.74.31.42:4804",
        "SOCKS 45.74.31.30:4816",
        "SOCKS 45.74.31.42:12040",
        "SOCKS 45.74.31.42:13715",
        "SOCKS 45.74.31.42:17005",
        "SOCKS 45.74.31.30:10047",
        "SOCKS 45.74.31.30:6895",
        "SOCKS 45.74.31.42:5062",
        "SOCKS 45.74.31.30:9889",
        "SOCKS 174.138.162.37:8080",
        "SOCKS 45.74.31.42:17164",
        "SOCKS 47.238.128.246:1337",
        "SOCKS 45.86.230.45:1080",
        "SOCKS 45.74.31.42:14649",
        "SOCKS 45.74.31.50:11851",
        "SOCKS 45.74.31.30:34825",
        "SOCKS 45.74.31.42:15108",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}