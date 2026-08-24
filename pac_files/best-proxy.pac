function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.25.208.163:1145",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 202.95.15.6:1080",
        "SOCKS 167.71.204.247:9050",
        "SOCKS 45.74.31.30:8998",
        "SOCKS 160.25.174.99:8080",
        "SOCKS 45.74.31.30:9215",
        "SOCKS 45.74.31.30:8084",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 118.145.141.251:44189",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 103.247.120.51:10800",
        "SOCKS 188.166.24.179:3128",
        "SOCKS 118.145.141.251:44248",
        "SOCKS 49.13.22.249:10808",
        "SOCKS 121.101.131.93:7777",
        "SOCKS 118.145.141.251:44053",
        "SOCKS 118.145.141.251:44217",
        "SOCKS 118.145.141.251:44019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}