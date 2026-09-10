function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.151.75.21:2025",
        "SOCKS 45.74.31.30:36374",
        "SOCKS 103.174.122.197:8199",
        "SOCKS 174.138.165.213:36127",
        "SOCKS 31.76.8.205:1080",
        "SOCKS 45.32.160.61:1088",
        "SOCKS 45.74.31.30:34497",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 47.237.138.184:1080",
        "SOCKS 87.249.237.90:1080",
        "SOCKS 91.107.243.254:9094",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 82.65.237.58:9050",
        "SOCKS 198.252.108.20:9050",
        "SOCKS 195.190.121.154:1080",
        "SOCKS 109.191.10.98:1080",
        "SOCKS 114.218.59.11:7890",
        "SOCKS 176.32.33.164:1080",
        "SOCKS 72.195.34.41:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}