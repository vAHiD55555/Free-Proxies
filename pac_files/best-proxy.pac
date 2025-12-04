function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.68.133:8811",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 37.59.112.197:80",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 184.170.251.30:11288",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 152.42.229.196:3128",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 185.6.9.176:8072",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}