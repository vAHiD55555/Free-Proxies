function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:7722",
        "SOCKS 45.74.31.25:5970",
        "SOCKS 45.74.31.42:4324",
        "SOCKS 45.74.31.42:5043",
        "SOCKS 45.74.31.30:4258",
        "SOCKS 45.74.31.42:4528",
        "SOCKS 45.74.31.30:4146",
        "SOCKS 45.74.31.30:37313",
        "SOCKS 45.74.31.30:4465",
        "SOCKS 45.74.31.42:13137",
        "SOCKS 45.74.31.30:6860",
        "SOCKS 121.35.254.227:19000",
        "SOCKS 45.74.31.30:4785",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 174.138.165.213:36147",
        "SOCKS 45.74.31.42:11909",
        "SOCKS 45.74.31.30:5226",
        "SOCKS 45.74.31.42:13247",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 104.154.186.48:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}