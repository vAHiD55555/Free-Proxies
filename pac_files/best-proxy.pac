function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.26.206:8561",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 117.20.64.44:56981",
        "SOCKS 157.180.121.252:20019",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 47.237.132.36:33333",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 44.251.173.250:368",
        "SOCKS 47.242.53.7:1111",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 120.77.203.0:443",
        "SOCKS 178.128.167.129:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}