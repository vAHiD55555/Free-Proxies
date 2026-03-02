function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.122.3.46:60000",
        "SOCKS 104.238.30.50:59741",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 121.128.121.224:3128",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 95.216.104.118:8888",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 104.238.30.40:59741",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 104.238.30.86:63900",
        "SOCKS 74.48.52.131:50161",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 213.35.110.67:10877",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}