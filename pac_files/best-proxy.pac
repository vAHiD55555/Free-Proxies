function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.216.224.108:8192",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 180.211.187.187:8008",
        "SOCKS 184.181.178.33:4145",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 13.212.76.113:9298",
        "SOCKS 79.120.9.143:7777",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}