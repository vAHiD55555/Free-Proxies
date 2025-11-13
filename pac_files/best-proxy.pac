function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:27417",
        "SOCKS 152.53.36.101:52915",
        "SOCKS 38.7.18.149:999",
        "SOCKS 89.58.45.94:10061",
        "SOCKS 8.222.244.156:1100",
        "SOCKS 152.53.171.242:12979",
        "SOCKS 8.222.135.213:10009",
        "SOCKS 89.58.45.94:51145",
        "SOCKS 207.154.230.54:14273",
        "SOCKS 89.58.45.94:12747",
        "SOCKS 152.53.36.101:43725",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.53.36.101:13045",
        "SOCKS 152.53.36.101:43949",
        "SOCKS 87.117.11.57:1080",
        "SOCKS 89.58.45.94:20564",
        "SOCKS 152.53.171.242:18193",
        "SOCKS 152.53.171.242:17947",
        "SOCKS 152.53.36.101:20565",
        "SOCKS 134.122.21.142:33346",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}