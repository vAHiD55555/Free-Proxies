function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 206.123.156.214:6550",
        "SOCKS 94.130.16.48:30017",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 38.145.218.216:8443",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 45.136.131.38:8448",
        "SOCKS 38.145.208.234:8443",
        "SOCKS 45.136.130.253:8443",
        "SOCKS 38.145.218.227:8443",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 206.123.156.197:4145",
        "SOCKS 38.34.183.13:8449",
        "SOCKS 38.34.179.7:8443",
        "SOCKS 94.130.16.48:30047",
        "SOCKS 206.123.156.178:7174",
        "SOCKS 45.136.130.176:8447",
        "SOCKS 111.61.73.175:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}