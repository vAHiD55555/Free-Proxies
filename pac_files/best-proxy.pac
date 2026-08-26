function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:33577",
        "SOCKS 161.248.190.82:8080",
        "SOCKS 199.203.152.99:8111",
        "SOCKS 118.145.141.251:44011",
        "SOCKS 45.95.233.88:1082",
        "SOCKS 45.74.31.30:6308",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 43.156.70.98:8080",
        "SOCKS 45.74.31.30:10595",
        "SOCKS 45.74.31.42:37214",
        "SOCKS 118.145.141.251:44167",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 118.145.141.251:44034",
        "SOCKS 118.145.141.251:44098",
        "SOCKS 147.45.72.31:45700",
        "SOCKS 118.145.141.251:44112",
        "SOCKS 118.145.141.251:44143",
        "SOCKS 45.74.31.30:4543",
        "SOCKS 5.79.163.26:1080",
        "SOCKS 83.147.216.208:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}