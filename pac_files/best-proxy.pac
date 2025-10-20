function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.172.55.85:1080",
        "SOCKS 43.153.28.68:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 15.168.235.57:407",
        "SOCKS 47.243.53.38:1122",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 168.181.191.153:7080",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 177.234.217.238:999",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 149.86.146.231:8080",
        "SOCKS 185.93.89.163:10078",
        "SOCKS 185.93.89.182:10058",
        "SOCKS 185.93.89.183:9363",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 197.218.16.16:3128",
        "SOCKS 45.77.99.40:8990",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}