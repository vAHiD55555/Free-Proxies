function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.93:26713",
        "SOCKS 27.79.255.99:16000",
        "SOCKS 58.22.60.174:1080",
        "SOCKS 116.98.187.95:1014",
        "SOCKS 43.100.61.231:1111",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 72.240.9.63:80",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 183.164.226.253:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}