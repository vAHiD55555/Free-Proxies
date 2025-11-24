function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.13.74.125:4457",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 72.10.160.94:2261",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 213.230.121.73:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 144.31.0.47:10808",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}