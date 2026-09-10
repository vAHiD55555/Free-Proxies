function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.52.120:1080",
        "SOCKS 34.43.46.91:80",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 47.86.233.54:9898",
        "SOCKS 38.76.213.131:443",
        "SOCKS 45.74.31.30:39672",
        "SOCKS 45.74.31.42:4090",
        "SOCKS 45.74.31.30:5207",
        "SOCKS 216.105.128.144:4145",
        "SOCKS 103.134.220.143:1080",
        "SOCKS 212.48.150.38:1080",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 45.139.77.195:1080",
        "SOCKS 51.210.5.144:1088",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 45.74.31.42:5102",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 174.138.165.202:38435",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 167.234.251.155:8880",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}