function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.237.14.92:4216",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 5.190.36.4:3128",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 212.110.188.193:34409",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 146.103.99.6:6588",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 72.10.160.94:21851",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 183.81.57.190:3335",
        "SOCKS 181.119.84.103:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}