function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.64.232.9:58367",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 222.184.48.235:22222",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 206.123.156.189:12264",
        "SOCKS 90.188.224.98:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 179.96.28.58:80",
        "SOCKS 206.123.156.183:4357",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 62.217.176.47:1080",
        "SOCKS 206.123.156.177:4532",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}