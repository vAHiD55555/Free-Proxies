function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 157.20.253.43:8989",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 18.143.173.102:21681",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.72.89.30:8097",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 185.93.89.147:10073",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 62.205.169.74:53281",
        "SOCKS 43.131.9.114:1777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}