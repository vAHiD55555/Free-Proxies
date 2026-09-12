function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:6425",
        "SOCKS 45.74.31.30:9677",
        "SOCKS 45.74.31.30:10999",
        "SOCKS 45.74.31.30:10185",
        "SOCKS 45.74.31.30:32720",
        "SOCKS 45.74.31.30:9889",
        "SOCKS 45.74.31.47:27288",
        "SOCKS 45.74.31.42:4219",
        "SOCKS 45.74.31.30:4604",
        "SOCKS 13.125.44.24:80",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 45.74.31.42:13362",
        "SOCKS 45.74.31.30:6146",
        "SOCKS 38.172.160.16:999",
        "SOCKS 45.74.31.30:4107",
        "SOCKS 45.74.31.30:5022",
        "SOCKS 130.255.94.39:5080",
        "SOCKS 45.74.31.30:10105",
        "SOCKS 18.230.23.72:40381",
        "SOCKS 203.25.208.163:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}