function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.7:15119",
        "SOCKS 58.19.55.4:15041",
        "SOCKS 160.250.54.8:9000",
        "SOCKS 58.19.55.7:15062",
        "SOCKS 58.19.55.7:15340",
        "SOCKS 119.81.71.27:80",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 206.123.156.193:5984",
        "SOCKS 47.237.185.181:5555",
        "SOCKS 58.19.55.7:15019",
        "SOCKS 58.19.55.88:15089",
        "SOCKS 58.19.55.88:15246",
        "SOCKS 206.123.156.193:4191",
        "SOCKS 58.19.55.7:15383",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 58.19.55.7:15385",
        "SOCKS 206.123.156.198:4110",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 58.19.55.7:15240",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}