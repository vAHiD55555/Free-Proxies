function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 62.60.131.185:4351",
        "SOCKS 178.62.116.7:1080",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 36.255.98.167:8303",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 13.229.107.106:80",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 36.255.98.161:9320",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 159.89.113.155:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}