function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 37.221.193.221:42231",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 8.217.119.46:1011",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 116.101.73.242:1035",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 157.180.121.252:16715",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 116.101.74.117:1035",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 157.180.121.252:26209",
        "SOCKS 37.221.193.221:23759",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}