function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.25.215.182:22222",
        "SOCKS 58.19.55.7:15320",
        "SOCKS 58.19.55.7:15073",
        "SOCKS 206.123.156.198:4306",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 129.213.162.27:17777",
        "SOCKS 68.224.16.30:9100",
        "SOCKS 58.19.55.7:15351",
        "SOCKS 58.19.55.4:15395",
        "SOCKS 58.19.55.88:15012",
        "SOCKS 185.63.197.36:10080",
        "SOCKS 58.19.55.4:15362",
        "SOCKS 58.19.55.7:15390",
        "SOCKS 58.19.55.7:15044",
        "SOCKS 167.172.138.48:49167",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 58.19.55.7:15034",
        "SOCKS 58.19.55.4:15228",
        "SOCKS 47.237.2.245:541",
        "SOCKS 58.19.55.4:15262",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}