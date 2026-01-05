function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.127.156.134:8082",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 120.77.203.0:443",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 3.250.56.194:80",
        "SOCKS 45.88.0.116:3128",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 190.119.76.148:8080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 115.231.175.80:3000",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}