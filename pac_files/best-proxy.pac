function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.237.14.92:4216",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 173.209.63.67:8226",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 123.20.57.61:1001",
        "SOCKS 45.174.95.142:999",
        "SOCKS 91.206.14.184:1080",
        "SOCKS 147.75.66.235:9401",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 27.71.139.208:16000",
        "SOCKS 103.44.19.217:1111",
        "SOCKS 211.109.199.99:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}