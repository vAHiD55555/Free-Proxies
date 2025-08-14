function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 135.181.203.208:80",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 103.208.102.2:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 31.14.114.77:1081",
        "SOCKS 27.79.219.89:16000",
        "SOCKS 154.16.41.38:5555",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 27.153.141.90:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}