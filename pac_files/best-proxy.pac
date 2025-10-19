function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.59.173.105:44177",
        "SOCKS 185.93.89.164:8093",
        "SOCKS 185.93.89.163:8003",
        "SOCKS 152.53.36.101:10521",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.93.89.144:8005",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 176.119.36.76:1111",
        "SOCKS 8.219.178.111:9090",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 199.188.207.30:8080",
        "SOCKS 152.53.36.101:10062",
        "SOCKS 202.5.36.144:8448",
        "SOCKS 72.10.160.92:12137",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}