function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.193:4145",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 72.56.94.27:1081",
        "SOCKS 45.74.31.42:6212",
        "SOCKS 138.124.10.104:443",
        "SOCKS 47.250.177.202:8008",
        "SOCKS 109.120.138.241:1080",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 46.0.229.208:1080",
        "SOCKS 47.76.144.139:8000",
        "SOCKS 185.247.208.139:1080",
        "SOCKS 45.140.169.209:1080",
        "SOCKS 8.209.96.245:89",
        "SOCKS 118.145.141.251:44144",
        "SOCKS 118.145.141.251:44137",
        "SOCKS 45.74.31.42:13444",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 104.234.138.98:9080",
        "SOCKS 95.211.174.135:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}