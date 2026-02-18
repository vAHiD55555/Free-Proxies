function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.143.251:3128",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 77.110.125.30:65531",
        "SOCKS 18.141.177.23:80",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 80.76.34.133:8080",
        "SOCKS 94.176.3.53:7443",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 16.79.112.218:6666",
        "SOCKS 94.183.188.7:6891",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 82.21.114.159:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 195.175.31.222:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}