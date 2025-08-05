function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.68.28:16379",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 182.253.109.5:8080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 162.254.131.254:8087",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 120.25.189.254:3129",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 212.110.188.207:34405",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 8.140.235.207:9001",
        "SOCKS 179.61.154.8:8050",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 120.28.193.165:5050",
        "SOCKS 149.129.226.9:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}