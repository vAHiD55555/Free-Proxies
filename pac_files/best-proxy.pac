function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.117.249.183:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 38.47.255.150:18080",
        "SOCKS 45.74.31.41:8387",
        "SOCKS 193.23.200.117:1085",
        "SOCKS 91.107.122.209:1080",
        "SOCKS 45.74.31.42:14272",
        "SOCKS 161.97.107.63:9050",
        "SOCKS 45.74.31.47:4342",
        "SOCKS 95.31.29.206:1080",
        "SOCKS 212.87.198.112:1080",
        "SOCKS 42.114.56.172:20001",
        "SOCKS 45.74.31.41:5548",
        "SOCKS 77.221.152.210:36219",
        "SOCKS 79.143.176.216:9050",
        "SOCKS 150.136.67.40:9050",
        "SOCKS 157.230.186.76:9050",
        "SOCKS 45.74.31.42:7013",
        "SOCKS 95.84.167.131:1080",
        "SOCKS 94.19.74.39:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}