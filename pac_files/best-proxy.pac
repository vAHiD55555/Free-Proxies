function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.147.246.77:8199",
        "SOCKS 45.122.123.29:8199",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 180.211.187.187:8008",
        "SOCKS 196.204.83.237:1976",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 14.167.185.248:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 103.171.83.25:10810",
        "SOCKS 68.183.180.48:8080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 217.160.224.54:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}