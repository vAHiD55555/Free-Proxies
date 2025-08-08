function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.240.238:16000",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.175.231.96:10001",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 27.79.143.80:16000",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 185.13.230.210:8082",
        "SOCKS 58.186.92.156:16000",
        "SOCKS 27.79.159.236:16000",
        "SOCKS 72.10.160.170:3949",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}