function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:18707",
        "SOCKS 220.89.218.209:8880",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 117.74.65.207:443",
        "SOCKS 147.93.116.236:1080",
        "SOCKS 166.88.7.187:8080",
        "SOCKS 68.71.241.33:4145",
        "SOCKS 152.53.36.101:10810",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 157.180.121.252:38485",
        "SOCKS 152.53.36.101:45671",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 200.59.186.177:999",
        "SOCKS 183.80.40.51:1040",
        "SOCKS 24.199.107.98:8080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 171.238.91.139:1068",
        "SOCKS 213.35.126.34:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}