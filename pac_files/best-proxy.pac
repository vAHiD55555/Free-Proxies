function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.19.55.4:15316",
        "SOCKS 206.123.156.194:4527",
        "SOCKS 206.123.156.231:6422",
        "SOCKS 206.123.156.231:5281",
        "SOCKS 206.123.156.231:5385",
        "SOCKS 58.19.55.4:15047",
        "SOCKS 58.19.55.7:15399",
        "SOCKS 118.69.32.171:20000",
        "SOCKS 206.123.156.231:4706",
        "SOCKS 58.19.55.4:15188",
        "SOCKS 206.123.156.231:5447",
        "SOCKS 58.19.55.4:15308",
        "SOCKS 158.178.198.31:1080",
        "SOCKS 206.123.156.231:7666",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 206.123.156.231:4269",
        "SOCKS 206.123.156.231:5895",
        "SOCKS 58.19.55.7:15006",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 206.123.156.231:6421",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}