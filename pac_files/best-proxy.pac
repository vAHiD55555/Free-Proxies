function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.25.109.163:8199",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 38.158.83.241:999",
        "SOCKS 135.181.203.208:80",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 36.255.98.177:10896",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 154.236.177.100:1977",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 103.86.131.62:80",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 203.189.159.120:1080",
        "SOCKS 110.235.255.191:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 98.190.102.62:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}