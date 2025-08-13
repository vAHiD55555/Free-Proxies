function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.203.139.209:5678",
        "SOCKS 158.160.152.128:1080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 27.79.193.204:16000",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 62.33.53.248:3128",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 203.162.13.222:6868",
        "SOCKS 173.209.63.67:8102",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 212.113.112.84:1080",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}