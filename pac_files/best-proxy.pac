function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.77.37.39:2055",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 85.121.50.25:1080",
        "SOCKS 79.126.81.69:1080",
        "SOCKS 101.32.10.11:59394",
        "SOCKS 118.145.141.251:44126",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 37.58.221.247:3128",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 193.180.215.116:1080",
        "SOCKS 34.84.162.206:38080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 47.82.72.88:10808",
        "SOCKS 158.94.208.76:9050",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 45.77.37.39:2043",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 107.173.153.119:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}