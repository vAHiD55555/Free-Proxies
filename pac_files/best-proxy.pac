function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.22:12141",
        "SOCKS 45.74.31.40:13030",
        "SOCKS 45.74.31.42:12636",
        "SOCKS 45.74.31.42:22846",
        "SOCKS 120.133.82.62:44019",
        "SOCKS 45.74.31.30:7886",
        "SOCKS 45.74.31.30:9305",
        "SOCKS 45.74.31.30:11368",
        "SOCKS 174.138.165.213:36230",
        "SOCKS 49.87.0.225:8989",
        "SOCKS 45.74.31.22:14487",
        "SOCKS 45.74.31.30:10154",
        "SOCKS 45.74.31.42:14604",
        "SOCKS 45.74.31.42:12776",
        "SOCKS 45.74.31.25:16930",
        "SOCKS 45.74.31.42:13362",
        "SOCKS 149.129.255.179:8060",
        "SOCKS 45.74.31.22:10595",
        "SOCKS 45.74.31.40:8865",
        "SOCKS 57.129.134.10:8086",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}