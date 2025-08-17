function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.70.249:1080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 51.159.159.73:80",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 170.233.30.33:4153",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 42.119.2.245:16000",
        "SOCKS 47.79.19.26:8118",
        "SOCKS 117.5.37.135:4001",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 124.83.110.164:8082",
        "SOCKS 65.108.251.40:57575",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}