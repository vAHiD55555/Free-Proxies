function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.251:28401",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 116.98.190.20:1010",
        "SOCKS 116.98.187.72:1022",
        "SOCKS 94.156.152.115:3128",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 46.62.143.200:8060",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}