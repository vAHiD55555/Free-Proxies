function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.126.51:5556",
        "SOCKS 202.74.243.43:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 183.96.222.70:28572",
        "SOCKS 91.121.63.51:1080",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 37.221.193.221:10380",
        "SOCKS 152.53.171.242:36041",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 152.53.36.101:16931",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 152.53.171.242:52771",
        "SOCKS 212.237.125.216:6969",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}