function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 197.243.27.122:3128",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 58.186.248.240:16000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 51.159.159.73:80",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 139.59.228.95:8118",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 173.209.63.70:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}