function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:40108",
        "SOCKS 152.53.36.101:20407",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 152.53.36.101:28231",
        "SOCKS 152.53.36.101:45219",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 45.161.237.5:3131",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 202.58.77.9:8080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.53.171.242:52929",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 67.43.228.252:16377",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 152.53.36.101:30181",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}