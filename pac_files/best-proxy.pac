function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.49.65:1080",
        "SOCKS 118.145.141.251:44230",
        "SOCKS 178.130.47.21:1082",
        "SOCKS 45.74.31.30:8081",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 118.145.141.251:44023",
        "SOCKS 45.74.31.30:4552",
        "SOCKS 118.145.141.251:44199",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 45.74.31.42:6060",
        "SOCKS 65.108.246.14:9050",
        "SOCKS 202.58.77.239:8080",
        "SOCKS 195.133.73.105:10808",
        "SOCKS 118.145.141.251:44035",
        "SOCKS 45.74.31.30:8089",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 91.202.5.45:1080",
        "SOCKS 45.74.31.30:11614",
        "SOCKS 45.74.31.42:7616",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}