function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.129.27.9:17000",
        "SOCKS 109.238.95.167:31130",
        "SOCKS 216.106.179.216:49159",
        "SOCKS 154.83.140.160:1080",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 138.128.247.206:9050",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 140.238.241.74:1080",
        "SOCKS 144.91.82.219:9050",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 20.210.39.155:8561",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 91.206.92.212:9050",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 185.175.229.218:1080",
        "SOCKS 43.134.58.45:1080",
        "SOCKS 203.25.208.163:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}