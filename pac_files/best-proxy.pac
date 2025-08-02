function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.187.70.38:16000",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 222.254.88.74:8080",
        "SOCKS 212.110.188.193:34409",
        "SOCKS 18.143.165.238:13040",
        "SOCKS 27.79.182.222:16000",
        "SOCKS 117.74.65.207:80",
        "SOCKS 135.181.203.208:80",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 192.177.139.220:8000",
        "SOCKS 141.94.195.25:25043",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 125.77.135.240:80",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 42.96.16.176:1312",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}