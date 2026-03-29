function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.7.252.165:3256",
        "SOCKS 38.145.203.34:8444",
        "SOCKS 38.145.203.132:8443",
        "SOCKS 206.123.156.207:4042",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 206.123.156.179:5200",
        "SOCKS 206.123.156.200:6717",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 206.123.156.193:5015",
        "SOCKS 38.34.179.40:8446",
        "SOCKS 94.130.16.48:30146",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 38.34.179.24:8443",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 45.136.130.183:8443",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 94.130.16.48:30176",
        "SOCKS 94.130.16.48:30133",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}