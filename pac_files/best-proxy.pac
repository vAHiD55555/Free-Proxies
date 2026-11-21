function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.40:4564",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 47.239.75.118:8484",
        "SOCKS 172.245.108.219:11080",
        "SOCKS 202.44.109.138:1080",
        "SOCKS 91.202.5.45:1080",
        "SOCKS 45.114.60.178:1080",
        "SOCKS 188.255.112.184:1080",
        "SOCKS 47.90.149.238:8000",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 157.20.27.117:1080",
        "SOCKS 8.218.101.70:1011",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 95.31.151.122:1080",
        "SOCKS 78.156.229.34:1080",
        "SOCKS 103.236.190.197:1080",
        "SOCKS 91.92.155.207:1080",
        "SOCKS 201.165.172.3:1080",
        "SOCKS 207.244.69.164:50005",
        "SOCKS 148.113.254.245:10800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}