function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.130.212:9050",
        "SOCKS 91.246.1.6:4433",
        "SOCKS 118.145.141.251:44116",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 150.241.91.238:7777",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 81.90.158.110:3128",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 103.136.106.5:1081",
        "SOCKS 194.87.35.217:40001",
        "SOCKS 193.32.177.152:1080",
        "SOCKS 195.190.121.154:1080",
        "SOCKS 120.133.82.62:44032",
        "SOCKS 47.238.130.212:3129",
        "SOCKS 120.133.82.62:44023",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 45.225.207.248:999",
        "SOCKS 5.181.178.46:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}