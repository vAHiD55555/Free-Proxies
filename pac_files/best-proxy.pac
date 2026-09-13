function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:7070",
        "SOCKS 174.138.162.37:33787",
        "SOCKS 45.74.31.30:8989",
        "SOCKS 45.74.31.30:7364",
        "SOCKS 45.74.31.30:36558",
        "SOCKS 45.74.31.42:14287",
        "SOCKS 45.74.31.42:24105",
        "SOCKS 45.74.31.40:9052",
        "SOCKS 45.74.31.30:4030",
        "SOCKS 45.74.31.42:13146",
        "SOCKS 130.162.192.208:8080",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 45.74.31.47:26586",
        "SOCKS 45.74.31.30:6459",
        "SOCKS 45.74.31.42:23621",
        "SOCKS 81.29.249.82:5071",
        "SOCKS 45.74.31.30:10847",
        "SOCKS 45.74.31.25:8989",
        "SOCKS 45.74.31.40:11108",
        "SOCKS 185.204.170.179:1137",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}