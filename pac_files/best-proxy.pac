function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.91.29.151:1081",
        "SOCKS 206.123.156.207:5097",
        "SOCKS 206.123.156.207:6178",
        "SOCKS 93.185.156.89:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 206.123.156.207:5025",
        "SOCKS 206.123.156.211:6728",
        "SOCKS 206.123.156.231:6584",
        "SOCKS 206.123.156.201:4551",
        "SOCKS 91.107.228.234:22183",
        "SOCKS 58.19.55.7:15306",
        "SOCKS 206.123.156.207:5795",
        "SOCKS 58.19.55.88:15004",
        "SOCKS 144.31.159.73:3128",
        "SOCKS 206.123.156.211:5359",
        "SOCKS 38.180.4.161:1080",
        "SOCKS 58.19.55.4:15025",
        "SOCKS 58.19.55.4:15252",
        "SOCKS 206.123.156.217:9820",
        "SOCKS 51.159.125.63:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}