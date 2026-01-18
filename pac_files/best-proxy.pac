function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 163.5.128.84:14270",
        "SOCKS 199.116.112.6:4145",
        "SOCKS 188.0.167.195:8080",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 222.127.68.126:8080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 159.8.114.37:80",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 178.22.31.205:1082",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 150.107.140.238:3128",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 94.100.18.111:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}