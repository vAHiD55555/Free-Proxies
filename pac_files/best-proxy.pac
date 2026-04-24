function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.7:15068",
        "SOCKS 206.123.156.231:10607",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 58.19.55.7:15213",
        "SOCKS 58.19.55.7:15061",
        "SOCKS 58.19.55.88:15001",
        "SOCKS 58.19.55.7:15087",
        "SOCKS 58.19.55.7:15360",
        "SOCKS 118.70.13.38:41857",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 103.239.201.50:58765",
        "SOCKS 58.19.55.7:15309",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 58.19.55.7:15369",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 206.123.156.231:4281",
        "SOCKS 195.19.50.135:1080",
        "SOCKS 206.123.156.231:10364",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 206.123.156.231:6103",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}