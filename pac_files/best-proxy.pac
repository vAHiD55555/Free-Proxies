function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 152.26.14.44:3156",
        "SOCKS 152.26.14.3:3156",
        "SOCKS 157.180.121.252:10353",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 103.109.56.77:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.26.14.1:3156",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 49.79.192.177:3755",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}