function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.91:2473",
        "SOCKS 185.93.89.145:9315",
        "SOCKS 185.93.89.187:8128",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 8.212.168.170:623",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 185.93.89.146:4083",
        "SOCKS 36.93.8.34:11000",
        "SOCKS 135.181.203.208:80",
        "SOCKS 185.93.89.145:10122",
        "SOCKS 185.93.89.182:12359",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 185.93.89.181:12000",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 208.113.155.120:41154",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}