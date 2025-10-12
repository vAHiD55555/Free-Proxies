function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.161.170.163:9310",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 185.93.89.183:4097",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 160.25.74.119:10354",
        "SOCKS 117.161.170.163:9012",
        "SOCKS 103.218.242.216:9006",
        "SOCKS 185.93.89.188:4052",
        "SOCKS 103.19.130.50:8080",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 182.160.109.166:1080",
        "SOCKS 179.48.80.9:8085",
        "SOCKS 57.128.188.167:9298",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 123.128.12.93:9050",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 104.238.228.201:3128",
        "SOCKS 185.93.89.182:4002",
        "SOCKS 72.10.160.94:16137",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}