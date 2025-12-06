function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.249.52.106:999",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 31.220.22.125:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 77.41.167.137:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 103.220.23.211:8080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 36.7.252.165:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}