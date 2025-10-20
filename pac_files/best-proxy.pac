function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.33.248.45:1080",
        "SOCKS 15.168.235.57:407",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 8.219.178.111:1111",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 135.181.203.208:80",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 185.93.89.179:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}