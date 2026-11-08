function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.114.56.76:20001",
        "SOCKS 45.74.31.46:10934",
        "SOCKS 49.87.152.191:8989",
        "SOCKS 45.74.31.46:14332",
        "SOCKS 132.148.82.125:45605",
        "SOCKS 176.215.179.44:1080",
        "SOCKS 212.34.131.134:1080",
        "SOCKS 42.112.52.40:20001",
        "SOCKS 45.74.31.40:5471",
        "SOCKS 45.74.31.42:7609",
        "SOCKS 45.74.31.47:16369",
        "SOCKS 68.233.8.123:1080",
        "SOCKS 94.73.200.55:1080",
        "SOCKS 45.74.31.41:7636",
        "SOCKS 5.188.206.94:995",
        "SOCKS 45.74.31.42:5743",
        "SOCKS 45.74.31.41:8266",
        "SOCKS 45.74.31.40:11602",
        "SOCKS 147.189.169.226:9050",
        "SOCKS 144.31.13.185:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}