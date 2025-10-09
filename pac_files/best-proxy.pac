function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.19:25371",
        "SOCKS 183.62.76.91:7890",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 154.236.177.100:1977",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 67.43.236.22:1549",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 8.213.129.15:1337",
        "SOCKS 92.113.150.5:1080",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 185.93.89.145:4080",
        "SOCKS 175.138.75.137:8080",
        "SOCKS 41.174.96.38:32650",
        "SOCKS 20.252.53.196:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}