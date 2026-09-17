function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.22:10061",
        "SOCKS 45.74.31.47:15339",
        "SOCKS 45.74.31.22:10674",
        "SOCKS 45.74.31.42:21312",
        "SOCKS 45.74.31.30:6478",
        "SOCKS 45.74.31.30:40529",
        "SOCKS 149.129.255.179:8018",
        "SOCKS 45.74.31.42:12978",
        "SOCKS 45.74.31.41:10811",
        "SOCKS 45.74.31.22:11216",
        "SOCKS 45.74.31.30:43056",
        "SOCKS 45.74.31.25:5470",
        "SOCKS 45.74.31.25:5921",
        "SOCKS 45.74.31.30:9900",
        "SOCKS 45.74.31.22:12282",
        "SOCKS 45.74.31.50:11317",
        "SOCKS 45.74.31.30:38560",
        "SOCKS 45.74.31.50:11540",
        "SOCKS 45.74.31.41:16321",
        "SOCKS 80.78.25.87:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}