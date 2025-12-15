function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 8.219.168.15:1111",
        "SOCKS 159.65.11.208:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 128.140.76.145:31756",
        "SOCKS 115.127.179.86:2026",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 128.140.76.145:14827",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 67.43.228.252:2357",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 20.78.118.91:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}