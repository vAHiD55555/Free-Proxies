function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.123.62:2555",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 51.20.192.194:15311",
        "SOCKS 185.93.89.183:4670",
        "SOCKS 91.218.244.153:8989",
        "SOCKS 185.93.89.145:12968",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 185.93.89.179:11222",
        "SOCKS 185.93.89.179:8471",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 185.93.89.144:4263",
        "SOCKS 185.93.89.147:4012",
        "SOCKS 103.203.234.75:8080",
        "SOCKS 124.217.107.136:8082",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 178.33.162.89:58574",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}