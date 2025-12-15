function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 34.173.73.208:14",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 194.87.77.22:80",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 158.160.81.185:1080",
        "SOCKS 147.45.136.77:5222",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 67.43.236.18:25943",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.109.212.85:8428",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 91.213.99.134:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}