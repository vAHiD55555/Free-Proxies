function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.4:15068",
        "SOCKS 206.123.156.201:4352",
        "SOCKS 206.123.156.217:20225",
        "SOCKS 206.123.156.207:5926",
        "SOCKS 206.123.156.217:6302",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 8.220.205.172:8999",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 206.123.156.211:5540",
        "SOCKS 206.123.156.211:8589",
        "SOCKS 206.123.156.207:6960",
        "SOCKS 149.62.186.244:1080",
        "SOCKS 58.19.55.7:15174",
        "SOCKS 58.19.55.7:15380",
        "SOCKS 195.19.49.8:1080",
        "SOCKS 58.19.55.88:15024",
        "SOCKS 206.123.156.207:4965",
        "SOCKS 58.19.55.88:15063",
        "SOCKS 206.123.156.201:4003",
        "SOCKS 149.202.75.85:36666",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}