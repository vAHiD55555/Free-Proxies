function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.238.79.111:8080",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 117.161.170.163:9492",
        "SOCKS 20.252.53.196:3128",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 165.16.29.253:2020",
        "SOCKS 181.129.147.163:8080",
        "SOCKS 5.135.136.19:12321",
        "SOCKS 157.66.84.24:1983",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 52.148.130.219:8080",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 163.223.230.92:39089",
        "SOCKS 31.15.169.77:808",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 67.43.228.251:9105",
        "SOCKS 103.73.193.133:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}