function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 79.111.118.99:1080",
        "SOCKS 62.109.1.115:1080",
        "SOCKS 200.24.159.158:999",
        "SOCKS 139.59.44.192:9050",
        "SOCKS 178.17.57.222:1080",
        "SOCKS 138.128.247.206:9050",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 103.166.158.105:8199",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 198.46.226.236:8118",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 120.133.82.62:44162",
        "SOCKS 167.233.192.213:1089",
        "SOCKS 72.255.9.24:1080",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 176.12.65.24:443",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 68.224.16.30:9100",
        "SOCKS 43.135.153.37:47783",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}