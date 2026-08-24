function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:31430",
        "SOCKS 45.74.31.42:26083",
        "SOCKS 43.156.70.98:8080",
        "SOCKS 45.74.31.30:41878",
        "SOCKS 45.74.31.42:11111",
        "SOCKS 161.97.129.202:9060",
        "SOCKS 124.223.195.172:1080",
        "SOCKS 180.158.222.93:1080",
        "SOCKS 109.199.96.116:9050",
        "SOCKS 176.88.166.176:8080",
        "SOCKS 65.21.252.66:10809",
        "SOCKS 5.75.133.113:10808",
        "SOCKS 45.140.169.209:1080",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 147.45.72.31:45700",
        "SOCKS 118.145.141.251:44074",
        "SOCKS 45.74.31.30:6391",
        "SOCKS 159.223.52.199:3128",
        "SOCKS 142.93.21.46:61616",
        "SOCKS 45.74.31.30:8182",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}