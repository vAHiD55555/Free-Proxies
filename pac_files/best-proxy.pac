function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.47.37.190:1080",
        "SOCKS 128.140.76.145:13541",
        "SOCKS 47.251.57.165:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 128.140.76.145:27207",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 221.202.27.194:10810",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}