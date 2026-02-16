function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.59.38:80",
        "SOCKS 67.43.236.19:24515",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 91.217.33.161:8080",
        "SOCKS 18.192.100.176:8080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 217.76.245.80:999",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 123.54.197.52:21807",
        "SOCKS 123.54.197.49:23831",
        "SOCKS 109.69.76.49:8080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 202.21.115.178:8080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 191.103.219.225:48612",
        "SOCKS 123.54.197.16:22308",
        "SOCKS 123.54.197.50:21196",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}