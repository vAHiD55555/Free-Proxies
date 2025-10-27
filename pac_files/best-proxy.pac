function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 217.25.90.44:5050",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 34.124.190.108:8090",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 168.228.44.66:999",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}