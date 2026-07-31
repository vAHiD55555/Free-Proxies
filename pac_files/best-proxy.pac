function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.19.50.174:1080",
        "SOCKS 106.54.229.77:1111",
        "SOCKS 201.184.165.91:1080",
        "SOCKS 91.98.237.146:9050",
        "SOCKS 202.58.77.9:8080",
        "SOCKS 47.85.195.135:1080",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 120.133.82.62:44158",
        "SOCKS 195.91.180.201:1080",
        "SOCKS 38.76.180.241:3128",
        "SOCKS 216.106.179.216:49579",
        "SOCKS 202.79.27.12:1080",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 154.217.253.30:1080",
        "SOCKS 212.48.134.145:1080",
        "SOCKS 221.176.85.238:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 107.161.168.159:3333",
        "SOCKS 160.22.200.60:69",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}