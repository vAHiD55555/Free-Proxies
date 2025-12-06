function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 110.41.83.41:8790",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 8.220.194.115:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 109.230.92.50:3128",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 36.7.252.165:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}