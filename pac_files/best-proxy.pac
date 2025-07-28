function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 102.209.56.21:80",
        "SOCKS 117.252.95.60:80",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 171.237.101.70:1001",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 45.91.201.100:8082",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 42.118.202.56:16000",
        "SOCKS 171.237.99.213:1015",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 183.166.132.124:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}