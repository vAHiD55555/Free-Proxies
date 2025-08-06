function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.96.16.176:1312",
        "SOCKS 212.110.188.193:34409",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 194.152.50.92:5678",
        "SOCKS 185.93.89.145:4325",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 185.93.89.145:4078",
        "SOCKS 192.177.33.221:8000",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 171.228.176.205:4001",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}