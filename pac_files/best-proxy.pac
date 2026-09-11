function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:6079",
        "SOCKS 47.82.70.53:1011",
        "SOCKS 45.74.31.42:10865",
        "SOCKS 45.74.31.30:5072",
        "SOCKS 103.167.61.168:3128",
        "SOCKS 111.119.162.248:10926",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 45.74.31.42:12457",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 103.191.196.71:8199",
        "SOCKS 45.74.31.30:7046",
        "SOCKS 45.74.31.42:4196",
        "SOCKS 45.74.31.42:4003",
        "SOCKS 45.74.31.42:10723",
        "SOCKS 45.74.31.30:8577",
        "SOCKS 174.138.162.37:36888",
        "SOCKS 45.74.31.47:21523",
        "SOCKS 45.74.31.42:4086",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 45.74.31.42:13444",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}