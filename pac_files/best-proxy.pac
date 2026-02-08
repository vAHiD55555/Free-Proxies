function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 169.57.157.146:8123",
        "SOCKS 207.180.228.55:80",
        "SOCKS 188.166.211.102:1080",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 181.204.39.202:26312",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 213.35.110.67:10852",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 2.144.6.212:12111",
        "SOCKS 123.54.197.19:22544",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 89.148.196.156:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}