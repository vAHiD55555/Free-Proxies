function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.231:6103",
        "SOCKS 206.123.156.207:4569",
        "SOCKS 206.123.156.207:6053",
        "SOCKS 58.19.55.7:15259",
        "SOCKS 58.19.55.88:15041",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 58.19.55.4:15343",
        "SOCKS 58.19.55.7:15169",
        "SOCKS 206.123.156.207:4994",
        "SOCKS 58.19.55.4:15249",
        "SOCKS 58.19.55.7:15084",
        "SOCKS 206.123.156.207:5946",
        "SOCKS 206.123.156.231:4902",
        "SOCKS 58.19.55.4:15058",
        "SOCKS 164.90.237.11:1080",
        "SOCKS 164.90.221.76:1081",
        "SOCKS 206.123.156.207:5601",
        "SOCKS 206.123.156.207:6425",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}