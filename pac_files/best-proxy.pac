function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.105.107:16379",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 177.234.217.237:999",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 52.87.167.25:80",
        "SOCKS 8.211.194.78:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}