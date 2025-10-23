function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 43.208.25.125:8004",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 172.99.189.39:15604",
        "SOCKS 117.74.65.207:443",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 129.213.139.179:8080",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 137.184.152.66:20202",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 67.43.228.252:1359",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 152.53.36.101:24123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}