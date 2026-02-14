function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.159.65:8443",
        "SOCKS 123.54.197.51:23788",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 27.124.9.2:5555",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 8.221.139.222:17",
        "SOCKS 123.54.197.52:21930",
        "SOCKS 123.54.197.16:21794",
        "SOCKS 123.54.197.17:20653",
        "SOCKS 123.54.197.51:20710",
        "SOCKS 123.54.197.51:20476",
        "SOCKS 8.220.149.222:80",
        "SOCKS 123.54.197.20:21723",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.53.171.242:11263",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 103.28.121.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}