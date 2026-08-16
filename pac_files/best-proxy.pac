function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.31.207.141:1080",
        "SOCKS 68.183.60.51:3129",
        "SOCKS 202.62.52.120:1080",
        "SOCKS 144.31.152.129:1080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 216.106.179.216:49366",
        "SOCKS 144.91.82.219:9050",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 23.149.108.178:9999",
        "SOCKS 118.145.141.251:44100",
        "SOCKS 221.176.85.231:1080",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 47.82.72.88:10809",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 47.76.149.237:1011",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 65.20.105.241:10001",
        "SOCKS 47.238.236.151:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}