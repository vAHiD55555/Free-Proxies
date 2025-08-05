function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.120.61.189:43644",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 45.59.117.2:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 51.158.68.28:16379",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 135.181.203.208:80",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 8.219.236.9:1111",
        "SOCKS 192.177.33.71:8000",
        "SOCKS 171.237.122.107:1001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}