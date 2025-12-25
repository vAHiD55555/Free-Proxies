function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.179:4673",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 67.43.228.253:20411",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 8.220.140.243:8080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 43.231.249.145:9090",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 72.10.160.94:7663",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}