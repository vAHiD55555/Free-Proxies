function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.60.156:3129",
        "SOCKS 89.19.175.122:8008",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 154.236.177.104:1976",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 203.162.13.26:6868",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 190.93.102.136:999",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}