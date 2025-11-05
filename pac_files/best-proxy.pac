function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.79.19.26:8118",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 45.14.224.247:80",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 23.137.105.63:49281",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 8.219.129.31:1011",
        "SOCKS 23.137.105.63:28318",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 156.225.22.202:8080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 23.137.105.63:10354",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}